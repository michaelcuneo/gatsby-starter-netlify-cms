import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Slider from '../components/Slider';
import About from '../components/About';
import Footer from '../components/Footer';

const TemplateWrapper = ({ children }) => (
  <div id="page" className="site">
    <Helmet title="Home | SOCI" />
    <Header />
    <div id="content" className="site-content">
    	<Slider />
    	<About />
    	<div>{children()}</div>
    </div>
    <Footer />
  <Link to="#" id="go-to-top" title='Go to top'>&#8679;</Link>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
