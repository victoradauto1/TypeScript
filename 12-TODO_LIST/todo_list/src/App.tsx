import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./App.module.css";
import TaskFrom from "./components/TaskFrom";
import TaskList from "./components/TaskList";
import { ITask } from "./interface/Task";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };
  
  const updateTask = (id: number, title: string, difficult: number) =>{

    const updateTask: ITask = { id, title, difficult}
    
    const updatedItems = taskList.map((task)=>{
      return task.id === updateTask.id ? updateTask : task
    })

    setTaskList(updatedItems)

    hideOrShowModal(false)
  }


  return (
    <div>
      <Modal
        children={<TaskFrom btnText="Editar Tarefa" taskList={taskList} task={taskToUpdate} />}
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskFrom
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
            
          />
        </div>
        <div>
          <h2>Sua tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
