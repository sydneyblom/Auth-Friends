import React from 'react';
import { Route, Redirect } from 'react-router-dom';


  //destructuring component so it can be called as a proper compontent in routes and spreading in the rest

//takes in what we are passing and destructures it and passes it in and rest of props are being passed  in ...rest
//make sure rest is being passed intro route
//checks for token and if haas it renders component if not redirects to login 
  const PrivateRoute = ({ component: Component, ...rest }) => {
    // const Component = props.component
    return (
      <Route
//just passing in path at this point.
        {...rest}
        render={props => {
          if (localStorage.getItem('token')) {
                  //props passes in history, location and maps
            return <Component {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    );
  };
  export default PrivateRoute;
  