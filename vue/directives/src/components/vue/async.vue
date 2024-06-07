<script setup>
import {ref} from 'vue';

let Datos = ref();

  function datos(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        Datos.value = data;
        console.log(data)
    });
    console.log(Datos.value);
    }
</script>
<template>
    <div class="bg-teal-200 w-80 m-auto mt-3 pb-2">
       <button  @click="datos()" class="ml-6 mt-5 bg-red-400 rounded p-1">Datos</button> 
       <div v-for="(datos,index) in Datos" :key="index" class="bg-amber-400 my-2 mx-2">
            {{ datos.name }}
       </div>
    </div>
</template>