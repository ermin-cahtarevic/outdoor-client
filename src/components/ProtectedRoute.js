import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useStore } from 'react-redux';
import Proptypes from 'prop-types';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const state = useStore().getState();
  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <Route
      {...rest}
      render={
      props => {
        if (state.auth.isAuth) {
          return <Component {...rest} {...props} />;
        }
        return (
          <Redirect to={
            {
              pathname: '/login',
              state: {
                from: props.location,
              },
            }
          }
          />
        );
      }
    }
    />
  );
};

ProtectedRoute.propTypes = {
  component: Proptypes.func.isRequired,
  location: Proptypes.instanceOf(Object).isRequired,
};

export default ProtectedRoute;
