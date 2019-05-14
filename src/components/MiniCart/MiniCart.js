import React from 'react';
import './MiniCart.css';
import tee from '../../tee.jpg';

const MiniCart = (props) => {
	const sNumber=props.sNumber;
	const mNumber=props.mNumber;
	const lNumber=props.lNumber;
	return(
		<div style={{display:'flex', 'flex-direction':'column',border:'1px solid black'}}>
			<div id='MiniCart' style={{width:'30%',height:'auto',display:'flex', 'flex-direction':'row'}}>			
				<img src={tee} style={{display:'inline-block', width:'100%', height:'100%'}} />
				<div style={{'margin-left':'10px'}}>
					<p>Classic Tee</p>
					<p>{sNumber}x <strong>$75</strong></p>
					<p>Size: S</p>
				</div>
			</div>
			<div id='MiniCart' style={{width:'30%',height:'auto',display:'flex', 'flex-direction':'row'}}>			
				<img src={tee} style={{display:'inline-block', width:'100%', height:'100%'}} />
				<div style={{'margin-left':'10px'}}>
					<p>Classic Tee</p>
					<p>{mNumber}x <strong>$75</strong></p>
					<p>Size: M</p>
				</div>
			</div>
			<div id='MiniCart' style={{width:'30%',height:'auto',display:'flex', 'flex-direction':'row'}}>			
				<img src={tee} style={{display:'inline-block', width:'100%', height:'100%'}} />
				<div style={{'margin-left':'10px'}}>
					<p>Classic Tee</p>
					<p>{lNumber}x <strong>$75</strong></p>
					<p>Size: L</p>
				</div>
			</div>
		</div>

	)
}

export default MiniCart;