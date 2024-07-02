
// import React, { Component } from 'react'

// export default class Child extends Component {
//   render() {
//     console.log(this)
//     return (
//       <div>
//         <h1>Name : {this.props.name} </h1>
//         <p>Age : {this.props.age} </p>
//         <button 
//           onClick={()=> this.props.func()}>
//             update from child
//         </button>
//       </div>
//     )
//   }
// }

//! props.children

// import React from 'react'

// const Child = (props) => {
//     console.log(props)  
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.children}</h1>
//     </div>
//   )
// }

// export default Child



//! default props in fbc

// import React from 'react';

// const Child = (props) => {
//     console.log(props.message)
//   return (
//     <div>
//       <p>{props.message}</p>
//     </div>
//   );
// };

// //? Define default props

// Child.defaultProps = {
//   message: 'Default message from Child!'
// };

// export default Child;

//! defaultProps in cbc 

// import React, { Component } from 'react';

// class Child extends Component {
//   render() {
//     const { message } = this.props;
//     return (
//       <div>
//         <p>{message}</p>
//       </div>
//     );
//   }
// }

// // Define default props
// Child.defaultProps = {
//   message: 'Default message from Child!'
// };

// export default Child;



//! prop-types 

import React from 'react';
import PropTypes from 'prop-types';

const Child = ({ title, age, user, items, onClick, isActive, value, tags }) => {
  return (
    <div>
      <p>Title: {title}</p>
      <p>Age: {age}</p>
      <p>User: {JSON.stringify(user)}</p>
      <p>Items: {items.join(', ')}</p>
      <button onClick={onClick}>Call Function</button>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
      <p>Value: {value}</p>
      <p>Tags: {tags.join(', ')}</p>
    </div>
  );
};

// Define prop types
Child.propTypes = {
  title: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  items: PropTypes.array,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  tags: PropTypes.arrayOf(PropTypes.string),
};

// Define default props
Child.defaultProps = {
  title: 'Default Title',
  age: 0,
  user: { name: 'Default User', email: 'default@example.com' },
  items: [],
  onClick: () => {},
  isActive: false,
  value: 'Default Value',
  tags: ['defaultTag1', 'defaultTag2'],
};

export default Child;
