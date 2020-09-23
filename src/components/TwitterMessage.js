import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      mess: ''
        };
  }
  handleCharChange = event => {
    this.setState({
      mess: event.target.value
    })
  }

  render() {
    let charNum = this.props.maxChars - this.state.mess.length;
    
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleCharChange} value={this.state.mess}/>
        <h3>{charNum} Characters Left</h3>
      </div>
    );
  }
}

export default TwitterMessage;
