import AppName from "./AppName"
import AddTodo from "./AddTodo"
import Item1 from "./Item1"
import Item2 from "./Item2"
import './App.css'
function App() {
  return (
    <center className='todo-container'>
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="item-containers">
        <Item1></Item1>
        <Item2></Item2>
      </div>

    </center >
  );
}

export default App
