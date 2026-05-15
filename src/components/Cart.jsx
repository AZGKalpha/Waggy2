import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import star from "../assets/star.svg"
import heart from "../assets/heart.svg"
import heartAc from "../assets/heart-ac.svg"
import ch from "../assets/ch.svg"
import chAc from "../assets/ch-ac.svg"
import cartEmpty from "../assets/cart-empty.svg"

function Cart({ cartItems, updateQuantity, removeSelectedFromCart, clearCart, addToWishlist, wishlistItems }) {
    const [selectedItems, setSelectedItems] = useState([])
    const navigate = useNavigate()

    if (!cartItems || cartItems.length === 0) {
        return (
            <section className="cart">
                <div className="container">
                    <div className="cart__header-empty">
                        <h1 className="cart__title">Cart</h1>
                    </div>
                    <div className="cart__empty">
                        <img src={cartEmpty} alt="Empty cart" />
                        <h2 className="cart__empty-title">The Shopping Cart Is Empty For Now</h2>
                        <p className="cart__empty-text">Check Out The Main Page – We've Collected Some Products That You Might Like</p>
                        <button className="btn" onClick={() => navigate('/')}>SHOPPING</button>
                    </div>
                </div>
            </section>
        )
    }

    const toggleSelection = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(itemId => itemId !== id))
        } else {
            setSelectedItems([...selectedItems, id])
        }
    }

    const deleteSelected = () => {
        if (selectedItems.length === 0) return;
        removeSelectedFromCart(selectedItems);
        setSelectedItems([]);
    };

    const totalPrice = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.price.replace('$', ''))
        return sum + (price * item.quantity)
    }, 0)

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

    const isInWishlist = (id) => wishlistItems.some(item => item.id === id)

    const toggleWishlist = (product) => {
        if (isInWishlist(product.id)) {
            addToWishlist(product, true)
        } else {
            addToWishlist(product, false)
        }
    }

    return (
        <section className="cart">
            <div className="cart__header">
                <h1 className="cart__title">Cart</h1>
                <div className="cart__actions">
                    <button className="btn" onClick={deleteSelected} disabled={selectedItems.length === 0}>DELETE SELECTED ONES</button>
                    <button className="btn" onClick={clearCart}>DELETE ALL PRODUCTS</button>
                </div>
            </div>

            <div className="cart__items products__catalog">
                {cartItems.map((item) => {

                    return (
                        <article key={item.id} className="product cart-product">
                            <div className="product-checkbox">
                                <button className="checkbox-btn" onClick={() => toggleSelection(item.id)}>
                                    <img src={selectedItems.includes(item.id) ? chAc : ch} alt="checkbox" />
                                </button>
                            </div>

                            <div className="product-img">
                                <img src={`src/assets/${item.img}`} alt={item.title} />
                            </div>

                            <div className="product-info">
                                <div className="product-title">{item.title}</div>
                                <div className="product-rating">
                                    <img src={star} alt="star" /> {item.rating}
                                </div>
                                <div className="product-price">{item.price}</div>
                            </div>

                            <div className="product-btns">
                                <button className="qty-btn minus" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                                    −
                                </button>
                                <input type="text" className="qty-input" value={item.quantity} readOnly />
                                <button className="qty-btn plus" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                    +
                                </button>
                                <button className="btn btn-heart" onClick={() => toggleWishlist(item)}>
                                    <img src={isInWishlist(item.id) ? heartAc : heart} alt="heart" />
                                </button>
                            </div>
                        </article>
                    )
                })}
            </div>

            <div className="cart__footer">
                <div className="cart__total">
                    <span className="cart__total-label">Total: {totalItems} products</span>
                    <span className="cart__total-price">${totalPrice.toFixed(2)}</span>
                </div>
                <button className="btn btn--place-order">PLACE AN ORDER</button>
            </div>
        </section>
    )
}

export default Cart
