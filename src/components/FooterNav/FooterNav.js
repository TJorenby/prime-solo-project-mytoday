import React from 'react'
import './Footer.css'
import { Link, Route } from 'react-router-dom';

function FooterNav() {
    return (
        <div className="footer">
            <Link to="/archive">
                <button>
                    Archive
            </button>
            </Link>
            <Link to="/addevent">
                <button>Add Event</button>
            </Link>

            <Link to="/highlights">
                <button>
                    Highlights
            </button>
            </Link>

        </div>
    )
}

export default FooterNav;
