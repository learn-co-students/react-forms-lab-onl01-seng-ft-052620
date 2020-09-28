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
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleMessageChange}/>
    <h1>{this.props.maxChars - this.state.message.length} characters left.</h1>
      </div>
    );
  }

  handleMessageChange = (e) =>{
    this.setState({
      message: e.target.value
    })
  }
}

export default TwitterMessage;
