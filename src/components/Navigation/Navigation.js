import React, {Component} from 'react';
import './Navigation.css';
import MiniCart from '../MiniCart/MiniCart';

class Navigation extends Component{
	constructor(props){
		super(props);
		this.handleMouseHover = this.handleMouseHover.bind(this);
		this.state={
			isHovering: false,
		}
	}
	handleMouseHover() {
    	this.setState(this.toggleHoverState);
  	}

  	toggleHoverState(state) {
	    return {
	      isHovering: !state.isHovering,
	    };
  	}
  	render(){
  		return(
  			<div>
  				<nav id='nav' className='mv3' style={{display:'flex', justifyContent:'flex-end'}}>
					<p onMouseEnter={this.handleMouseHover}
						onMouseLeave={this.handleMouseHover}
						className='f6 link dim underline pa2 pointer mv1'>
						My Cart(4)
					</p>					
				</nav>		
				{this.state.isHovering &&	
				// <div id='miniCart' style={{display:'flex', justifyContent:'flex-end', 'z-index': '1'}}>		
				<div className='tooltip' id='miniCart' style={{display:'inline-block','z-index': '1',float:'right',width:'20%'}}>		
		        	<MiniCart />
				</div>}
  			</div>
			
		)
  	}
}

export default Navigation;