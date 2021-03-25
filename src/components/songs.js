import React,{Component} from "react"
import Display from  './display'


class Songs extends Component{
   
   constructor(props){

    super(props);
       this.state={

            songs:[
                {id:1,name:"Rain on Me"},{id:2,name:"Boyle Sever Kahramn Deniz" },{id:3,name:"Beatiful Mistakes"},{id:4,name:"Anyone"}
            ]
       }

   }
   moviewShow=()=>{
     return  this.state.songs.map(song=>
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
                                {this.moviewShow()}
                            </tbody>
                    </table>
                </div>   
   }

}

export default Songs
