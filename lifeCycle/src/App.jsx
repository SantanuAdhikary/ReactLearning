//!  component mounting phase 

// import React, { Component } from 'react'

// export default class App extends Component {

//   constructor(){
//     super();
//     this.state={
//       course:"java"
//     }
//     console.log("I'm constructor and render only once")
//     console.log('this is the best place for initialize the state object and bind this keyword')
//   }

//   static getDerivedStateFromProps(props,state)
//   {
//     console.log("I'm getDerivedStateFromProps render after constructor and before render method and render again and again based on state and props")

//     console.log('this method is rare case used method')
//     return {course:"js"}
//   }
  
//   componentDidMount()
//   {
//     console.log("I'm componentDidMount I'll render only once execute after all mounting life cycle")
//     console.log('this is the best place for calling network call or ajax call or interact with DOM and any other...')
//   }
//   render() {
  
//      console.log('I am render method and render again and again')
//      console.log('this is the best place for rendering jsx and compose the child component')
//     return (
//       <div>
//         <p>Life Cycle Of Component</p>
//         <p>Course: {this.state.course}</p>
//       </div>
//     )}
  
  
//   }

//!  getDerivedStateFromProps 


// export default class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       course:"java"
//     }
//   }

//   static getDerivedStateFromProps(props,state)
//   {
//     return {course:"js"} //! it will change the state 
//   }
  
//   componentDidMount()
//   {}
//   render() {
//     return (
//       <div>
//         <p>Life Cycle Of Component</p>
//         <p>Course: {this.state.course}</p> //! course will be js not java bcz it has changed in gdsfp method
//       </div>
//     )}
//   }


//!  component update phase 

//! should component update


// import React, { Component } from 'react';


// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { favoriteFood: 'rice' };
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     // Only re-render if the favoriteFood state has changed
//     return this.state.favoriteFood !== nextState.favoriteFood;
//   }

//   changeFood = () => {
//     this.setState({ favoriteFood: 'pizza' });
//     console.log('done')
//   }

//   render() {
//     console.log('re-render')
//     return (
//       <div>
//         <h1>My Favorite Food is {this.state.favoriteFood}</h1>
//         <button type="button" onClick={this.changeFood}>Change food</button>
//       </div>
//     );
//   }
// }



//! component will update 

// import React, { Component } from 'react';

// export default class App extends Component {
//   state = {
//     count: 0,
//   };

//   handleClick = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   componentWillUpdate(nextProps, nextState) {
//     if (nextState.count !== this.state.count) {
//       console.log(`Count is about to update from ${this.state.count} to ${nextState.count}.`);
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button type="button" onClick={this.handleClick}>
//           Increment
//         </button>
//       </div>
//     );
//   }
// }
 

//! component did update 

// import React, { Component } from 'react';

// export default class App  extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.count !== this.state.count) {
//       console.log('Count has been updated:', this.state.count);
//     }
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       count: prevState.count + 1
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={() => this.handleClick()}>Increment</button>
//       </div>
//     );
//   }
// }



//!  get snapshot before update 


// import React from 'react';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritefood: "rice"};
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritefood: "pizza"})
//     }, 1000)
//   }
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     document.getElementById("div1").innerHTML =
//     "Before the update, the favorite was " + prevState.favoritefood;
//   }
//   componentDidUpdate() {
//     document.getElementById("div2").innerHTML =
//     "The updated favorite food is " + this.state.favoritefood;
//   }
//   render() {
//     return (
//       <div>
//         <h1>My Favorite Food is {this.state.favoritefood}</h1>
//         <div id="div1"></div>
//         <div id="div2"></div>
//       </div>
//     );
//   }
// }


//!   unmount phase 

import React, { Component } from 'react';

export default class App extends Component {
  state = {
    showChild: true,
  };

  handleDelete = () => {
    this.setState({ showChild: false });
  };

  render() {
    const { showChild } = this.state;

    return (
      <div>
        {showChild && <Child />}
        <button type="button" onClick={this.handleDelete}>
          Delete Header
        </button>
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert('The component named Child is about to be unmounted.');
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}
