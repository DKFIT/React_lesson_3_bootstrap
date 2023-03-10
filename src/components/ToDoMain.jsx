import { useState } from "react"
import FormForTask from "./FormForTask"
import TableForTasks from "./TableForTasks"
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const ToDoMain = () => {
    //state turi buti virusje
    //1. kintamasis kuris saugoje state reiksme
    //2. metodas kuris atnaujina state reiksme
    //3. state pradine reiksme

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text : 'Clean your room',
            isCompleted: false
        },
        {
            id: 2,
            text : 'Walk your dog',
            isCompleted: true
        },
        {
            id: 3,
            text : 'Make some food',
            isCompleted: false
        },
    ])
    console.log(tasks, "Tevinis")
    const addToDoNewTask = (text) =>{

        //Turiu iskviesti setTask metoda
        //turiu prideti nauja uzduoti i esamu uzduociu sarasa
const temVar = [...tasks, {text, isCompleted:false}]
setTasks(temVar)
    }
  return (
    <div>
        <TableForTasks list={tasks}/>
        <FormForTask addToDoNewTask ={addToDoNewTask}/>
    </div>
  )
}



export default ToDoMain