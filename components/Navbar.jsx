import React from 'react';
import Link from 'next/link';

const Navbar = (props) => {

    return <div>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid justify-content-start">
                <Link href='/'>
                    <a className="navbar-brand">Home</a>
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href='/products'>
                            <a className="nav-link active" aria-current="page">Products</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
}

export default Navbar;