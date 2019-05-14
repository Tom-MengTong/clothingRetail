import React,{Component} from 'react';
import './Size_button_S.css';

class Size_button_S extends Component {
	constructor(props){
		super(props);
		this.state={
			value:''
		}
	}
	changeState = (value) => {
		this.setState({value: value});
	}
	render(){
		const {changeSize,addCart} = this.props;
		const value = this.state.value;
		return (
			<div id='buttonText'>
				<input id='firstButton'className='sizeButton' type='radio' name='size' value='s' onClick={()=>changeSize('S')} onClick={()=>this.changeState('s')}/>
				S
				
				<input className='sizeButton' type='radio' name='size' value='m' onClick={()=>changeSize('M')} onClick={()=>this.changeState('m')}/>
				M
				
				<input className='sizeButton' type='radio' name='size' value='l' onClick={()=>changeSize('L')} onClick={()=>this.changeState('l')}/>
				L
				<br/>
				<input id='button' type='submit' value='Add to chart' onClick={()=>addCart(value)}/>
			</div>	
		)	
	}
}


export default Size_button_S;