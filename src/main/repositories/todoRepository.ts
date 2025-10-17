import Todo from "src/shared/todo";

export class TodoRepository {
    todos: Todo[] = [{
        id: 1,
        title: 'MaTache1',
        description: 'untruca faire',
        dateLimite: new Date(),
        isFinished: false
    },
    {
        id: 2,
        title: 'Etudier SGBD',
        description: 'blabla',
        dateLimite: new Date(),
        isFinished: false
    },
    {
        id: 3,
        title: 'Etudier Reseau',
        description: 'blabla',
        dateLimite: new Date(),
        isFinished: false
    },
    {
        id: 4,
        title: 'Etudier Anglais',
        description: 'blabla',
        dateLimite: new Date(),
        isFinished: false
    }]

    getTodos(): Todo[] {
        return this.todos;
    }

    addTodo(todo: Todo): void {
        let id = Math.max(...this.todos.map(t => t.id)) + 1;
        todo.id = id;
        this.todos.push(todo);
    }

    deleteTodo(id: number): void {
        this.todos = this.todos.filter(t => t.id !== id);
    }

    toggleTodo(id: number): void {
        let todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.isFinished = !todo.isFinished;
        }
    }
}