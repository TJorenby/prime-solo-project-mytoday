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
            <div>
                <LogOutButton />
            </div>
        </div>
    )
}

export default Header;
