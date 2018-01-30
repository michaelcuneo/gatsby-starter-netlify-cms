import React from 'react';
import Link from 'gatsby-link';
import logo from '../img/soci_logo_256.png';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import soundboard from '../img/soundboard_1920.jpg';
import computer from '../img/computer_1920.jpg';
import blacknwhite from '../img/black-and-white_1920.jpg';
import paint from '../img/paint_1920.jpg';

class Slider extends React.Component {
	constructor(props) {
		super(props);
	}

	/*
	componentWillReceiveProps(nextProps) {
		$(findDOMNode(this)).bxSlider({
			pager: true,
			controls: true,
			mode: 'fade',
			auto: true
		})
	}
	*/

	render () {
		return (
		  <section id="slider" className="eight_sec_plx_slider_section section">
				<ul className="main-slider">
					{/* Replace this entire section with a loop from the CMS instead of hard coded */}
				  <li className="slide" style={{ background: 'url("'+ soundboard +'") center no-repeat' }}>
				  <div className="slide-caption">
				    <div className="ed-container">
				  	  <h2 className="caption-title">Communications</h2>
				  	  <div className="slide-content">
				        <div className="slide-desc"><p>All about Media at Newcastle University</p></div>
					    <a href="http://localhost:32902/media/" className="slide-readmore bttn">Discover</a>
				      </div>
				    </div>
				  </div>
				  </li>
					{/* END LOOPED SECTION */}
				  <li className="slide" style={{ background: 'url("'+ computer +'") center no-repeat' }}>
				  <div className="slide-caption">
					<div className="ed-container">
					  <h2 className="caption-title">Design</h2>
					  <div className="slide-content">
						<div className="slide-desc"><p>All about the Design area of Newcastle University.</p></div>
						<a href="http://localhost:32902/design/" className="slide-readmore bttn">Discover</a>
					  </div>
					</div>
				  </div>
				  </li>
				  <li className="slide" style={{ background: 'url("'+ blacknwhite + '") center no-repeat' }}>
				  <div className="slide-caption">
				 	<div className="ed-container">
					  <h2 className="caption-title">Music</h2>
					  <div className="slide-content">
						<div className="slide-desc"><p>All about the Music area of Newcastle University</p></div>
						<a href="http://localhost:32902/music/" className="slide-readmore bttn">Discover</a>
						</div>
					  </div>
					</div>
				  </li>
				  <li className="slide" style={{ background: 'url("' + paint + '") center no-repeat' }}>
				    <div className="slide-caption">
					  <div className="ed-container">
					    <h2 className="caption-title">Creative Arts</h2>
						<div className="slide-content">
						  <div className="slide-desc"><p>All about the Creative Arts area of Newcastle University</p></div>
						  <a href="http://localhost:32902/hello-world-2/" className="slide-readmore bttn">Discover</a>
						  </div>
						</div>
					  </div>
					</li>			
				</ul>
			</section>
		);
	};
};

export default Slider;