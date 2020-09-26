import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      formData: []
    };
  }

  handleUsername = (event) => {
   
    this.setState({
      username : event.target.value
    }) 
    console.log(this.state.username)
  }

  handlePassword = (event) => {
    this.setState({
      password : event.target.value
    })
  }

  handleSubmission = (event) => {
    event.preventDefault()
    let data = { username: this.state.username, password: this.state.password }
    let dataArray = this.state.formData.concat(data)
    this.setState({
      formData :  dataArray
    })
    if(this.state.username && this.state.password){this.props.handleLogin(this.state)}
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmission(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleUsername(event)} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handlePassword(event)} value={this.state.password}/>
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
