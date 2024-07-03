import React, { Component } from "react";
export default class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `from cbc ${this.state.count}`;   //! it is used for side effect in ClassBased Component
    console.log('check re-render or not')               //! it will render only once
  }

  componentDidUpdate(){
    document.title = `from cbc ${this.state.count}`;    //! it will render based on state and props 
    console.log('check re-render or not')
    }
  render() {
                                                                         //! render method is not best place for calling side effect.
    // document.title = `from cbc ${this.state.count}`;
    // console.log("re-rendered");
    return (
      <>
        <h1>Class based Component</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase
        </button>
      </>
    );
  }
}
