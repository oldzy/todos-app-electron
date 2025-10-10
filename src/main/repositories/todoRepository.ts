import Todo from "src/shared/todo";

export class TodoRepository {
    todos: Todo[] = [{
        title: 'MaTache1',
        description: 'untruca faire',
        dateLimite: new Date(),
        isFinished: false
    },
    {
        title: 'Etudier SGBD',
        description: 'blabla',
        dateLimite: new Date(),
        isFinished: false
    },
    {
        title: 'Etudier Reseau',
        description: 'blabla',
        dateLimite: new Date(),
        isFinished: false
    },
    {
        title: 'Etudier Anglais',
        description: 'blabla',
        dateLimite: new Date(),
        isFinished: false
    }]

    getTodos(): Todo[] {
        return this.todos;
    }
}