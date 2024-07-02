import React, { Component } from "react";
export default class Cbc extends Component {
  // state =['javascript','react','mongodb','node','express','redux'];
  //! it's not possible only constructor,method, property are allowed
  //!  this waring will be shown :  must be set to an object or null

                    //! storing array,boolean in state 
  state = {
    languages: ["javascript", "react", "mongodb", "node", "express", "redux"],
    isAvailable : true,
    courses:[
        {
            cid:1,
            cname:"mernstack",
            duration:4,
            trainers:["dixit","shashi","pooja","diwakar","vk"],
            price:50000,
            branch:"BTM",
            cource_details: {
                frontend:["html","css","javascript", "react","bootstrap"],
                backend:['nodejs','express','mongoose','rest-api'],
                database:['mongodb','mysql','postgreSql'],
                tools:["git","github",'aws']
            }
        },
        {
            cid:2,
            cname:"JavaFullStack",
            duration:4,
            trainers:["salt","vubi","gautam","rana","siraj"],
            price:50000,
            branch:"Kolkata",
            cource_details: {
                frontend:["html","css","javascript", "react","bootstrap"],
                backend:['java','spring','graphQL','rest-api'],
                database:['mongodb','mysql','postgreSql'],
                tools:["git","github",'aws']
            }
        },
        {
            cid:3,
            cname:"PythonFullStack",
            duration:4,
            trainers:["rohit","sky","pandya","bumrah","jaddu"],
            price:50000,
            branch:"Mumbai",
            cource_details: {
                frontend:["html","css","javascript", "react","bootstrap"],
                backend:['python','django','flask','rest-api'],
                database:['mongodb','mysql','postgreSql'],
                tools:["git","github",'aws']
            }
        },
    ]
  };



  render() {

    let {courses} = this.state;
    return (
      <>
                      //! printing array 

        {this.state.languages.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}

                   //! handling boolean 
        {
            this.state.isAvailable?"Yes I'm available":"No I'm not available"
        }

        {
          courses.map((course,index)=>(
            <div key={index}>
                <p>CourseId : {course.cid}</p>
                <p>CourseName: {course.cname}</p>
                <p>Duration: {course.duration}</p>
               <p> Price: {course.branch}</p>
                <p>Trainers : {course.trainers.map((tutor,index)=>(
                    <li key={index}>{tutor}</li>
                ))}</p>
                
                <p>Frontend Technologies :
                    {
                        course.cource_details.frontend.map((front,i)=>(
                            <li key={i}>{front}</li>
                        ))
                    }
                </p>
                <p>Backend Technologies :
                    {
                        course.cource_details.backend.map((back,i)=>(
                            <li key={i}>{back}</li>
                        ))
                    }
                </p>
                <p>Database Technologies :
                    {
                        course.cource_details.database.map((data,i)=>(
                            <li key={i}>{data}</li>
                        ))
                    }
                </p>
                <hr />
            </div>
          ))
        }
      </>
    );}}
