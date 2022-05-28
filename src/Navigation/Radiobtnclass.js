import React, { Component } from 'react'

export class Radiobtnclass extends Component {
    constructor(props){
        super(props);
        this.state = {valu: this.props.valuz || false}
    }

handleChange = () => {
    this.setState({valu: !this.state.valu});
}

  render() {
    return (
      <div className='radiobtn'>
        <input type="radio" id="rbtn" name="radbox"
        value={this.state.valu}
        onClick={this.handleChange}
        />
      </div>
    )
  }
}

export default Radiobtnclass;

