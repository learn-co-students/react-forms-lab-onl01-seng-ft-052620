import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

changeInput = (event) => {

this.setState({
  [event.target.name]: event.target.value
})
}
 submitForm = (e) => {
   e.preventDefault()

   if(this.state.username && this.state.password) {
    this.props.handleLogin(this.state)
   }
   

 }



  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.changeInput} value={this.state.value}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.changeInput} value={this.state.value}/>
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
