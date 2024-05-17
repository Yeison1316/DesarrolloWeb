<script setup>
import {ref} from 'vue';

const selectedIndex = ref(0);
const temas = ['Tema 1','Tema 2','Tema 3', 'Tema 4'];
function show(index){
    if(index == selectedIndex.value){
        selectedIndex.value = -1; 
    }else{
        selectedIndex.value = index;
    }
    
}
</script>
<template>
    <div class="w-1/4 rounded m-auto bg-blue-400 mt-12 p-1">
        <div v-for="(tema ,index) in temas" :key="index" class="m-2 rounded">
            <h1 @click="show(index)" class="bg-blue-300 select-none text-white px-1 flex justify-between hover:cursor-pointer" :class="{'bg-blue-500':selectedIndex == index}">
                {{tema}}
                <span>{{ selectedIndex == index ? '-' : '+' }}</span>
            </h1>
            <div v-show="selectedIndex == index" class="bg-blue-100 p-1">Text</div>
        </div>
    </div>
</template>