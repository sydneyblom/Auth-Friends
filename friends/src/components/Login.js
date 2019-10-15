import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Button, Form } from 'semantic-ui-react'


class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    // login to retrieve the JWT token
    // add the token to localstorage
    // route to /protected (whatever landing page)
    //creates a brand new instance of axios
    axiosWithAuth()
    //returns a new axios instance- then .post returns the promise
      .post('/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected');
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div className ="form">
        <Form onSubmit={this.login}>
        <Form.Field>
        <input placeholder='Name' 
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          </Form.Field>
          <Form.Field>
          <input placeholder='Password' 
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
         </Form.Field>

          <Button>Log in</Button>

        </Form>
      </div>
    );
  }
}

export default Login;
