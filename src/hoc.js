import React, {COmponent} form "react"


const Hoc=(WrappedComponent,data)=>{

   return  class extends Component{
            constructor(props) {
                    super(props);
                    this.state={
                        data:data
                    }
            }

           return  <>
                      <WrappedComponent data={this.state.data} {...this.props} />
                  </>
    }


}

export default Hoc;