import Todo from "src/shared/todo";
import { ref } from "vue";

const todos = ref<Todo[]>([]);

export function useTodos() {
    const fetchTodos = async () => {
        todos.value = await window.electronService.todos.getTodos();
    };

    return  {
        todos,
        fetchTodos
    }
}