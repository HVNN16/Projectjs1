import axios from "axios";
import Market from "./Market";
import { useState, useEffect } from "react";

function ListTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/todos")
      .then((response) => {
        setTodos([...response.data.todos]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const datas = todos.map((item) => {
    return <Market key={item.id} {...item} />;
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
          <th scope="col">Description</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>{datas}</tbody>
    </table>
  );
}

export default ListTodos;