<script setup>
import { ref } from 'vue';


const puestos = ['puesto','puesto','puesto','puesto']
const dinero = ref(0);
const puestoClicado = ref(false);
const estado = ref('Libre')

function limpiar(){
    dinero.value = 0;
}

function sumar(puesto) {
  if (puestoClicado.value !== puesto) {
    dinero.value+= 2600;
  }
  puestoClicado.value = puestoClicado.value === puesto ? null : puesto;
}
</script>

<template>
    <div class="w-4/5 h-4/5 bg-gray-400 m-auto mt-3 p-2">
      <div class="flex pb-3">
        <h3 class="px-3">Recaudo : {{ dinero }}</h3>
        <button class="rounded shadow-md bg-amber-500" @click="limpiar"> Limpiar</button>
      </div>
  
      <div class="flex flex-wrap justify-center">
        <div v-for="(puesto, index) in puestos" :key="index" class="w-1/5 h-32 rounded shadow-lg mb-3 mx-2">
          <div :class="{'bg-green-500': puestoClicado === index, 'bg-red-500': puestoClicado !== index, 'h-4/5 rounded-md p-2': true}">
            <p>Puesto {{ estado }}</p>
          </div>
          <div @click="sumar(index)" class="bg-amber-500 cursor-pointer hover:bg-amber-600 rounded-b-md p-2">
            {{ puesto }} {{ index + 1 }}
          </div>
        </div>
      </div>
    </div>
  </template>