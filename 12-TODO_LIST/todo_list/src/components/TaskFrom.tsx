import styles from './TaskForm.module.css'
import { ITask } from '../interface/Task'
import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import TaskList from './TaskList'

interface Props{
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}
const TaskFrom = ({btnText, taskList, setTaskList}: Props) => {

    const [id, setId] = useState<number>(0)
    const [title, setTilte] = useState<string>("")
    const [difficult, setDifficult] = useState<number>(0)

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        const id = Math.floor(Math.random()*1000)

        const newTask: ITask = {id, title, difficult}

        setTaskList!([...taskList, newTask])

        setTilte("")
        setDifficult(0)

        console.log(taskList)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        if(e.target.name == "title"){
            setTilte(e.target.value)
        } else{
            setDifficult(parseInt(e.target.value))
        }


    }

  return (
   <form className={styles.form} onSubmit={addTaskHandler}>
    <div className={styles.input_container}>
        <label htmlFor="title">Título: </label>
        <input type="text" placeholder="Título da tarefa" name="title" onChange={handleChange} value={title}/>
    </div>
    <div className={styles.input_container}>
        <label htmlFor="difficult">Título:</label>
        <input type="text" name="difficult" placeholder="Título da tarefa"  onChange={handleChange} value={difficult}/>
    </div>
    <input type="submit" value={btnText}/>
   </form>
  )
}

export default TaskFrom