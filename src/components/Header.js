import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    return(

        <header>
            <ul>
                <li><Link>Home</Link></li>
                <li><Link to="/custom">Custom Form</Link></li>
            </ul>
        </header>

    )

}

export default Header