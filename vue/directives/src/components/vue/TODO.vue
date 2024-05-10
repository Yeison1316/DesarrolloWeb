<script setup>
import { ref } from 'vue';


const todos = ref(['Estudiar bastante'])

const todo = ref('')

function add(){
    todos.value.unshift(todo.value)
    todo.value = ''
}

</script>
<template>
    <div class="w-96 bg-orange-200 m-auto mt-7 rounded-lg shadow-xl px-2 py-3">
        <div>
            <input v-model="todo" class="w-4/5 rounded outline-none px-2"/>
            <button @click="add" class="rounded w-1/5 bg-green-600 text-white text-center">+</button>
        </div>
        <div class="mt-3">
            <div v-for="(todo, index) in todos" :key="index" class="bg-orange-300 rounded mt-1">
                {{ todo }}
            </div>
        </div>
    </div>
</template>