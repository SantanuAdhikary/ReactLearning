import Form from "./components/forms/Form";
import TodoList from "./components/todo/TodoList";
import { v1 as uuid } from "uuid";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

const App = () => {
  let [state, setState] = useState({
    items: [],
    id: uuid(),
    course: "",
    trainer: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    try {
      // console.log(state); 

      let newItem = {
        id:state.id,
        course:state.course,
        trainer:state.trainer
      }

      let updatedItem = [...state.items,newItem];
      console.log(updatedItem)

      setState({
        items: updatedItem,
        course:"",
        trainer:"",
        id:uuid()
      })

    } catch (err) {
      console.log(err);
    }
  };

 
  let handleDelete = (id)=>{
    let fileteredItem = state.items.filter(item => item.id !=id);
    setState({items:fileteredItem})
  }

  let handleEdit =(id)=>{
    let fileteredItem = state.items.filter(item=> item.id!=id);
    let selectedItem = state.items.find(item=>item.id === id);

    setState({
      items:fileteredItem,
      course:selectedItem.course,
      trainer:selectedItem.trainer,
      id:selectedItem.id
    })

  }
  return (
    <section id="mainBlock">
      <article>
        <header>
          <Toaster />
          <h1>Todo App</h1>
        </header>
        <main>
          <Form
            course={state.course}
            trainer={state.trainer}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <TodoList items={state.items} handleDelete={handleDelete} handleEdit={handleEdit}/>
        </main>
      </article>
    </section>
  );
};

export default App;
