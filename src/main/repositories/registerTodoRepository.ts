import { ipcMain } from 'electron';
import { TodoRepository } from './todoRepository';

const todoRepository = new TodoRepository();

export function registerTodoRepository()
{
  ipcMain.handle("todoRepository:getTodos",
  (e,a) => {
    console.log(e);
    console.log(a);
    return todoRepository.getTodos();
  }
);
}
