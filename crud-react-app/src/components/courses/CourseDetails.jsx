import axios from 'axios';
import React from 'react'
// import Moment from 'react-moment'
import {Link, Navigate, useLocation, useNavigate} from 'react-router-dom'
import courseServices from '../../services/CourseService'
import toast from 'react-hot-toast';

const CourseDetails = () => {

    let Navigate = useNavigate();

    let {state: {id, title, trainer, description, createdAt}} = useLocation()

    let deleteCourse = async (id) => {
        if (window.confirm() === true) {
            // await axios.delete(`http://localhost:5000/course/${id}`)

            //! axios instance
          await courseServices.deleteService(id);
          toast.success("course has been deleted successfully...");
          window.location.assign("/"); //force refresh to clean cache in the browser
        } else {
          Navigate("/");
        }

       
                               //! force refresh to clean cache in the browser
      };
  return (
    <div className="course_details">
    <header>
      

    <Link to={`/edit/${id}`} className="edit btn-help">
          edit
        </Link>
        <Link
          to="/"
          className="delete btn-help"
          onClick={() => deleteCourse(id)}
        >
          delete
        </Link>


      <Link to="/" className="back btn-help">
        back
      </Link>

     
      <h2>{title}</h2>
    </header>
    <main>
      <p>
        <span>Trainer : </span>
        <span>{trainer}</span>
      </p>
      <p>{description}</p>
    </main>
    <footer>
      {/* <span className="date_create">Course Created At : </span>
      <span>
        <strong>{createdAt}</strong>
      </span> */}
    </footer>
  </div>
  )
}

export default CourseDetails