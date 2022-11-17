import React from "react"
import myIcon from './download.png';


function Header() {
    return (
        <header className='nav-header'>

            <nav className='nav'>

                <img src={myIcon} alt="React"
                className='image'
                    // style={{ width: '100px' }}
                />
                <ul className='nav-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;