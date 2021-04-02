import React, { Component } from 'react';

class AddSong extends Component {
    
       render() {
        return (

            <div>
                <form onSubmit={(e)=>this.props.handleSubmit(e)}>
                    <label>Add Song</label>
                    <input type="text" name="id" placeholder="song id" class={input-id} onChange={(e)=>this.props.handleChange(e)}/>
                    <input type="text" name="name" placeholder="song name"  onChange={(e)=>this.props.handleChange(e)}/>
                    <button> Submit</button>
                </form>
            </div>

        );
    }
}



export default AddSong;