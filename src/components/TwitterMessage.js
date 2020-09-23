import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }


  changeMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let chars = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.changeMessage} value={this.state.message}/>
        {chars}
      </div>
    );
  }
}

export default TwitterMessage;
