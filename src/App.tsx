import { PlusCircle, ClipboardText } from 'phosphor-react'
import './App.css'
import { Header } from './Header'
import { Task } from './Task'
import { AddTask } from './AddTask'
import { useState, ChangeEvent } from 'react'



function App() {
  const [newTask, setNewTask] = useState('')
  const [commentArray, setCommentArray] = useState<string[]>([])
  const [countConcludedTask, setCountConcludedTask] = useState(0)

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function handleAddTask() {

    setCommentArray([...commentArray, newTask])
    setNewTask('');
  }

  function handleCheckedTask(check: number) {
    check == 1 ? setCountConcludedTask(countConcludedTask - 1) :
      setCountConcludedTask(countConcludedTask + 1)
  }

  function deleteTask(task: string) {
    const filterTask = commentArray.filter(tarefa => {
      return tarefa != task;
    })
    setCommentArray(filterTask)
  }


  return (
    <div>
      <Header />
      <div className='app__principal'>
        <main className='app__mainContent'>

          <input type='text'
            placeholder='Adicione uma nova tarefa'
            value={newTask}
            onChange={handleNewTask}
            required
          />

          <button
            title={newTask == '' ? 'Escreva uma tarefa ao lado!' : ''}
            disabled={newTask == ''}
            onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} />
          </button>

        </main>
        <Task addedTasks={commentArray.length}
          countConcludedTask={countConcludedTask}
        />
        {commentArray.length == 0 ?
          <div className='app__placeholder'>
            <ClipboardText weight='thin' size={56} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div> : commentArray.map(task => {
            return <AddTask key={task}
              novaTarefa={task}
              handleCheckedTask={handleCheckedTask}
              deleteTask={deleteTask} />
          })}

      </div>
    </div>
  )
}

export default App
