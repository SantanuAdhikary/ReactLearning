
const TodoList = ({ items,handleDelete,handleEdit }) => {
    console.log(items);

  return (
    <div className="todo">
      <h2>Courses</h2>
      <table>
        <thead>
          <th>id</th>
          <th>course</th>
          <th>trainer</th>
          <th></th>
        </thead>
        <tbody>
         {
            items.map(c=>(
              <tr key={c.id}>
                <td>{c.id.slice(0,4)}</td>
                <td>{c.course}</td>
                <td>{c.trainer}</td>
                <td>
                  <button className="update" onClick={()=>handleEdit(c.id)}>update</button>
                  <button className="delete" onClick={()=>handleDelete(c.id)}>delete</button>
                </td>
              </tr>
            ))
           
         }
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
