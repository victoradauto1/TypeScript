import React, {createContext} from 'react';
import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category} from './components/Destructuring';
import State from './components/State';
import Context from './components/Context';

interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const ApiContext = createContext<IAppContext | null>(null)

function App() {

  //1-variáveis
  const name:string = "Matheus"
  const age:number = 30
  const isWorking: boolean = true

  //2-funções

  const userGreeting = (user: string): string => {
    return `Olá, ${user}`

  }

  //9- Type

  type textOrNull = string | null

  const myText: textOrNull = "Aqui vai um texto"
  let mySecondText = null

  mySecondText = "Texto novamente"

  type stringsAceitas = "sim" | "não" | "talvez"

  const resposta: stringsAceitas = "não"

  //10- Context API

  const contextValue: IAppContext = {
    language: "JavaSript",
    framework: "Express",
    projects: 5

  }

  return (
    <ApiContext.Provider value={contextValue}>
    <div className="App">
      <h1>TypeScript com React</h1>
      <p>Nome: {name}</p> 
      <p>Idade: {age}</p>
      <p>Está trabalhando: { isWorking? <span>Sim</span> : <span> Não</span>}</p>
      {userGreeting("Victor")}
      <FirstComponent/>
      <SecondComponent name="Segundo"/>
      <Destructuring title="Primeiro Post" content='Algum conteúdo' comentsQty={7} tags={['legal', 'repostando', 'ti', 'desenvolvimento' ]} category={Category.TS}/>
      <Destructuring title="Segundo Post" content='Linguagens' comentsQty={13} tags={['python', 'js', 'ts']} category={Category.P}/>
      <State/>
      <Context />
    </div>
    </ApiContext.Provider>
  );
}

export default App;
