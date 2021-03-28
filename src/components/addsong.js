import React, { Component } from 'react';

class AddSong extends Component {
    
    constructor(props) {
        super(props);
        this.state={
                   id:"",
                   name:"" 
        }
    }

     handleChange=(e)=>{

         console.log(e.target.value)

          this.setState({
             [e.target.name]:e.target.value
             }
          )
           
        }
    

       handleSubmit=(e)=>{
             
             e.preventDefault();
                console.log(`something `,this.state)
                console.log(`data `,this.props.data)
                this.props.data.push(this.state);
              
            
        }
    

    render() {
        return (
            <div>
           
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                 <label>Add Song</label>
                 <input type="text" name="id"  onChange={(e)=>this.handleChange(e)}/>
                 <input type="text" name="name" onChange={(e)=>this.handleChange(e)}/>
                 <button> Submit</button>
            </form>

            </div>
        );
    }
}



export default AddSong;