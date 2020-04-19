import React from 'react';
import './Slider.css';


const Slider = (props) => {
     const { 
        step,
        min,
        max,
        value,
        onChangeValue
      } = props;    
  
  const handleChange = max => e => {
  	onChangeValue(e); 
  }

	return (
		  <>
		    <div className="slider-container"> 
              <input
                className= "range-slider"
                type="range"
                step={step}
                min={min}
                max={max}
                value={value}
                onChange={handleChange(max)}
              /> 
		    </div>
		  </>
	)
}

 export default Slider;