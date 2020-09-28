import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"  value={this.state.username} onChange={this.handleUsernameChange} required/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePassChange} required/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
  
  handleSubmit = (e) =>{
    e.preventDefault();
    if(this.state.username.length > 0 && this.state.password.length > 0){
      this.props.handleLogin(this.state)
    }
  }
 
  handleUsernameChange = (e) =>{
    this.setState({
      username: e.target.value
    })
  }
  handlePassChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }
}

export default LoginForm;
