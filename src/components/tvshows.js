import React, { Component } from 'react';
import Display from  "./display"
class TvShows extends Component {
    constructor(props) {
        super(props);
        this.state={
            shows:[
                {id:1,name:"Ezel"},{id:2,name:"Friends"},{id:3,name:"Dirilish Osman"},{id:4,name:"Breaking Bad"}
            ]
        }
    }

shows=()=>{
   return   this.state.shows.map(show=>{
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