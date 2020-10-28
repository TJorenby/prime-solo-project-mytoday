import React from 'react'
import LogOutButton from '../LogOutButton/LogOutButton';

//Styling Imports
import './Header.scss'

function Header() {
    return (
        <div className="header">
            <img
                className="header__headerImage"
                src="/images/myToday-logo-white4.png"
                alt=""
            />
            <div className="link logout">
                <LogOutButton className="text_color" />
            </div>
        </div>
    )
}

export default Header;
