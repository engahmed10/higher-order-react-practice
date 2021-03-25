import React, { Component } from 'react';
 
class Movie extends Component {
  
  constructor(props){
      super(props);
        this.state={
       shows:[
                {id:1,name:"Fast & Furious 9"},{id:2,name:"The Sucide Squad"},{id:3,name:"No Time To Die},{id:4,name:"The Little Things"}
            ]
             
  }
    render() { 
        return (
            <div>
                
            </div>
        );
    }
}

export default Movie;