import React from 'react';
import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring from './components/Destructuring';
import State from './components/State';

function App() {

  //1-variáveis
  const name:string = "Matheus"
  const age:number = 30
  const isWorking: boolean = true

  //2-funções

  const userGreeting = (user: string): string => {
    return `Olá, ${user}`

  }

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <p>Nome: {name}</p> 
      <p>Idade: {age}</p>
      <p>Está trabalhando: { isWorking? <span>Sim</span> : <span> Não</span>}</p>
      {userGreeting("Victor")}
      <FirstComponent/>
      <SecondComponent name="Segundo"/>
      <Destructuring title="Primeiro Post" content='Algum conteúdo' comentsQty={7} tags={['legal', 'repostando', 'ti', 'desenvolvimento' ]}/>
      <Destructuring title="Segundo Post" content='Linguagens' comentsQty={13} tags={['python', 'js', 'ts']}/>
      <State/>
    </div>
  );
}

export default App;
