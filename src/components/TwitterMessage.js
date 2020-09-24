import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
        message: ''
    };
  }

  handleCharChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    let charNum = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleCharChange} value={this.state.message} />
        <h3>{charNum} Characters left</h3>
      </div>
    );
  }
}

export default TwitterMessage;
