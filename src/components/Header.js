import React from 'react';
import Link from 'gatsby-link';
import './Style.module.css';

import logo from '../img/soci_logo_256.png';

const Header = () => (
  <header id="masthead" className="site-header logo-left" role="banner">
    <nav id="site-navigation" className="main-navigation menu-right" role="navigation">
      <div className="site-branding">
        <div className="site-logo">
          <Link to="/" className="custom-logo-link" rel="home" itemProp="url"><img width="128" height="128" src={ logo } className="custom-logo" alt="" itemProp="logo" /></Link>
        </div>
      </div>
      <div className="toggle-btn">
        <span className="toggle-bar toggle-bar1"></span>
        <span className="toggle-bar toggle-bar2"></span>
        <span className="toggle-bar toggle-bar3"></span>
      </div>
      <div>
      <ul className="nav plx_nav menu">
        <li className="eight_sec_menu menu-item" id="eight_sec_slider"><Link data-scroll data-options='{ "speed: 500,easing": "easeInQuad" }' to="/#slider">HOME</Link></li>
        <li className="eight_sec_menu menu-item" id="eight_sec_menu_about"><Link className='menu_about_section' data-scroll data-options='{ "easing": "easeInQuad" }' to="/#about-soci" >ABOUT SOCI</Link></li>
        <li className="eight_sec_menu menu-item" id="eight_sec_menu_portfolio"><Link className='menu_portfolio_section' data-scroll data-options='{ "easing": "easeInQuad" }' to="/#what-we-do" >WHAT WE DO</Link></li>
        <li className="eight_sec_menu menu-item" id="eight_sec_menu_blog"><Link className='menu_blog_section' data-scroll data-options='{ "easing": "easeInQuad" }' to="/#our-stories" >OUR STORIES</Link></li>
        <li className="eight_sec_menu menu-item" id="eight_sec_menu_contact"><Link className='menu_contact_section' data-scroll data-options='{ "easing": "easeInQuad" }' to="/#contact-us" >CONTACT US</Link></li>
      </ul>
      </div>
    </nav>
    <div className="ed-search-wrap">
      <div className="search-icon">
      <i className="fa fa-search"></i>
        <div className="ed-search">
        <div className="search-close"><i className="fa fa-close"></i></div>
        <form action="http://localhost:32902/" className="search-form" method="get" role="search">
          <label>
            <span className="screen-reader-text">Search for:</span>
            <input type="search" title="Search for:" name="s" value="" placeholder="discover..." className="search-field" />
          </label>
          <input type="submit" value="discover" className="search-submit" />
        </form> 
        </div>
      </div>
    </div>
  <div className="header-sticky-overlay"></div>
  </header>
);

export default Header;
