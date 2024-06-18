import { useState, useEffect } from 'react';
import { TableContainer, TableInput, TableSelect, TableAddButton, Tables, SingleTable, TabelThead, TableBoddy, DivAddTask, TdDiv } from './styles';
import { Plus, Trash } from '@phosphor-icons/react';
import { nanoid } from 'nanoid'

interface Task {
    id: string;
    task: string;
    shift: 'day' | 'night';
}

export function Table() {
    const [taskList, setTaskList] = useState<Task[]>([]);
    const [task, setTask] = useState<string>('');
    const [shift, setShift] = useState<'day' | 'night'>('day');

    useEffect(() => {
        const savedTasks = localStorage.getItem('taskList');
        if (savedTasks) {
            setTaskList(JSON.parse(savedTasks));
        }
    }, []);

    const addTask = () => {
        if (task.trim() !== '') {
            const newTask: Task = { id: nanoid(), task, shift };
            const updatedTaskList = [...taskList, newTask];
            setTaskList(updatedTaskList);
            localStorage.setItem('taskList', JSON.stringify(updatedTaskList));
            setTask('');
        }
    };

    const removeTask = (id: string) => {
        const updatedTaskList = taskList.filter(t => t.id !== id);
        setTaskList(updatedTaskList);
        localStorage.setItem('taskList', JSON.stringify(updatedTaskList));
    };

    return (
        <TableContainer>
            <h1>Lista de Tarefas</h1>
            <DivAddTask>
                <TableInput
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Adicione uma tarefa"
                />
                <TableSelect value={shift} onChange={(e) => setShift(e.target.value as 'day' | 'night')}>
                    <option value="day">Dia</option>
                    <option value="night">Noite</option>
                </TableSelect>
                <TableAddButton onClick={addTask}><Plus size={24}/></TableAddButton>
            </DivAddTask>
            <Tables>
                <SingleTable>
                    <TabelThead>
                        <tr>
                            <th>Dia</th>
                        </tr>
                    </TabelThead>
                    <TableBoddy>
                        {taskList
                            .filter(task => task.shift === 'day')
                            .map((task) => (
                                <tr key={task.id}>
                                    <td>
                                        <TdDiv>
                                            {task.task}
                                            <button onClick={() => removeTask(task.id)}><Trash size={24}/></button>
                                        </TdDiv>
                                    </td>
                                </tr>
                            ))}
                    </TableBoddy>
                </SingleTable>

                <SingleTable>
                    <TabelThead>
                        <tr>
                            <th>Noite</th>
                        </tr>
                    </TabelThead>
                    <TableBoddy>
                        {taskList
                            .filter(task => task.shift === 'night')
                            .map((task) => (
                                <tr key={task.id}>
                                    <td>
                                        <TdDiv>
                                            {task.task}
                                            <button onClick={() => removeTask(task.id)}><Trash size={24}/></button>
                                        </TdDiv>
                                    </td>
                                </tr>
                            ))}
                    </TableBoddy>
                </SingleTable>
            </Tables>
        </TableContainer>
    );
}
