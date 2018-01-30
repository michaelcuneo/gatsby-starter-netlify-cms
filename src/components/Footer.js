import React from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/soci_logo_256.png';

const Footer = () => (
<footer id="colophon" className="site-footer" role="contentinfo">
	<div className="site-info wow fadeInUp" data-wow-duration="2s">
		<div className="uni-logo">
			<img src="" />
		</div>
		<div className="copyright">
			<span>© School of Creative Industries &amp; The University of Newcastle, Australia.</span>
		</div>
		<div className="ed-social-icon">
			<div className="social-icons ">
        <a href="#" className="facebook" data-title="Facebook" target="_blank"><i className="fa fa-facebook"></i><span></span></a>       
        <a href="#" className="twitter" data-title="Twitter" target="_blank"><i className="fa fa-twitter"></i><span></span></a>
        <a href="#" className="gplus" data-title="Google Plus" target="_blank"><i className="fa fa-google-plus"></i><span></span></a>
        <a href="#" className="youtube" data-title="Youtube" target="_blank"><i className="fa fa-youtube"></i><span></span></a>
      </div>
    </div>
	</div>
</footer>
);

export default Footer;
