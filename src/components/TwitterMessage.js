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
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChanges} />
        <h1>{this.props.maxChars - this.state.message.length} characters left</h1>
      </div>
    );
  }

  handleChanges = (event) => {
    this.setState ({
      message: event.target.value
    })

  }


}

export default TwitterMessage;
