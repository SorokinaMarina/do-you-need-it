/* eslint-disable react/no-array-index-key */
import { useState } from 'react'
import { menu } from '../../utils/constants'
import logo from '../../images/logo.svg'
import './Header.css'

function Header() {
    const [activeIndex, setActiveIndex] = useState(0)
    function handleClick(evt, index) {
        evt.preventDefault()
        setActiveIndex(index)
    }
    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="header__menu-list">
                    {menu.map((item, index) => (
                        <li className="header__menu-list-element" key={index}>
                            {index % 2 === 0 ? (
                                <a
                                    className={`header__menu-list-link ${index === activeIndex ? 'header__menu-list-link_border' : ''}`}
                                    href="/"
                                    onClick={(evt) => handleClick(evt, index)}
                                >
                                    {item}
                                </a>
                            ) : (
                                <p className="header__menu-list-paragraph">
                                    {item}
                                </p>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="header__logo-container">
                    <img className="header__logo" src={logo} alt="Логотип" />
                </div>
                <address className="header__contacts">
                    <div className='header__adress'>
                        <a
                            className="header__adress-link"
                            href="tel:+9 999 555 5555"
                        >
                            +9 999 555 5555
                        </a>
                        <a
                            className="header__adress-link"
                            href="mailto:info@sobaka.ge"
                        >
                            info@sobaka.ge
                        </a>
                        <p className="header__adress-street">
                            наб. Принсенграхт 263- 265, Амстердам
                        </p>
                    </div>
                </address>
            </nav>
        </header>
    )
}

export default Header
