import React from 'react';

class Tweetclockclass extends React.Component{
    constructor(){
        super();
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.timerID = setInterval(() => {
           this.clocktick()
           //This will also work
        //    this.setState({date: new Date()});
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }


clocktick(){
  this.setState({date: new Date()});
}

    render(){
        return (
            <div>
            <h3>Hello Twitterites</h3>
            <h2>It's {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Tweetclockclass;