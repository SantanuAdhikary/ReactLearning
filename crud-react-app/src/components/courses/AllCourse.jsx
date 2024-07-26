import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from '../pages/spinner/Spinner';
import Course from './Course';
import courseServices from '../../services/CourseService'

const AllCourse = () => {
    let [state,setState] = useState(null);

    let fetchCourse = async()=>{
        // let {data} = await axios.get("http://localhost:5000/course");

        //! axiosInstance 

        let data = await courseServices.fetchService();
        setState(data);
    }

    useEffect(()=>{
        fetchCourse();
    },[state])
  return (
   <>
    <h2>All Courses</h2>
    <div className="courses">
        {
            state === null ? <Spinner/>: state.map(course=>(
                <Course key={course.id} {...course}/>
            ))
        }
    </div>
   </>
  )
}

export default AllCourse