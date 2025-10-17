import { ipcMain } from 'electron';
import { TodoRepository } from './todoRepository';
import Todo from 'src/shared/todo';

const todoRepository = new TodoRepository();

export function registerTodoRepository() {
  ipcMain.handle("todoRepository:getTodos",
    (e, a) => {
      return todoRepository.getTodos();
    }
  );

  ipcMain.handle("todoRepository:addTodo", (e, todo: Todo) => {
    todoRepository.addTodo(todo);
  })

  ipcMain.handle("todoRepository:deleteTodo", (e, id: number) => {
    todoRepository.deleteTodo(id);
  })

  ipcMain.handle("todoRepository:toggleTodo", (e, id: number) => {
    todoRepository.toggleTodo(id);
  });
}
