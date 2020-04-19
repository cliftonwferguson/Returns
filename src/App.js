import React, { Component } from 'react';
import './App.css';
import './Table/Table.css';
import Slider from './slider/Slider'



class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         indexReturns: [
            { year: '2002', yields: -22.1, cumulative: 0.86 },
            { year: '2003', yields: 28.68, cumulative: -2.30 },
            { year: '2004', yields: 10.88, cumulative: -0.62 },
            { year: '2005', yields: 4.91, cumulative: -0.55 },
            { year: '2006', yields: 15.79, cumulative: 2.22 },
            { year: '2007', yields: 5.49, cumulative: -0.65 },
            { year: '2008', yields: -37, cumulative: -7.74 },
            { year: '2009', yields: 26.46, cumulative: -1.72 },
            { year: '2010', yields: 15.06, cumulative: -0.43 },
            { year: '2011', yields: 2.11, cumulative: -0.86 },
            { year: '2012', yields: 16.00, cumulative: 6.58 },
            { year: '2013', yields: 32.39, cumulative: 1.02 },
            { year: '2014', yields: 13.69, cumulative: -0.58 },
            { year: '2015', yields: 1.38, cumulative: -0.90 },
            { year: '2016', yields: 11.96, cumulative: 7.67 },
            { year: '2017', yields: 21.83, cumulative: .83 },
            { year: '2018', yields: -4.38, cumulative: -1.20 },
            { year: '2019', yields: 31.49, cumulative: -8.19},
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


