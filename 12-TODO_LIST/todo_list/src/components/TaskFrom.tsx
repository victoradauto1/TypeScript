import styles from './TaskForm.module.css'
import { ITask } from '../interface/Task'
import { useState, ChangeEvent, FormEvent, useEffect } from 'react'

interface Props{
    btnText: string
}
const TaskFrom = ({btnText}: Props) => {

    const [id, setId] = useState<number>(0)
    const [title, setTilte] = useState<string>("")
    const [difficult, setDifficult] = useState<number>(0)

    const addTaskHandler = () =>{

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        if(e.target.name == "title"){
            setTilte(e.target.value)
        } else{
            setDifficult(parseInt(e.target.value))
        }

        console.log(title)
        console.log(difficult)
    }

  return (
   <form className={styles.form} onSubmit={addTaskHandler}>
    <div className={styles.input_container}>
        <label htmlFor="title">Título: </label>
        <input type="text" placeholder="Título da tarefa" name="title" onChange={handleChange}/>
    </div>
    <div className={styles.input_container}>
        <label htmlFor="difficult">Título:</label>
        <input type="text" name="difficult" placeholder="Título da tarefa"  onChange={handleChange}/>
    </div>
    <input type="submit" value={btnText}/>
   </form>
  )
}

export default TaskFrom