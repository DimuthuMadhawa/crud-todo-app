import { useEffect , useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [content, setContent] = useState("");
  const [task, setTask] = useState("");

  useEffect(() => {
    
    const gettodos = async() => {
      const response = await fetch(
        `http://localhost:5000/api/todos`,
      );
      const todos = await response.json();
      setTodos(todos);
    };
    gettodos();
  }, []);

  const createTodo = async (e) => {
    e.preventDefault(); 

    const response = await fetch(`http://localhost:5000/api/todos`, {
      method: "POST",
      body: JSON.stringify({ task }),
      headers: { "Content-type": "application/json" },
    },);

    const newTodo = await response.json();

    setTask("");

    setTodos([...todos, newTodo]);
  };

  // const deleteTodo = async (todo) => {
  //   const response = await 
  // }

  return (
      <div className="container">
        
        <form className="form" onSubmit={createTodo}>
          <input
            type="text"
            className="todo-input"
            placeholder="Add a new todo..."
            value={task}
            required
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit" className="todo-button">
            Add Todo
          </button>
        </form>

        <div>
          
        </div>
        <h1 className="title">Task Manager</h1>
        <div>{
          todos.length>0 && todos.map((item)=>(
            <div key={item._id}>{item.task}</div>
          ))
          
          }</div>
      </div>
         
  );
}

export default App;
