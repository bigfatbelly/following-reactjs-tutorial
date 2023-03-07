import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

    //  this.clickHandler = this.clickHandler.bind(this)
    }
    
    // clickHandler(){ //option 3
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    //     console.log(this)
    // }

    clickHandler =() => {
        this.setState({
            message: 'Goodbye'
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Leave?</button> */}
        {/* <button onClick={() => this.clickHandler()}>Leave?</button> */}
        <button onClick={this.clickHandler}>Leave?</button>
      </div>
    )
  }
}

export default EventBind
