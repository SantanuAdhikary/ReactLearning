
import React from 'react';

const withMessage = WrappedComponent => {
  return function WithMessageComponent(props) {
    return (
      <div>
        <p>This is a message from the HOC.</p>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withMessage;
