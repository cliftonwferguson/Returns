import React from 'react';

export default class Slider extends React.Component {
	state = {
	  year: 2020
	}
}

render() {
  return (
    <div>
      <input type="range"/>
    </div>  
	)

}