import React, {Component} from "react"


const Hoc=(WrappedComponent,data)=>{

    return  class extends Component{
            constructor(props) {
                    super(props);
                    this.state={
                        data:data
                    }
            }

        render(){
             console.log("HOC render")
            return  <div>
                        <WrappedComponent data={this.state.data} 
                         />
                    </div>
        }
    }
}

export default Hoc;






