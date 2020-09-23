import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '', 
      password: ''
    };
  }

  setLogin = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.username || !this.state.password) return 
    this.props.handleLogin(this.state)
  }
//onSubmit could also be written as: onSubmit={this.handleSubmit} 
  render() {
    return (
      <div>
      <form onSubmit={event => this.handleSubmit(event)}>
      
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.setLogin}  value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.setLogin} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
      </div>
    );
  }
}

export default LoginForm;
