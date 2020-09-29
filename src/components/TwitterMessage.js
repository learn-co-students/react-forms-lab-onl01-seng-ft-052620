import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.message}/>
        <span>Remaining Characters: {this.props.maxChars - this.state.message.length}</span>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
}

export default TwitterMessage;
