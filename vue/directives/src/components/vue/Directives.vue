<script setup>
import { ref } from 'vue';

const users = ["Pepe","Ana","Juana","Lola"]

const isChecked = ref(false)

</script>
<template>
    <ul>
        <li v-for="(user, index) in users" :key="index">{{ user }}</li>
    </ul>

    <input type="checkbox" id="check" class="p-2" v-model="isChecked"/>
    <label for="check">Pinchame</label>
    <div class="bg-blue-400 text-white rounded py-1 px-2"
    :class="{ 'bg-orange-500': isChecked}"
    > este es un mensaje
    </div>
    <div v-show="isChecked">
        Este es un mensaje que podria ocultar 
        v-model solo para formularios 
        : para cualquier propiedad de una etiqueta
    </div>
    <div v-if="isChecked">
        Este es un mensaje que podria ocultar 
    </div>
    <div v-else>Esto se ve</div>
</template>