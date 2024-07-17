<template>
    <div class="w-full max-w-md p-8 bg-gray-100 rounded shadow-md">
        <h2 class="text-2xl font-bold mb-6">Reservar una cita</h2>
        <form @submit.prevent="submitBooking">
            <label class="block mb-4">
                <span class="block text-gray-700">Nombre</span>
                <input v-model="name" type="text" class="mt-1 block w-full p-2 border border-gray-300 rounded" required>
            </label>
            <label class="block mb-4">
                <span class="block text-gray-700">Fecha</span>
                <input v-model="date" type="date" class="mt-1 block w-full p-2 border border-gray-300 rounded" required>
            </label>
            <label class="block mb-4">
                <span class="block text-gray-700">Hora</span>
                <input v-model="time" type="time" class="mt-1 block w-full p-2 border border-gray-300 rounded" required>
            </label>
            <label class="block mb-4">
                <span class="block text-gray-700">Servicio</span>
                <select v-model="service" class="mt-1 block w-full p-2 border border-gray-300 rounded" required>
                    <option value="" disabled>Seleccione un servicio</option>
                    <option value="manicure">Manicura</option>
                    <option value="pedicure">Pedicura</option>
                    <option value="both">Manicura y Pedicura</option>
                </select>
            </label>
            <button type="submit" class="w-full py-2 px-4 bg-pink-500 text-white rounded hover:bg-pink-600">
                Confirmar cita
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const date = ref('');
const time = ref('');
const service = ref('');

const submitBooking = () => {
    const bookingId = Date.now().toString();
    const bookingDetails = { name: name.value, date: date.value, time: time.value, service: service.value };
    localStorage.setItem(bookingId, JSON.stringify(bookingDetails));
    window.location.href = `/confirmation/${bookingId}`;
};
</script>