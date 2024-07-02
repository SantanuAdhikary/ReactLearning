//! how to bind this in cbc

// import React, { Component } from 'react'

// export default class App extends Component {

//   constructor()
//   {
//     super();
//     this.state={
//       count : 0
//     }
//     //! here we have to bind the this keyword
//     this.Increment = this.Increment.bind(this)
//   }

//   Increment (){
//     console.log(this)  //! undefined because it will refer to window object for that we have to bind it.
//     this.setState({count: this.state.count +1})
//     //! undefined => in js class methods are not bound by default, window does not have setState method
//   }

//   Decrement =()=>{
//     this.setState({count:this.state.count -1})
//   }
//   render() {
//     return (
//       <div>
//          <p>{this.state.count}</p>
//          <button onClick={this.Increment}>Increment by constructor</button>
//          <button onClick={this.Decrement}>Decrement by arrow function</button>

//          <button onClick={()=>this.setState({count:this.state.count+1})}>Increment By inline arrow function</button>
//          <button onClick={this.Increment.bind(this)}>Increment by inline bind</button>

//       </div>
//     )
//   }
// }

//!  custom event

// import React from 'react'

// const App = () => {

//   let customEvent =()=>{
//     let yantra = new Event("yClick");
//     let body = document.body;

//     body.addEventListener("yClick",e=>{
//       e.target.style.background = "red";
//     })

//     body.dispatchEvent(yantra);
//   }
//   return (
//     <div>
//        <h1>custom event in React</h1>
//        <button onClick={customEvent}>Trigger Custom Event</button>
//     </div>
//   )}

// export default App

//!       handling more than one function for one event

// import React from 'react'
// const App = () => {

//   const show = ()=>{
//     console.log('show')
//   }
//   const showMore = ()=>{
//     console.log('showMore')
//   }
//   const showLogo = ()=>{
//     console.log('showLogo')
//   }
//   return (
//     <div>
//       <button onClick={()=>{
//         show(), showMore(), showLogo()  //! we have to use arrow function and we can pass the function call here
//       }}>click</button>
//     </div>
//   )
// }

// export default App


//! Click On Image And Audio Will Play

// import Video from "./components/Video";
// import link1 from "./bahubali.mp4";
// import link2 from "./kantara.mp4";
// import img1 from "./bahu.jpg";
// import img2 from "./kanTara.jpg";

// const App = () => {
//   let videoArr = [
//     {
//       link: link1,
//       imageUrl: img1,
//     },
//     {
//       link: link2,
//       imageUrl: img2,
//     },
//   ];

//   return (
//     <>
//       <Video videoArr={videoArr} />
//     </>
//   );
// };

// export default App;



//! Naming Event Handler Props 

// import React from 'react'
// import Button from './components/Button'

// const App = () => {
//   return (
//     <div>
//       <button onClick={()=>alert("hello san")}>click me</button>
//          //!  onTest is the naming event handler
//        <Button onTest={()=>alert("hello naming event handler")}>
//         play audio
//        </Button>

//        <Button onTest={()=>alert("hello naming handle props...")}>
//         play video
//        </Button>    
//     </div>
//   )
// }

// export default App


import React from 'react';

class App extends React.Component {
  handleButtonClick = (e) => {
    console.log('Button clicked');
    //! Uncomment the next line to stop propagation
    // e.stopPropagation();
  };

  handleInnerDivClick = () => {
    console.log('Inner DIV clicked (bubbling)');
  };

  handleOuterDivClick = () => {
    console.log('Outer DIV clicked (bubbling)');
  };

  handleInnerDivClickCapture = () => {
    console.log('Inner DIV clicked (capturing)');
  };

  handleOuterDivClickCapture = () => {
    console.log('Outer DIV clicked (capturing)');
  };

  render() {
    return (
      <div 
        onClick={this.handleOuterDivClick}
        onClickCapture={this.handleOuterDivClickCapture}
      >
        <div 
          onClick={this.handleInnerDivClick}
          onClickCapture={this.handleInnerDivClickCapture}
        >
          <button onClick={this.handleButtonClick}>Click me</button>
        </div>
      </div>
    );
  }
}

export default App;


