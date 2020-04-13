import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Button, Form } from 'semantic-ui-react'


//need ot pass in props here for access to the history.
const Login = props => {
  const [loginForm, setLoginForm] = React.useState({username: "", password: ""});

  const handleChanges= e => {
    setLoginForm({...loginForm, [e.target.name]: e.target.value})
  };

  const login = e => {
    //prevents from refreshing
    e.preventDefault();
    axiosWithAuth()
    //returns a new axios instance- then .post returns the promise
      .post('/api/login',loginForm)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        //we sent info to server and if successful we receive token
        props.history.push ('/');
      })
      .catch(err => {
        console.log(err.response)
        //resets form if there is an errors
        setLoginForm({username: "", password: ""});
      });
  };

    return (
      <div className ="form">
        <Form onSubmit={login}>
        <Form.Field>
        <input placeholder='Name' 
            type="text"
            name="username"
            value={loginForm.username}
            onChange={handleChanges}
          />
          </Form.Field>
          <Form.Field>
          <input placeholder='Password' 
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleChanges}
          />
         </Form.Field>

          <Button>Log in</Button>

        </Form>
      </div>
    );
  } 


export default Login;
