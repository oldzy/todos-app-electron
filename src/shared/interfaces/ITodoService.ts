import Todo from "../todo";

export default interface ITodoService {
    getTodos:() => Promise<Todo[]>
    addTodo:(todo: Todo) => Promise<void>
}