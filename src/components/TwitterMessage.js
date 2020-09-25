import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  charactersRemaining = () => {
    return (
    <p>{ this.props.maxChars - this.state.message.length }</p>
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} />
        {this.charactersRemaining()}
      </div>
    );
  }
}

export default TwitterMessage;
