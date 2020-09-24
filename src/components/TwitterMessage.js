import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxC: props.maxChars, 
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
      maxC: this.state.maxC - this.state.message.lenght, 10
    })
    
    
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
    <h1>{this.state.maxC} characters left</h1>
        <input type="text" name="message" id="message" 
        onChange={event => this.handleChange(event)} 
        value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
