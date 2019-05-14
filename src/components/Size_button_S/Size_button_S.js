import React from 'react';
import './Size_button_S.css';

const Size_button_S = ({changeSize}) => {
	return (
		<div>
			<input type='radio' name='size' value='S' onClick={()=>changeSize('S')}/>
			S
			
			<input type='radio' name='size' value='M' onClick={()=>changeSize('M')}/>
			M
			
			<input type='radio' name='size' value='L' onClick={()=>changeSize('L')}/>
			L
			<br/>
			<input id='button' type='submit' value='Add to chart' />
		</div>	
	)
}

export default Size_button_S;