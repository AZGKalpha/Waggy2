import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Gallery from './components/Gallery'
import Offer from './components/Offer'
import Footer from './components/Footer'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Wishlist from './components/Wishlist'
import CookieWarning from './components/CookieWarning'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
    const [cartItems, setCartItems] = useLocalStorage('cartItems', [])
    const [wishlistItems, setWishlistItems] = useLocalStorage('wishlistItems', [])
    const [filterText, setFilterText] = useState("")

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id)
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...prevItems, { ...product, quantity: 1 }]
        })
    }

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        )
    }

    const removeSelectedFromCart = (idsToRemove) => {
        setCartItems(prevItems =>
            prevItems.filter(item => !idsToRemove.includes(item.id))
        )
    }

    const clearCart = () => {
        setCartItems([])
    }

    const clearWishlist = () => {
        setWishlistItems([])
    }

    const addToWishlist = (product, remove = false) => {
        if (remove) {
            setWishlistItems(prevItems => prevItems.filter(item => item.id !== product.id))
        } else {
            setWishlistItems(prevItems => {
                const exists = prevItems.find(item => item.id === product.id)
                if (exists) return prevItems
                return [...prevItems, product]
            })
        }
    }

    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <>
            <Router>
                <Header cartCount={cartCount} filterText={filterText} setFilterText={setFilterText} />
                <main className='main'>
                    <Routes>
                        <Route path='/' element={
                            <>
                                <Hero />
                                <Products addToCart={addToCart} filterText={filterText} addToWishlist={addToWishlist} wishlistItems={wishlistItems} />
                                <Offer />
                                <Gallery />
                            </>
                        } />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/cart" element={
                            <Cart
                                cartItems={cartItems}
                                updateQuantity={updateQuantity}
                                removeSelectedFromCart={removeSelectedFromCart}
                                clearCart={clearCart}
                                addToWishlist={addToWishlist}
                                wishlistItems={wishlistItems}
                            />
                        } />
                        <Route path="/wishlist" element={
                            <Wishlist
                                wishlistItems={wishlistItems}
                                addToWishlist={addToWishlist}
                                addToCart={addToCart}
                                clearWishlist={clearWishlist}
                            />
                        } />
                    </Routes>
                </main>
                <Footer />
                <CookieWarning />
            </Router >
        </>
    )
}

export default App