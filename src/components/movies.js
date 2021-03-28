import React, { Component } from 'react';
import Display from  './display'

class Movie extends Component {

  moviewShow=()=>{
     return  this.props.data.map(movie=>
           <div> <Display   display={movie} /> </div>
     )
   }

   render(){

       return  <div>
                    <table style={{'border': '1px solid black'}}>
                            <thead >
                            <tr style={{'border': '1px solid black'}}>
                            <th> Movie Name</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.moviewShow()}
                            </tbody>
                    </table>
                </div>   
   }

}


export default Movie;