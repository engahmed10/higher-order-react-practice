import React,{Component} from "react"
import Display from  './display'
import AddSong  from "./addsong"


class Songs extends Component{
   

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

                   < AddSong/>
                </div>   
   }
}

export default Songs
