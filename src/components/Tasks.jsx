import { useState, useEffect } from 'react'

const API = 'http://localhost:3001'
const Tasks = () => {
  const [todos, setTodos] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    GetTodos();
    //console.log(todos)
  })

  const GetTodos = () => {
    fetch(API + '/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.log(err))
  }

  const completetodo = async id => {
      const data = await fetch(API+ '/todos/complete/' + id)
        .then(res => res.json());

      setTodos(todos => todos.map(todo => {
        if(todo._id === data._id){
          todo.complete = data.complete;
        }

        return todo
      }));
  }

  const deleteTodo = async id => {
    await fetch(API+ '/todos/delete/' + id, {method: 
      "DELETE"})
        .then(res => res.json());
      
    setTodos(todos => todos.filter(todo => todo._id !== id));
  }

  const addTodo = async () => {
    const data = await fetch(API + "/todos/new/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: newTodo
      })
    }).then(res => res.json());

    setTodos([...todos, data]);
    setPopUp(false);
    setNewTodo("")
  }
  
  return (
    <div className="tasks-container w-11/12 mb-6">
      <div className="title flex items-center pb-4">
        <h1 className='text-4xl font-bold'>Tasks</h1>
        <div className="qty ml-3 bg-gray-400 pt-1 pb-1 pl-2 pr-2 rounded-xl">2</div>
      </div>
      <div className="tasks flex flex-col gap-4">
        {todos.map(todo => (
          <div className={`task-container ${todo.isDone ? 'completed': 'ongoin'}`} key={todo._id} onClick={() => completetodo(todo._id)}>
            <div className="checkbox"></div>
            <div className="task-info">
              <div className="">
                <p className="task-name">{todo.text}</p>
                <p className="task-date">Today</p>
              </div>
              <div className="delete-task" onClick={()=> deleteTodo(todo._id)}>delete</div>
            </div>
          </div>
        ))}
      </div>
      <div className="addTask-btn" onClick={()=> setPopUp(true)}>New Task</div>
      {popUp ? (
        <div className='popUp'>
          <div className="closePopUp"> Close </div>
          <div className="content">
            <p>Add new task</p>
            <input type="text" 
              className='add-todo-input'
              onChange={e => setNewTodo(e.target.value)}
              value={newTodo}
            />
            <div className="addbtn" onClick={addTodo}>Create Task</div>
          </div>
        </div>) : ''}
    </div>
  )
}

export default Tasks