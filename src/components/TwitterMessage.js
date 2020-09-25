import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })

  }

  render() {

const {maxChars} = this.props;

    return (
      <div>
        <strong>Your message:</strong>
    <h1>{this.props.maxChars - this.state.message.length} characters left</h1>
        <input type="text" name="message" id="message" 
        onChange={event => this.handleChange(event)} 
        value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
