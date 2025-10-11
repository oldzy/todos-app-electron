import { ipcMain } from 'electron';
import { TodoRepository } from './todoRepository';
import Todo from 'src/shared/todo';

const todoRepository = new TodoRepository();

export function registerTodoRepository() {
  ipcMain.handle("todoRepository:getTodos",
    (e, a) => {
      console.log(e);
      console.log(a);
      return todoRepository.getTodos();
    }
  );

  ipcMain.handle("todoRepository:addTodo", (e, todo: Todo) => {
    todoRepository.addTodo(todo);
  })
}
