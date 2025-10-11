import Todo from "src/shared/todo";
import { ref } from "vue";

const todos = ref<Todo[]>([]);

export function useTodos() {
    const fetchTodos = async () => {
        todos.value = await window.electronService.todos.getTodos();
    };

    const addTodo = async (todo: Todo) => {
        await window.electronService.todos.addTodo(todo);
        await fetchTodos();
    }

    return  {
        todos,
        addTodo,
        fetchTodos
    }
}