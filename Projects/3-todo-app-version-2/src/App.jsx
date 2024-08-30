import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import Item from "./components/Item"
import './App.css'
import Items from "./components/Items"
function App() {
  const todoItems = [
    {
      name: 'Dev',
      date: '04/06/2023'
    },
    {
      name: 'DSA',
      date: '05/06/2023'
    }
  ]
  return (
    <center className='todo-container'>
      <AppName></AppName>
      <AddTodo></AddTodo>
      <Items todoItems={todoItems}></Items>
      {/* <div className="item-containers">
        <Item name='Dev' date='04/06/2023'></Item>
        <Item name='DSA' date='05/06/2023'></Item>

      </div> */}

    </center >
  );
}

export default App
