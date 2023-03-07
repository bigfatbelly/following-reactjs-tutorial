import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
  render() {

    // return this.state.isLoggedIn && <div>Welcome Alec</div>




    return(
        this.state.isLoggedIn ?     //evaluated to true or false.
        <div>Welcome Alec</div> :   //this operator is returned if true
        <div>Welcome Guest</div>    // this operator if returned false
    )



        // let message
        // if (this.state.isLoggedIn){
        //     message = <div>Welcome Alec</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>



        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome Alec
        //         </div>
        //     )
        // } else {
        //     return(
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }
    // return (
    // <div>
    //   <div>Welcome Alec</div>
    //   <div>Welcome Guest</div>
    // </div>
    // )
  }
}

export default UserGreeting
