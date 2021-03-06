import React from 'react';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';

class About extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

	render () {
		return (
			<section id="about-soci" className="eight_sec_plx_about_section section">				
				<div className="ed-container">
						<div className="section-title">
							<h2 className="about-sec wow fadeIn" data-wow-duration="2s">ABOUT THE SCHOOL</h2>
							<FontAwesome name="facebook" />
						</div>
						<div className="about-description wow fadeInDown" data-wow-duration="2s">
							The School of Creative Industries is a dynamic new School at the University of Newcastle. We research and teach in Communication, Visual Communication Design, Music, Natural History Illustration, and Creative Arts. Our academics are involved in cutting edge research across these disciplines and we engage with industry and the community to give our students the best possible experience. We want to share our stories with you.					</div>
						</div>
			</section>
		)
	}
}

export default About;