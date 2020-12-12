import React from "react";

function Nav() { 
    return(
        <>
        
        <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container">

                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                
                                <div className="collapse navbar-collapse">
                                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                                <li className="nav-item active">
                                                    <a className="nav-link" href="/">About</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/portfolio">Portfolio</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/contact">Contact</a>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </nav>
        </header>


        </>
    )
}

export default Nav;