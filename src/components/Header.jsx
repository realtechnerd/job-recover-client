import React from 'react'
import logo from '../img/logo.png'

function Header() {
    return (
        <div className='header'>
            <img src={logo} alt="JobRecover Logo" className="header__logo"/>
        </div>
    )
}

export default Header
