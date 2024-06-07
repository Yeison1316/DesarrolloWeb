<!---<script setup>
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
</template>-->
<script setup>
import { ref } from "vue"
const indice = ref("")

</script>
<template>


    <main class="h-screen w-full flex flex-col justify-center items-center gap-8">
       <div class="flex gap-3 items-end">
       <div class="w-4 h-7 " :class="{false : 'bg-slate-500'}, {'bg-red-500' : indice.split(' ').length >= 2}" ></div>
       <div class="w-4 h-12 ":class="{false : 'bg-slate-500'}, {'bg-orange-500' : indice.split(' ').length >= 3}" ></div>
       <div class="w-4 h-16 ":class="{false : 'bg-slate-500'}, {'bg-yellow-500' : indice.split(' ').length >= 5}" ></div>
       <div class="w-4 h-20 " :class="{false : 'bg-slate-500'}, {'bg-green-500' : indice.split(' ').length >= 7}"></div>
       </div>
       <input type="text" v-model="indice">
    </main>






</template>