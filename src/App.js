import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    this.setState({ email: event.target.value });
    this.setState({ password: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post(`http://mygym.test:8888/controller/loginController.php`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" onChange={this.handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

