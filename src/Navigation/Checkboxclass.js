import React from 'react';

class Checkboxclass extends React.Component{
    constructor(props){
       //alert(props.checkz);
        super(props);
        this.state = {
            check: this.props.checkz || false
        }
    }

    handleToggle = () => {
        alert(this.state.check);
        this.setState({check: !this.state.check});
    }

    render(){
        return (
            <div>
                <input type="checkbox" id="" 
                checked={this.state.check}
                onChange={this.handleToggle}
                />
            </div>
        );
    }
}

export default Checkboxclass;