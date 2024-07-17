<template>
    <div
        class="max-w-lg mx-auto p-6 text-center mt-[calc(50vh-200px)] bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg overflow-hidden border-b-[#fadd9f] border-r-[#fadd9f] border-white border-2 border-opacity-40 transition hover:shadow-[#fadd9f]">
        <h1 class="text-3xl font-bold mb-4">¡Notificacion!</h1>
        <p class="text-gray-700 mb-6">{{ message }}</p>
        <button @click="navigateHome" class="px-4 py-2 mx-3 bg-[#e0c790] text-white rounded-md">Volver a Inicio</button>
        <button v-if="!authToken" onclick="window.location.href = '/login'"
            class="px-4 py-2 bg-[#e0c790] text-white rounded-md">Iniciar
            Sesión</button>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { authToken } from '../authState.js';

const urlParams = new URL(window.location.href).searchParams;
const message = urlParams.get('message');
const newRuta = urlParams.get('newRuta');
const navigateHome = () => {
    window.location.href = '/';
};
onMounted(() => {
    console.log(newRuta);
    if (!authToken.value) {
        setTimeout(() => {
            window.location.href = '/' + newRuta;
        }, 4000);
    } else {
        setTimeout(() => {
            window.location.href = '/';
        }, 4000);
    }

});
</script>