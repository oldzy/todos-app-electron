import Todo from "../todo";

export default interface ITodoService {
    getTodos:() => Promise<Todo[]>
}