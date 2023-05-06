import styles from "./TaskForm.module.css";
import { ITask } from "../interface/Task";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(): null;
}
const TaskFrom = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTilte] = useState<string>("");
  const [difficult, setDifficult] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTilte(task.title);
      setDifficult(task.difficult);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      console.log(handleUpdate);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: ITask = { id, title, difficult };

      if (setTaskList) {
        setTaskList([...taskList, newTask]);
      }

      setTilte("");
      setDifficult(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name == "title") {
      setTilte(e.target.value);
    } else {
      setDifficult(parseInt(e.target.value));
    }
  };

  return (
    <form className={styles.form} onSubmit={addTaskHandler}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título: </label>
        <input
          type="text"
          placeholder="Título da tarefa"
          name="title"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficult">Dificuldade:</label>
        <input
          type="text"
          name="difficult"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={difficult}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskFrom;
