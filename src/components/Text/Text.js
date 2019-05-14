import React, {Component} from 'react';
import './Text.css';
import Size from '../Size/Size';
import tee from '../../tee.jpg';
import Description from '../Description/Description';
import Price from '../Price/Price';
import Title from '../Title/Title';
import Size_button_S from '../Size_button_S/Size_button_S';


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
				<hr />
				<Price />
				<Description />
				<Size size={size}  />
				<Size_button_S changeSize={changeSize} />
			</div>
		)
	} 
}

export default Text;