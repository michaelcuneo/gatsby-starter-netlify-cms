import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../css/font-awesome.css';
import '../css/animate.css';
import '../css/style.css';
import '../css/responsive.css';

import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Slider from '../components/Slider';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TemplateWrapper = ({ children }) => (
	<div id="page" className="site">
  	<Helmet title="Home | SOCI" />
  	<Header />
  	<div id="content" className="site-content">{children()}</div>
  	<Slider />
  	<About />
  	<Portfolio />
  	<Footer />
    <Link to="#" id="go-to-top" title='Go to top'>&#8679;</Link>
	</div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
