import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Slider extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount = () => this.props.getSliderImages();

	renderSlides = () => {
		const { images } = this.props;
		return images.map((curr, i) => <Slide key={i} image={images[i]} />);
	}

	render() {
		const { images, index, translateValue } = this.props;
		
		return (
      <div className="slider-wrapper"
        style={{
          transform: `translateX(${translateValue}px)`,
          transition: 'transform ease-out 0.45s'
        }}>
        { this.renderSlides() }
      </div>
		);
	}
}

const mapStateToProps = ({ slider }) => {
  return {
    images: slider.images,
    index: slider.index,
    translateValue: slider.translateValue
  }
}

export default connect(mapStateToProps, actions)(Slider)