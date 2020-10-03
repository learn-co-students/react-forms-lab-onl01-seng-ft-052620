import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }
  
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = {username: this.state.username, password: this.state.password}
    if (formData.username && formData.password){
      this.props.handleLogin(formData)
    }
    
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input value={this.state.username} onChange={this.handleInputChange} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} onChange={this.handleInputChange} id="password" name="password" type="password" />
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
