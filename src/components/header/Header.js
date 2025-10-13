import React from 'react'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import myCV from '../../cv/Sachintha_Niyangoda_ATS_CV.pdf';


const Header = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <header id="header" className={`wpo-site-header ${props.hclass}`}>
            <nav className="navigation navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                            <div className="mobail-menu">
                                <MobileMenu />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6">
                            <div className="navbar-header">
                                <NavLink className="navbar-brand" to="/home">Sachintha</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-1 col-1">
                            <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                <button className="menu-close"><i className="ti-close"></i></button>
                                <ul className="nav navbar-nav mb-2 mb-lg-0">
                                    <li><Link to="Home" spy={true} smooth={true} duration={500} offset={-80}>Home</Link></li>
                                    <li><Link to="about" spy={true} smooth={true} duration={500} offset={-80}>About</Link></li>
                                    <li><Link to="projects" spy={true} smooth={true} duration={500} offset={-80} >Projects</Link></li>
                                    <li><Link to="contact" spy={true} smooth={true} duration={500} offset={-80}>Contact</Link></li>
                                    {/* <li><Link to="blog" spy={true} smooth={true} duration={500} offset={-80}>Blog</Link></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2 col-2">
                            <div className="header-right">
                                <Link to="contact" spy={true} smooth={true} duration={500} offset={-80} className="theme-btn">Contact Me</Link>
                                <a
                                    href={myCV}
                                    className="theme-btn theme-btn--outline"
                                    download
                                    rel="noopener"
                                    style={{ marginLeft: 12, backgroundColor: '#5A9690' }}
                                    aria-label="Download my CV (PDF)"
                                >
                                    Download CV
                                </a>
                                <div className="header-search-form-wrapper d-lg-none d-block">
                                    <div className="cart-search-contact">
                                        <button className="search-toggle-btn"><i
                                            className="fi flaticon-magnifiying-glass"></i></button>
                                        <div className="header-search-form">
                                            <form>
                                                <div>
                                                    <input type="text" className="form-control"
                                                        placeholder="Search here..." />
                                                    <button type="submit"><i
                                                        className="fi flaticon-magnifiying-glass"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;