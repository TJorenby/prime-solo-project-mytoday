import React from 'react'
import './Header.scss'
import LogOutButton from '../LogOutButton/LogOutButton';

function Header() {
    return (
        <div className="header">
            <img
                className="header__headerImage"
                src="/images/myToday-logo-white4.png"
                alt=""
            />
            <div className="link">
                <LogOutButton className="text_color" />
            </div>
        </div>
    )
}

export default Header;
