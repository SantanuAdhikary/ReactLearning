// import React from 'react'  //! in calss based component it is mandatory

// class App extends React.Component{

//   //! required method render => it's job is calling the subcomponent and printing jsx, what ever we are writing in render method if we update any thing every time this render method will be rerendering.

//   state = {
//     username:"san"
//   }
//   render(){
//     console.log(this)
//     return (
//       <>
//           <h1>I am class based component</h1>
//       </>
//    )}
// }

// export default App;


// import React from 'react'

// class App extends React.Component{

//   constructor()
//   {
//     super()
//     this.state = {    //! state can accept only null or object
//       name:"vk",
//       company:"bcci",
//       salary:1000000,
//       city:'bangalore'
//     }
//     // this.state= "vk" //! not valid
//   }
 
//   render()
//   {
//     return(
//       <>
//       <h1>name is {this.state.name} , works for {this.state.company} </h1>
//       <button onClick={()=> this.setState({name:"rohit"})}>clik me</button>
//       </>
//     )
//   }
// }

// export default App



//! function based component and props


import React from 'react'
import Parent from './component/Parent'

const App = () => {
  return (
    <div>
      <Parent/>
    </div>
  )
}

export default App
