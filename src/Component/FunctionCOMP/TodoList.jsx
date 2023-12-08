import React, { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default function TodoList() {
  let uuid = uuidv4();
  // console.log(uuid,"arun");
  const [input, setinput] = useState("");

  const [todolist, settodolist] = useState([]);

  const handlefetch = async () => {
    let abc = await axios.get("http://localhost:3000/todoList");
    settodolist(abc.data);
    console.log(abc.data);
  };

  useEffect(() => {
    handlefetch();
  }, []);

  const hanldetaskadd = (e) => {
    setinput(e.target.value);
  };

  const handlechange = async () => {
    let body = {
      id: uuid,
      task: input,
    };

    await axios.post("http://localhost:3000/todoList", body);
    handlefetch();

    // settodolist([...todolist, { task: input, id: uuid }]);
  };

  const handledelete = async (deleteid) => {
    await axios.delete("http://localhost:3000/todoList/" + deleteid);
    // const filterdelte = todolist.filter((to) => to.id != deleteid);
    handlefetch();

    // settodolist(filterdelte);
    // console.log(deleteid);
  };

  const handleupdate = async (index) => {
    let updateddata = prompt("update u r task", todolist[index].task);

    let boody = {
      id: todolist[index].id,
      task: updateddata,
    };
    await axios.put(
      "http://localhost:3000/todoList/" + todolist[index].id,
      boody
    );
    handlefetch();

    //     console.log(index);
    // let copiedtodolist = [...todolist]
    // copiedtodolist[index].task = updateddata
    // settodolist(copiedtodolist)
  };

  return (
    <div>
      <input placeholder="Add your Task" onChange={(e) => hanldetaskadd(e)} />
      <button onClick={handlechange}> Add Task</button>

      {todolist.map((to, index) => (
        <div key={index}>
          <span>{to.task}</span>
          <button onClick={() => handleupdate(index)}>Update</button>
          <button onClick={() => handledelete(to.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
