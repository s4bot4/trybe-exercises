import React from "react";

const Task = (value) => {
   return (
     <li key={value}>{value}</li>
   );
}
  const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

  class Tasklist extends React.Component {
    render() {
      return (
        <ul>{ tarefas.map(tarefa => Task(tarefa))}</ul>
      );
    }
  }


  export default Tasklist;


