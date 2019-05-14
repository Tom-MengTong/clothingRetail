import React, {Component} from 'react';
import './Content.css';
import Text from '../Text/Text';
import tee from '../../tee.jpg';


class Content extends Component {
	constructor(props){
    	super(props);
	}
	render(){
		const changeSize = this.props.changeSize;
		return(
			<div id='content'>
				<img src={tee} />
				<Text size={this.props.size} changeSize={changeSize}/>
			</div>
		)
	} 
}

export default Content;