import React, {Component} from 'react';
import './Text.css';
import Size from '../Size/Size';
import tee from '../../tee.jpg';
import Description from '../Description/Description';
import Price from '../Price/Price';
import Title from '../Title/Title';
import Size_button_S from '../Size_button_S/Size_button_S';
import Line from '../Line/Line';


class Text extends Component {
	constructor(props){
    	super(props);
	}
	render(){
		const {size} = this.props;
		const changeSize = this.props.changeSize;
		return(
			<div id='text'>
				<Title />
				<Line />
				<Price />
				<Line />
				<Description />
				<Size size={size}  />
				<Size_button_S changeSize={changeSize} addCart={this.props.addCart}/>
			</div>
		)
	} 
}

export default Text;