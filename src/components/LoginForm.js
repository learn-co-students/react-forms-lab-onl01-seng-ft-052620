import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      passWord: ""
    };
  }

  handleUsername = event => {
    this.setState ({
      userName: event.target.value 
    })
  }

  handlePassword = event => {
    this.setState ({
      passWord: event.target.value 
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if(this.state.userName.length > 0 && this.state.passWord.length > 0){
      this.props.handleLogin(this.state)
    }
   
    
  }
  render() {
    return (
      <form onSubmit = {event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"  value={this.state.userName} onChange={this.handleUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.passWord} onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
