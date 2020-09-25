import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  handleTweetInput = event => {
    const characterCount = event.target.value.length
    this.setState({
      value: event.target.value,
      count: characterCount
    })
    
  }

  render() {
    
    let charsRemaining = this.props.maxChars - this.state.count 

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleTweetInput(event)} name="message" id="message" value={this.state.value} />
        <h4>{charsRemaining}</h4>
      </div>
    );
  }
}

export default TwitterMessage;
