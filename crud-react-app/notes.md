npm i -g json-server  for creating backend server 
json-server --version
for check appdata->roaming-> npm -> node_modules
create one folder backend 
inside that create db.json

<!--! how to start backend server-->

 json-server --watch db.json --port=5000


crate NavbarContainer.jsx 
create Home, NotFound 
create route in App.jsx
create Layout.jsx 

in Home , left side we are creating sidebar and right side content 
now we need sidebar menu . there we have taken two things home and create course 

now we need routing , so we are creating nested routing for path : '/create-course'
now inside Home in the content we have to write <Outlet/>

now in CreateCourse.jsx we have to create form. 
now we have to add Http request. (put)
import axios
in handlesubmit we have to post the data . 
useNavigate -> used for navigate one page to another page .

now inside AllCourse.jsx we have to fetch the data using useEffect();
now we are creating one spinner for that we have created Spinner.jsx in page--> spinner 

<!-- ! now we have to edit  -->

create CourseDetails.jsx and add dynamic routing in App.jsx
we have to use useLocation
here we have created back,edit,delete button
<!-- ? moment.js is used for handling date  -->

now we have created EditCourse.jsx
for edit we need routing. that we wrote in App.jsx (edit/:id)
now we have to attach this in the edit button . 
now the CreateCourse form should be written in EditCourse

now when we are editing we want the data should be displayed in the form . 
so that we have to use useEffect()

<!-- ! delete -->
window.confirm() 


<!-- ! axios instance -->

we have to create axiosIntance 

<!-- import axios from "axios";
let BASE_URL = "http://localhost:5000";
let AxiosInstances = axios.create({
  baseURL: BASE_URL,
});

export default AxiosInstances; -->

service  =>  CourseService.jsx here all the axios method should be written here . no need to write again and again .

AxiosIntance   =   https://blog.logrocket.com/understanding-axios-create/

now import that and use. 

use react-hot-toast in Layouts. import and add <Toaster>
then when ever you need toster use that toast.success("msg")  

courseservice is used in CreateCourse,AllCourse,EditCourse, CourseDetails(for delete)
