import React,{Component} from "react"
import Display from  './display'


class Songs extends Component{
   
   constructor(props){

    super(props);
    
   }
   songsShow=()=>{
     return  this.props.data.map(song=>
           <div> <Display   display={song} /> </div>
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
                </div>   
   }

}

export default Songs
