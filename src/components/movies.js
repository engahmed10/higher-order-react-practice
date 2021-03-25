import React, { Component } from 'react';
 import Display from  './display'

class Movie extends Component {
  
  constructor(props){
      super(props);
        this.state={
           movies:[
                {id:1,name:"Fast & Furious 9"},{id:2,name:"The Sucide Squad"},
                {id:3,name:"No Time To Die"},{id:4,name:"The Little Things"}
            ]
        }   
  }
  moviewShow=()=>{
     return  this.state.movies.map(movie=>
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