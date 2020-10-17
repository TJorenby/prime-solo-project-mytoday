import React from 'react'
import './Header.css'
import LogOutButton from '../LogOutButton/LogOutButton';

function Header() {
    return (
        <div className="header">
            <img
                className="header__headerImage"
                src="/images/myToday-logo-low-res.jpeg"
                alt=""
            />
            <LogOutButton />
        </div>
    )
}

export default Header;
