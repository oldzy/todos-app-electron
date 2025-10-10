import { ipcRenderer } from "electron"
import ITodoService from "src/shared/interfaces/ITodoService"

export function todoService(): ITodoService {
    return { 
        getTodos: () => ipcRenderer.invoke("todoRepository:getTodos")
    }
}