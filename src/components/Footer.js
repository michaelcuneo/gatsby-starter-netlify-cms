import React from 'react';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';

const Footer = () => (
<footer id="colophon" className="site-footer" role="contentinfo">
	<div className="site-info wow fadeInUp" data-wow-duration="2s">
		<div className="copyright">
			<span>© School of Creative Industries | The University of Newcastle, Australia.</span>
		</div>
		<div className="ed-social-icon">
			<div className="social-icons">
        <a href="#" className="facebook" data-title="Facebook" target="_blank"><FontAwesome name="facebook" /><span></span></a>
        <a href="#" className="twitter" data-title="Twitter" target="_blank"><FontAwesome name="twitter" /><span></span></a>
        <a href="#" className="gplus" data-title="Google Plus" target="_blank"><FontAwesome name = "google" /><span></span></a>
        <a href="#" className="youtube" data-title="Youtube" target="_blank"><FontAwesome name="youtube" /><span></span></a>
      </div>
    </div>
	</div>
</footer>
);

export default Footer;
