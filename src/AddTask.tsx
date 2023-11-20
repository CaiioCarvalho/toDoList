import { Trash, Check } from 'phosphor-react'
import './AddTask.css'
import { useState } from 'react';

interface Novatarefa {
  novaTarefa: string;
  deleteTask: (novaTarefa: string) => void;
  handleCheckedTask: (task: number) => void;

}

export const AddTask = ({ novaTarefa, deleteTask, handleCheckedTask }: Novatarefa) => {
  const [isChecked, setIsChecked] = useState(0)
  const [concludedTask, setConcludedTask] = useState(0)

  function handleDeleteTask() {
    deleteTask(novaTarefa)
    concludedTask == 1 ? handleCheckedTask(concludedTask) : '';
    ;

  }

  function handleCompleteTask() {
    isChecked == 1 ? setIsChecked(0) : setIsChecked(1);
    concludedTask == 1 ? setConcludedTask(0) : setConcludedTask(1);
    handleCheckedTask(concludedTask);

  }
  return (

    <div className="addtask__content">
      <button
        onClick={handleCompleteTask}
      ><h3
        className={concludedTask == 1 ? 'showChecked' : 'doNotshow'}><Check weight='bold' /></h3></button>
      <span className={isChecked == 1 ? 'textDecoration-throught' : ''}>{novaTarefa}</span>
      <button onClick={handleDeleteTask}><Trash size={14} /></button>
    </div>
  )
}
