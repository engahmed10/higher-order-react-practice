import React, { Component } from 'react';
import Show from  "./show.js"
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
      
       return <div> <Show show={show} /> </div>
      }
       
     )
 }

    render() {
        return (
            <div>
            <table>
                 <thead>
                    <tr>
                      Tv Show Name
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