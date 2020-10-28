import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handleTwitterMessage = (event) =>{
    this.setState({
      [event.target.name]: event.target.value,
      numCharacters: event.target.value.length
    }, ()=>console.log(this.state.remainingCharacters))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        onChange={this.handleTwitterMessage}
        type="text" 
        name="message" 
        id="message" 
        value={this.state.message}
        />
        <h4>{this.props.maxChars}</h4>
        <h4>Remaining Characters: {this.props.maxChars - this.state.numCharacters}</h4>
      </div>
    );
  }
}

export default TwitterMessage;
