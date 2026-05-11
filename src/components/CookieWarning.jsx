import { useState, useEffect } from 'react'

function CookieWarning() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent')
        if (!consent) {
            setTimeout(() => setShow(true), 1000)
        }
    }, [])

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'true')
        setShow(false)
    }

    if (!show) return null

    return (
        <div className="cookie-warning">
            <div className="cookie-warning__content">
                <p className="cookie-warning__text">We use cookies to collect personal
                    information through forms and user accounts. By continuing to use our
                    website, you consent to our cookie policy.</p>
                <button className="btn cookie-warning__btn" onClick={acceptCookies}>
                    Accept
                </button>
            </div>
        </div>
    )
}

export default CookieWarning

