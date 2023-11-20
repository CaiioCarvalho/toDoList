import './Task.css'

interface TaskAdd {
    addedTasks: number;
    countConcludedTask: number;
}

export const Task = ({ addedTasks, countConcludedTask }: TaskAdd) => {


    return (
        <div className="task__header">
            <div className='taks__labels primeiro'>
                <h1>Tarefas criadas</h1>
                <h2>{addedTasks}</h2>
            </div>
            <div className='taks__labels segundo'>
                <h1>Concluídas</h1>
                <h2>{countConcludedTask} de {addedTasks}</h2>
            </div>
        </div>
    )
}
