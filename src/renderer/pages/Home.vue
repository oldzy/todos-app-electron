<template>
  <Card v-for="value in todos" :todo="value"/>
  <AddTodoButton/>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Card from '../components/Card.vue';
import { useTodos } from '../composables/todos';
import AddTodoButton from '../components/AddTodoButton.vue';

const {todos, fetchTodos} = useTodos();

onMounted(async () => {
  fetchTodos();
});
</script>