import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         indexReturns: [
            { id: 1, year: '2017' },
            { id: 2, year: '2018' },
            { id: 3, year: '2019' },
            { id: 4, year: '2020' }
         ]
      }
   }

    renderTableData() {
      return this.state.indexReturns.map((indexReturn, index) => {
         const { id, year } = indexReturn //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{year}</td>
            </tr>
         )
      })
   }

   render() { 
      return (
         <div>
            <h1 id='title'>S&P 500 Index Returns by Year</h1>
            <table id='indexReturns'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Table 
