import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  changeMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    const numOfChars = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.changeMessage(event)} value={this.state.message} /> 

      { numOfChars }
      </div>
    );
  }
}

export default TwitterMessage;
// maxChars a number  the maximum amount of characters a 
// message can have. This prop is being passed in from the 
// App component with the value 280.
// You'll find an <input type="text"> in this component. 
// Make this a controlled component by adding the attributes to the 
// <input> element. Its value should be saved in the component's state 
// and should update on every change to the input.