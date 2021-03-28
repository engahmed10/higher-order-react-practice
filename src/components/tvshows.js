import React, { Component } from 'react';
import Display from  "./display"

class TvShows extends Component {
  

shows=()=>{
   return   this.props.data.map(show=>{
       return <div> <Display display={show} /> </div>
      }
     )
 }

render() {

    return (
        <div>
        <table style={{'border': '1px solid black'}}>
                <thead >
                <tr style={{'border': '1px solid black'}}>
                   <th> Tv Show Name</th>
                </tr>
                </thead>
                <tbody>
                    {this.shows()}
                </tbody>
        </table>
        </div>
    ); 
 }
}


export default TvShows;