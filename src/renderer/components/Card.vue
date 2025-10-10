<template>
    <div class="card">
        <span>{{ props.todo.title }}</span>
        <span>{{ props.todo.description }}</span>
    </div>
</template>

<script lang="ts" setup>
import Todo from 'src/shared/todo';

interface Props {
    todo: Todo
}

const props = defineProps<Props>();
</script>

<style>
.card {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    background-color: rgba(155, 155, 155, .8);
}
</style>