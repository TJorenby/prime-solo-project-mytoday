import React from 'react'

import { Link } from 'react-router-dom';

//Styling Imports
import './FooterNav.scss'
import { BiPhotoAlbum, BiHomeAlt, BiCamera, BiPin } from "react-icons/bi";

function FooterNav() {
    return (
        <div className="footer">
            <div className="footer__btns">
                <Link to="/archive">

                    <BiPhotoAlbum size="30px" color="whitesmoke" />

                </Link>
                <Link to="/addevent">
                    <div>

                        <BiCamera size="30px" color="whitesmoke" />

                    </div>
                </Link>

                {/* <Link to="/highlights">

                    <BiPin size="30px" color="whitesmoke" />

                </Link> */}

                <Link to="/home">


                    <BiHomeAlt size="30px" color="whitesmoke" />

                </Link>
            </div>

        </div>
    )
}

export default FooterNav;
