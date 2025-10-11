<template>
    <button class="add-todo" @click="handleClick">Ajouter Todo</button>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleClick = () => {
    router.push('/add-todo')
}
</script>

<style>
    .add-todo {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
    }
</style>