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
            console.log("hocs",this.state.data)
            return  <>
                        <WrappedComponent data={this.state.data} {...this.props} />
                    </>
    }
    }

}

export default Hoc;

