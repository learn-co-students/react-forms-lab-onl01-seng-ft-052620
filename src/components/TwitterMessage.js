import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: 'Type your message here'
    };
  }

  handleInput(event){ 
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let maxLength = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleInput(event)} type="text" name="message" id="message" value={this.state.message}/>
        {this.props.maxChars}
        {maxLength}
      </div>
    );
  }
}

export default TwitterMessage;
