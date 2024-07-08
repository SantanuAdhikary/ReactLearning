//! uncontrolled component
//! react ref , for the elements have to add ref attribute

// import { useRef } from "react";
// const App = () => {
//   let emailRef = useRef("");
//   let passwordRef = useRef("");

//   let handleSubmit = (e) => {
//     e.preventDefault();
//     let email = emailRef.current.value;
//     let password = passwordRef.current.value;
//     console.log({ email, password });
//   };

//   return (
//     <div>
//       <section id="form">
//         <article>
//           <h2>login</h2>
//           <div className="form-group">
//             <label htmlFor="email">email</label>
//             <input
//               type="email"
//               placeholder="enter email"
//               id="email"
//               ref={emailRef}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">password</label>
//             <input
//               type="password"
//               placeholder="enter password"
//               id="password"
//               ref={passwordRef}
//             />
//           </div>
//           <div className="form-group">
//             <button onClick={handleSubmit}>login</button>
//           </div>
//         </article>
//       </section>
//     </div>
//   );
// };
// export default App;

//!  Controlled Component

//! initialize state object
//! add value attribute to the input of form elements
//! state mutation/ state update => add onChange event to the elements

// import React, { useState } from "react";
// const App = () => {
//   let [email, setEmail] = useState("");
//   let [password, setPassword] = useState("");
//   let handleSubmit =(e)=>{
//     e.preventDefault();
//     console.log({email,password})
//     setEmail("");
//     setPassword("")
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}/>
//         <input
//           type="password"
//           placeholder="enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}/>
//         <button>login</button>
//       </form>
//     </div>
//   );};
// export default App;

//!                    form handle in cbc (uncontrolled component)

// import React, { Component ,createRef} from 'react'
// export default class App extends Component {
//   emailRef = createRef("");
//   passwordRef = createRef("");
//   handleSubmit=(e)=>{
//     e.preventDefault();
//     let email = this.emailRef.current.value
//     let password = this.passwordRef.current.value
//     console.log({email,password})
//   }
//   render() {
//     return (
//       <div>
//         <h1>login</h1>
//         <form onSubmit={this.handleSubmit}>
//           <div className="from-group">
//             <label htmlFor="email">email</label>
//             <input type="text" placeholder='email'  id="email" ref={this.emailRef} />
//           </div>
//           <div className="from-group">
//             <label htmlFor="password">password</label>
//             <input type="text" placeholder='password'  id="password" ref={this.passwordRef}/>
//           </div>
//           <div className="from-group">
//             <button>login</button>
//           </div>
//         </form>
//       </div>
//     )}}

//!                  Controlled Component

//!  How to handle onchange for two input by using only one handler
// import React, { Component } from "react";
// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "",
//       password: "",
//     };
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//   };

//   handleChange = (e) => {
//     let {name,value} = e.target;
//     this.setState({
//       [name]: value,        //! name is variable that we want to add as object key
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>login</h1>
//         <form onSubmit={this.handleSubmit}>
//           <div className="from-group">
//             <label htmlFor="email">email</label>
//             <input
//               type="text"
//               placeholder="email"
//               id="email"
//               name="email"
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="from-group">
//             <label htmlFor="password">password</label>
//             <input
//               type="text"
//               placeholder="password"
//               id="password"
//               name="password"
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="from-group">
//             <button>login</button>
//           </div>
//         </form>
//       </div>
//     );}}

//!     In Functional Based Component

// import React, { useState } from 'react'

// const App = () => {
//   let [state,setState] = useState({
//     email:"",
//     password:""
//   })

//   let {email,password} = state;

//   let handleChange = (e) => {
//      let {name,value} = e.target;
//      setState({ ...state, [name]: value,   });    //! ...state is importatant

//    };
//  let handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({email,password});
//   };

//   return (
//     <div>
//     <h1>login</h1>
//     <form onSubmit={handleSubmit}>
//       <div className="from-group">
//         <label htmlFor="email">email</label>
//         <input
//           type="text"
//           placeholder="email"
//           id="email"
//           name="email"
//           onChange={handleChange}
//         />
//       </div>
//       <div className="from-group">
//         <label htmlFor="password">password</label>
//         <input
//           type="text"
//           placeholder="password"
//           id="password"
//           name="password"
//           onChange={handleChange}
//         />
//       </div>
//       <div className="from-group">
//         <button>login</button>
//       </div>
//     </form>
//   </div>
//   )
// }

// export default App

//!  How to handle text-area

// import React, { useState } from "react";

// const App = () => {
//   let [state, setState] = useState({
//     title: "",
//     comment: "",
//     loading: "",
//     gender:"",
//   });

//   let [skills,setSkills] = useState([]);

//   let { title, comment, loading,gender } = state;

//   let handleChange = (e) => {
//     let { name, value } = e.target;
//     setState({ ...state, [name]: value,loading:true });
//   };

  // let handleCheckBox = (e)=>{
  //   let {value} = e.target;

  //   if(e.target.checked)
  //   {
  //     setSkills(oldChecked=>{
  //       return [...oldChecked,value]
  //     })
  //   }
  //   else{
  //     setSkills(oldChecked=>{
  //       return oldChecked;
  //     })
  //   }
  // }


//   let handleSubmit=(e)=>{
//     e.preventDefault();
//     try{
//       console.log(...state,skills)
//        setState({loading:false,title:"",comment:"",gender:""})
//     }
//     catch(err)
//     {
//       console.log(err)
//     }
//   }
//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input
//             type="text"
//             name="title"
//             id="title"
//             value={title}
//             onChange={handleChange}
//             placeholder="enter title"
//           />
//         </div>
        
