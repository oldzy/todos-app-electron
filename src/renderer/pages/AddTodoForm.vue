<template>
    <input v-model="title" type="text" name="titre" placeholder="titre">
    <input v-model="description" type="text" name="description" placeholder="description">
    <input v-model="date" type="date" name="date">
    <button @click="handleAdd">Ajouter</button>
</template>

<script lang="ts" setup>
import Todo from 'src/shared/todo';
import { ref } from 'vue';
import { useTodos } from '../composables/todos';
import { useRouter } from 'vue-router';

const { addTodo } = useTodos();
const router = useRouter();

const title = ref('');
const description = ref('');
const date = ref<Date>(new Date())

const handleAdd = async () => {
    let todo = {
        title: title.value,
        description: description.value,
        dateLimite: date.value,
        isFinished: false
    } as Todo;

    await addTodo(todo);

    router.push('/');
}
</script>