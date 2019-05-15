import React from 'react'

export class LoginPage extends React.Component {
  constructor () {
      super();
      this.state ={
        username:'',
        password:''
      }
  }

  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  login = e => {
    localStorage.username = this.state.username
  }

  render() {
    return (
      <form onSubmit={this.login}>
        <input name="username" 
        value={this.state.username} 
        onChange={this.handleChange}/>

        <input name="password"
        value={this.state.password} 
        onChange={this.handleChange}/>

        <button>Login</button>
      </form>
    )
  }
}

export default LoginPage;

