import React from 'react';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';

import logo from '../img/soci_logo_256.png';

class Header extends React.Component {
  render() {
    return (
      <header id="masthead" className="site-header logo-left" role="banner">
        <div className="site-branding">
          <div className="site-logo">
            <a href="/" className="custom-logo-link" rel="home" itemProp="url"><img width="128" height="128" src={ logo } className="custom-logo" alt="" itemProp="logo" /></a>
          </div>
        </div>
        <nav id="site-navigation" className="main-navigation <?php echo $ed_nav_alignment;?>" role="navigation">
          <ul className="nav plx_nav menu">
            <li className="eight_sec_menu menu-item" id="eight_sec_slider"><a data-scroll data-options='{ "speed: 500,easing": "easeInQuad" }' href="#slider">HOME</a></li>
            <li className="eight_sec_menu menu-item" id="eight_sec_menu_about"><a className='menu_about_section' data-scroll data-options='{ "easing": "easeInQuad" }' href="#about-soci" >ABOUT SOCI</a></li>
            <li className="eight_sec_menu menu-item" id="eight_sec_menu_portfolio"><a className='menu_portfolio_section' data-scroll data-options='{ "easing": "easeInQuad" }' href="#what-we-do" >WHAT WE DO</a></li>
            <li className="eight_sec_menu menu-item" id="eight_sec_menu_blog"><a className='menu_blog_section' data-scroll data-options='{ "easing": "easeInQuad" }' href="#our-stories" >OUR STORIES</a></li>
            <li className="eight_sec_menu menu-item" id="eight_sec_menu_contact"><a className='menu_contact_section' data-scroll data-options='{ "easing": "easeInQuad" }' href="#contact-us" >CONTACT US</a></li>
          </ul>
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
        { /* <div className="university"></div> */ }
        <div className="header-sticky-overlay"></div>
      </header>
    );
  }
}

export default Header;