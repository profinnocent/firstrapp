import React, { Component } from 'react'

export class Buttonclass extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonType: props.buttontype || null,
            buttonText: props.buttontext || "Button",
            buttonID: props.buttonid || null
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        e.preventDefault();
        alert('Button class TweetBTN clicked');
    }

  render() {
    return (
      <button
      type={this.state.buttonType}
      id={this.state.buttonID}
      onClick={this.handleClick}
      >
      {this.state.buttonText}  
      </button>
    )
  }
}

export default Buttonclass;
