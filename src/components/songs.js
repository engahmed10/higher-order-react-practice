import React,{Component} from "react"
import Display from  './display'
import AddSong  from "./addsong"


class Songs extends Component{
   
  state={
      id:"",
      name:""
  }
  handleChange=(e)=>{

      this.setState({
         [e.target.name]:e.target.value
         }
      )   
  }
    
   handleSubmit=(e)=>{
            
      e.preventDefault();
      this.props.data.push(this.state);
      
         this.setState({
            id:"",
            name:"" 
            }
         )
   }

   songsShow=()=>{
     return  this.props.data.map(song=>
           <div> <Display display={song} /> </div>
     )
   }

   render(){

   return  <div>
               <table style={{'border': '1px solid black'}}>
                        <thead >
                        <tr style={{'border': '1px solid black'}}>
                        <th> Songs Name</th>
                        </tr>
                        </thead>
                        <tbody>
                           {this.songsShow()}
                        </tbody>
               </table>

            < AddSong  handleSubmit={this.handleSubmit}
               handleChange={ this.handleChange} />
            </div>   
   }
}

export default Songs
