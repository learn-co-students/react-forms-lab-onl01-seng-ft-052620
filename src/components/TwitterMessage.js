import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      twitterValue: ""
    };
  }

  handleChange = e => {
    this.setState({
      twitterValue: e.target.value
    })
  }
  characterCountLeft = () => {
   return( this.props.maxChars - this.state.twitterValue.length) 
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        onChange={ e => this.handleChange(e)}
        value={this.state.twitterValue}
        type="text" name
        ="message" 
        id="message" 
        />
        {this.characterCountLeft()}
      </div>
      
    );
  }
}

export default TwitterMessage;
