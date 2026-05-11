import { useNavigate } from 'react-router-dom'
import star from "../assets/star.svg"
import heartAc from "../assets/heart-ac.svg"
import wishlistEmpty from "../assets/cart-empty.svg"

function Wishlist({ wishlistItems, addToWishlist, addToCart, clearWishlist }) {
    const navigate = useNavigate()

    if (!wishlistItems || wishlistItems.length === 0) {
        return (
            <section className="wishlist">
                <div className="wishlist__header-wrapper">
                    <div className="wishlist__header">
                        <h1 className="wishlist__title">Favorites</h1>
                    </div>
                </div>
                <div className="wishlist__empty">
                    <img src={wishlistEmpty} alt="Empty wishlist" />
                    <h2 className="wishlist__empty-title">Your Favorites List Is Empty</h2>
                    <p className="wishlist__empty-text">Add some products to your favorites to see them here</p>
                    <button className="btn" onClick={() => navigate('/')}>SHOPPING</button>
                </div>
            </section>
        )
    }

    const removeFromWishlist = (product) => {
        addToWishlist(product, true)
    }

    return (
        <section className="wishlist">
            <div className="wishlist__header-wrapper">
                <div className="wishlist__header">
                    <h1 className="wishlist__title">Favorites</h1>
                    <button className="btn" onClick={clearWishlist}>REMOVE ALL</button>
                </div>
            </div>

            <div className="wishlist__items">
                {wishlistItems.map((item) => {
                    return (
                        <article key={item.id} className="product wishlist-product">
                            <div className="product-img">
                                <img src={`src/assets/${item.img}`} alt={item.title} />
                                <button className="wishlist-product__heart" onClick={() => removeFromWishlist(item)}>
                                    <img src={heartAc} alt="heart" />
                                </button>
                            </div>
                            
                            <div className="product-info">
                                <div className="product-title">{item.title}</div>
                                <div className="product-rating">
                                    <img src={star} alt="star" /> {item.rating}
                                </div>
                                <div className="product-price">{item.price}</div>
                                <button className="btn btn--add-to-cart" onClick={() => addToCart(item)}>
                                    ADD TO CART
                                </button>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Wishlist

