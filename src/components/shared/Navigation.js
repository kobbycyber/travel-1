import React from 'react'
import {Link} from 'react-router-dom'

class Navigation extends React.Component {
    render() {
        return(
            <div className="super_container">
                <header className="header">
                <nav className="main_nav">
                    <div className="container">
                        <div className="row">
                            <div className="col main_nav_col d-flex flex-row align-items-center justify-content-start">
                                <div className="logo_container">
                                    <div className="logo"><Link to={"/"}><img src="images/logo.png" alt=""/>travelix</Link></div>
                                </div>
                                <div className="main_nav_container ml-auto">
                                    <ul className="main_nav_list">
                                        <li className="main_nav_item"><Link to={"/Travel"}>Travel Destination</Link></li>
                                        <li className="main_nav_item"><Link to={"/MongolTours"}>Mongolian Tours</Link></li>
                                        <li className="main_nav_item"><Link to={"/Mongolia"}>About Mongolia</Link></li>
                                        <li className="main_nav_item"><Link to={"/Blog"}>Blog</Link></li>
                                    </ul>
                                </div>
                                <div className="content_search ml-lg-0 ml-auto">
                                </div>

                                <form id="search_form" className="search_form bez_1">
                                    <input type="search" className="search_content_input bez_1"/>
                                </form>

                                <div className="hamburger">
                                    <i className="fa fa-bars trans_200"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        <div className="menu trans_500">
            <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
                <div className="menu_close_container"><div className="menu_close"></div></div>
                <div className="logo menu_logo"><a href="#"><img src="images/logo.png" alt=""/></a></div>
                <ul>
                    <li className="menu_item"><a href="#">home</a></li>
                    <li className="menu_item"><a href="about.html">about us</a></li>
                    <li className="menu_item"><a href="offers.html">offers</a></li>
                    <li className="menu_item"><a href="blog.html">news</a></li>
                    <li className="menu_item"><a href="contact.html">contact</a></li>
                </ul>
            </div>
        </div>
            </div>
        )
    }
}

export default Navigation