//         {/* Radio button  */}

//         <div className="form-group" name="gender" value={gender} onChange={handleChange}>
//           <label htmlFor="gender">Select Gender</label>
//           {/* <input type="radio" name="gender" value={gender} />Male   */}  
//           <input type="radio" name="gender" value="male" />Male    
//           <input type="radio" name="gender" value="female" />Female
//           <input type="radio" name="gender" value="others" />Others
//         </div>

//       {/* ckeckbox */}

//         {/* <div className="form-group" name="skills" value={skills}   >
//           <label htmlFor="skills">Select Skills</label>
//           <input type="checkbox" name="skills" id="skills" value='javascript' onChange={handleCheckBox}/>JavaScript
//           <input type="checkbox" name="skills" id="skills" value='java' onChange={handleCheckBox}/>Java
//           <input type="checkbox" name="skills" id="skills" value='NodeJs' onChange={handleCheckBox}/>NodeJs
//           <input type="checkbox" name="skills" id="skills" value='React' onChange={handleCheckBox}/>React
//         </div> */}

//       <div className="form-group">
//           <label htmlFor="skills">Select Skills</label>
//           <input type="checkbox" name="skills" value="javascript" checked={skills.includes("javascript")} onChange={handleCheckBox} />JavaScript
//           <input type="checkbox" name="skills" value="java" checked={skills.includes("java")} onChange={handleCheckBox} />Java
//           <input type="checkbox" name="skills" value="NodeJs" checked={skills.includes("NodeJs")} onChange={handleCheckBox} />NodeJs
//           <input type="checkbox" name="skills" value="React" checked={skills.includes("React")} onChange={handleCheckBox} />React
//         </div>

//         <div className="form-group">
//           <label htmlFor="comment">write your comment</label>
//           <textarea
//             name="comment"
//             id="comment"
//             cols="30"
//             rows="10"
//             value={comment}
//             onChange={handleChange}
//           ></textarea>
//         </div>
//         <div className="form-group">
//           <button disabled={!state.title && !state.comment ? true : false }>
//             {loading? "Loading":"Submit"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import countriesData from './country.json';

const App = () => {

  let [state, setState] = useState({
    title: "",
    comment: "",
    loading: false,
    gender: "",
    selectedOption:"",
    price_range:0,
    date:"",
    time:""
  });

  let [skills, setSkills] = useState([]);
  
  const [selectedCountry, setSelectedCountry] = useState("");
  
  let { title, comment, loading, gender, selectedOption,price_range,date,time } = state;
  
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value, loading: true });
  };
  
  let handleCheckBox = (e) => {
    let { value } = e.target;
    
    if (e.target.checked) {
      setSkills((oldChecked) => {
        return [...oldChecked, value];
      });
    } else {
      setSkills((oldChecked) => {
        return oldChecked.filter((skill) => skill !== value);
      });
    }
  };
  
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log({ ...state, skills,selectedCountry });
      setState({ loading: false, title: "", comment: "", gender: "" ,selectedOption:"", price_range:0,date:"",time:""});
      setSkills([]);
      setSelectedCountry("")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>

        {/* Handle input box  */}

        <div className="form-group">
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        </div>

        {/* Handle radio button */}

        <div className="form-group">
          <label htmlFor="gender">Select Gender</label>
          <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={handleChange} />Male
          <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={handleChange} />Female
          <input type="radio" name="gender" value="others" checked={gender === "others"} onChange={handleChange} />Others
        </div>

         {/* Handle CheckBox */}

        <div className="form-group">
          <label htmlFor="skills">Select Skills</label>
          <input type="checkbox" name="skills" value="javascript" checked={skills.includes("javascript")} onChange={handleCheckBox} />JavaScript
          <input type="checkbox" name="skills" value="java" checked={skills.includes("java")} onChange={handleCheckBox} />Java
          <input type="checkbox" name="skills" value="NodeJs" checked={skills.includes("NodeJs")} onChange={handleCheckBox} />NodeJs
          <input type="checkbox" name="skills" value="React" checked={skills.includes("React")} onChange={handleCheckBox} />React
        </div>

        {/* Handle Select and Options */}

        <div className="form-group">
          <label htmlFor="selectedOption">Select an Option</label>
          <select name="selectedOption" value={selectedOption} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="react">React</option>
            <option value="viewJs"> viewJs</option>
            <option value="Jquery">Jquery </option>
          </select>
        </div>

        {/* Coutries handle by select and option */}

        <div className="form-group">
          <label htmlFor="selectedCountry">Select a Country</label>
          <select name="selectedCountry" value={selectedCountry} onChange={handleCountryChange}>
            <option value="">Select a country</option>
            {countriesData.map((country, index) => (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* Handle Price Range  */}

    <div className="from-group">
      <label htmlFor="price_range">Price Range</label>
      <span>{price_range.length>0 && price_range}</span>
      <input type="range" name="price_range" id="price_range" value={price_range} onChange={handleChange} />
    </div>

    {/* Handle Date And Time */}

    <div className="from-group">
      <label htmlFor="date">Select Date</label>
      <input type="date" name="date" id="date" value={date} onChange={handleChange} />
    </div>

    <div className="from-group">
      <label htmlFor="time">Select Time</label>
      <input type="time" name="time" id="time" value={time} onChange={handleChange} />
    </div>

        {/* Handle Text Area */}

        <div className="form-group">
          <label htmlFor="comment">Write your comment</label>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            value={comment}
            onChange={handleChange}
          ></textarea>
        </div>


        <div className="form-group">
          <button type="submit" disabled={!title && !comment}>
            {loading ? "Loading" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;

