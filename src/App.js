import React, { Component } from 'react';
import './App.css';
import './Table/Table.css';
import Slider from './slider/Slider'



class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         indexReturns: [
            { year: '2016', yields: 11.96, cumulative: 1 },
            { year: '2017', yields: 21.83, cumulative: 1 },
            { year: '2018', yields: -4.38, cumulative: 2 },
            { year: '2019', yields: 31.49, cumulative: 3},
            { year: '2020', yields: -13.34,cumulative: 4},
         ]
      }
   }

   renderTableHeader() {
      let header = Object.keys(this.state.indexReturns[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }


  renderTableData() {
      return this.state.indexReturns.map((indexReturn, index) => {
         const { year, yields, cumulative } = indexReturn
         return (
            <tr key={year}>
               <td>{year}</td>
               <td>{yields}</td>
               <td>{cumulative}</td>
            </tr>
         )
      })
   }

   
   

   render() { 
       
       {/*

      const onChangeSlider = e => {
        setRangeValue(parseInt(e.target.value, this.state.indexReturns);
      }
      */}


      return (
         <div className="App">
            <h1>S&P Total Returns</h1>
            <Slider />
            {/* <Slider
               min={0}
              max={100}
              step={1}
              defaultLength={this.state.indexReturns.length}
              value={this.state.indexReturns.length}
              onChangeValue={onChangeSlider} 
              />*/}
             <table id='indexReturns'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Table;


