import Link from 'next/link';
import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';

const NavbarComponent = (props) => {
    return <div
        className={`navbar navbar-expand-lg ${props.navTheme} position-absolute w-100`}>
        <div className='container '>
            <Link href='/'>
                <span className={`navbar-brand btn text-white`} >
                    <span className='fw-bold'>
                        E-SHOP
                    </span>
                    <span className='lead ms-1 '>
                        | Furniture
                    </span>
                </span>
            </Link>
            <button className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                href='#eshopNavbar'
                aria-controls='eshopNavbar'
                aria-expanded="false"
            // aria-label="Toggle navigation"
            >
                <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='eshopNavbar'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li>
                        <Link href='/products'>
                            <span className='nav-link active btn text-white' >
                                Product
                            </span>
                        </Link>
                    </li>
                </ul>
                <div className='d-flex'>
                    <div className='btn-group'>
                        <button className='btn btn-outline-light' type='button' >
                            Sign In
                        </button>
                        <button className='btn btn-primary'
                            type='button'>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default NavbarComponent;