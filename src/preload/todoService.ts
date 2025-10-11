import { ipcRenderer } from "electron"
import ITodoService from "src/shared/interfaces/ITodoService"
import Todo from "src/shared/todo"

export function todoService(): ITodoService {
    return { 
        getTodos: () => ipcRenderer.invoke("todoRepository:getTodos"),
        addTodo: (todo: Todo) => ipcRenderer.invoke("todoRepository:addTodo", todo)
    }
}