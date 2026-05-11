import star from "../assets/star.svg"
import heart from "../assets/heart.svg"
import heartAc from "../assets/heart-ac.svg"
import data from "./data.js"
import { useState } from "react"

function Products({ addToCart, filterText, addToWishlist, wishlistItems }) {
    const [showAll, setShowAll] = useState(true)
    const [showCat, setShowCat] = useState(true)
    const [showDog, setShowDog] = useState(true)
    const [showBird, setShowBird] = useState(true)

    const filtered = data.filter(product => {
        const matchText = product.title
            .toLowerCase()
            .includes(filterText.toLowerCase())

        const anyFilterActive = !showAll && (showCat || showDog || showBird)
        
        let matchCategory = true
        
        if (anyFilterActive) {
            matchCategory = 
                (product.category === 'cat' && showCat) ||
                (product.category === 'dog' && showDog) ||
                (product.category === 'bird' && showBird)
        }

        return matchText && matchCategory
    })

    const isInWishlist = (id) => wishlistItems.some(item => item.id === id)

    return (
        <section className="products">
            <div className="products__top">
                <div className="products__top-row">
                    <div className="products__top-title">Products</div>
                    <div className="products__top-filter">
                        <button type="button" className={`filter-btn ${showAll ? 'active' : ''}`} onClick={() => {
                            setShowAll(true)
                            setShowCat(true)
                            setShowDog(true)
                            setShowBird(true)
                        }}>ALL</button>
                        <button type="button" className={`filter-btn ${!showAll && showCat ? 'active' : ''}`} onClick={() => {
                            setShowAll(false)
                            setShowCat(!showCat)
                        }}>CAT</button>
                        <button type="button" className={`filter-btn ${!showAll && showDog ? 'active' : ''}`} onClick={() => {
                            setShowAll(false)
                            setShowDog(!showDog)
                        }}>DOG</button>
                        <button type="button" className={`filter-btn ${!showAll && showBird ? 'active' : ''}`} onClick={() => {
                            setShowAll(false)
                            setShowBird(!showBird)
                        }}>BIRD</button>
                    </div>
                </div>
                <button className="btn">SHOP ALL →</button>
            </div>
            <div className="products__catalog">
                {filtered.map((product) => {
                    const { id, img, title, rating, price } = product
                    const inWishlist = isInWishlist(id)
                    return (
                        <article key={id} className="product">
                            <div className="product-img">
                                <img src={`src/assets/${img}`} alt={title} />
                            </div>
                            <div className="product-info">
                                <div className="product-title">{title}</div>
                                <div className="product-rating">
                                    <img src={star} alt="star" />{rating}
                                </div>
                                <div className="product-price">{price}</div>
                            </div>
                            <div className="product-btns">
                                <button className="btn" onClick={() => addToCart(product)}>ADD TO CART</button>
                                <button className="btn btn-heart" onClick={() => addToWishlist(product, inWishlist)}>
                                    <img src={inWishlist ? heartAc : heart} alt="heart" />
                                </button>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Products