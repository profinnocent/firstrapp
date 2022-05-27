import React from "react";

class Tweeet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <img src={this.props.userpix} alt="" />
        <h5>
          {this.props.username} <span>{this.props.userhandle}</span>
          <h6>{this.props.timeelapsed}</h6>{" "}
        </h5>
        <p>{this.props.comment}</p>
      </div>
    );
  }
}

export default Tweeet;
