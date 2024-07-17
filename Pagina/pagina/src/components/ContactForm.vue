<template>
    <div class="max-w-md mx-auto p-8 bg-gray-100 rounded shadow-md">
        <h2 class="text-2xl font-bold mb-6">Contáctanos</h2>
        <form @submit.prevent="submitContact">
            <label class="block mb-4">
                <span class="block text-gray-700">Nombre</span>
                <input v-model="name" type="text" class="mt-1 block w-full p-2 border border-gray-300 rounded" required>
            </label>
            <label class="block mb-4">
                <span class="block text-gray-700">Correo electrónico</span>
                <input v-model="email" type="email" class="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required>
            </label>
            <label class="block mb-4">
                <span class="block text-gray-700">Mensaje</span>
                <textarea v-model="message" class="mt-1 block w-full p-2 border border-gray-300 rounded" rows="5"
                    required></textarea>
            </label>
            <button type="submit" class="w-full py-2 px-4 bg-pink-500 text-white rounded hover:bg-pink-600">
                Enviar
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const submitContact = () => {
    alert(`Gracias, ${name.value}! Hemos recibido tu mensaje.`);
    name.value = '';
    email.value = '';
    message.value = '';
};
</script>