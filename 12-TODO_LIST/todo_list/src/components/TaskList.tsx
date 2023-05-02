import { ITask } from "../interface/Task"

import styles from './TaskList.module.css'

interface Props {
  taskList:ITask[]
}

const TaskList = ({tasklist}: Props) => {
  return (
    <div>
        <h2>lista de tarefas</h2>
    </div>
  )
}

export default TaskList