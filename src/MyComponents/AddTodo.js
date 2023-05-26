import React, { useState } from "react";

const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("empty fields not allowed");
        }
        else{
            props.addTodoFunc(title,desc);
            setTitle("");
            setDesc("");
        }
    }

  return (
    <div className="container py-3">
        <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text" value={desc}
            className="form-control" onChange={(e)=>{setDesc(e.target.value)}}
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add TODO
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
