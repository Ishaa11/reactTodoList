import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  return (
    <div className='container'>
      <h3 className='my-3'>Todos list</h3>

      {props.todos.map((todo) => {
        return <TodoItem todo={todo} onDelete={props.onDelete}/>
      })}

    </div>
  )
}
