import React from 'react';
import './Size_button_S.css';

const Size_button_S = ({changeSize,addCart}) => {
	return (
		<form id='buttonText'>
			<input id='firstButton'className='sizeButton' type='radio' name='size' value='s' onClick={()=>changeSize('S')}/>
			S
			
			<input className='sizeButton' type='radio' name='size' value='m' onClick={()=>changeSize('M')}/>
			M
			
			<input className='sizeButton' type='radio' name='size' value='l' onClick={()=>changeSize('L')}/>
			L
			<br/>
			<input id='button' type='submit' value='Add to chart' onClick={()=>addCart()}/>
		</form>	
	)
}

export default Size_button_S;