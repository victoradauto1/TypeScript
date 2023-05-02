import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from './App.module.css'
import TaskFrom from "./components/TaskFrom";
import TaskList from "./components/TaskList";
import { ITask } from "./interface/Task";
import { useState } from "react";

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskFrom btnText="Criar Tarefa" />
        </div>
        <div>
          <h2>Sua tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
