import React from 'react'
import './Footer.css'
import { Link, Route } from 'react-router-dom';

//Styling Imports
import { BsPlusCircle } from "react-icons/bs";

function FooterNav() {
    return (
        <div className="footer">
            <div className="footer__btns">
                <Link to="/archive">
                    <button>
                        Archive
            </button>
                </Link>
                <Link to="/addevent">
                    <div>
                        <button
                            className="btn-styles"

                        >
                            <BsPlusCircle size="10%" color="white" /></button>
                    </div>
                </Link>

                <Link to="/highlights">
                    <button>
                        Highlights
            </button>
                </Link>
            </div>

        </div>
    )
}

export default FooterNav;
