<template>
    <div
        class="fixed top-0 left-0 right-0 bg-opacity-50 bg-transparent backdrop-filter backdrop-blur-lg z-50 shadow-md">
        <div class=" max-w-7xl flex justify-between items-center m-auto">
            <div>
                <img src="img/logo.png" alt="Logo BeautyBook" class="h-12">
            </div>
            <div class="flex space-x-4">
                <button @click="navigateTo('registerS')"
                    class="px-4 py-2 text-[#c5c579] text-base font-semibold rounded-md text-center inline-block hover:text-[#f0d7f3]">
                    Registrar salón
                </button>
                <button @click="navigateTo('reserve')"
                    class="px-4 py-2 text-[#c5c579] text-base font-semibold rounded-md text-center inline-block hover:text-[#f0d7f3]">
                    Reservar cita
                </button>
                <button v-if="!state" onclick="window.location.href = '/login'"
                    class="px-4 py-2 text-[#c5c579] text-base font-semibold rounded-md text-center inline-block hover:text-[#f0d7f3]">
                    Iniciar sesión
                </button>
                <button v-if="!state" onclick="window.location.href = '/registerU'"
                    class="px-4 py-2 text-[#c5c579] text-base font-semibold rounded-md text-center inline-block hover:text-[#f0d7f3]">
                    Registrarse
                </button>
                <button v-if="state" @click="navigateTo('profile')"
                    class="px-4 py-2 text-[#c5c579] text-base font-semibold rounded-md text-center inline-block hover:text-[#f0d7f3]">
                    Perfil
                </button>
                <button v-if="state" @click="closeSession()"
                    class="px-4 py-2 text-[#c5c579] text-base font-semibold rounded-md text-center inline-block hover:text-[#f0d7f3]">
                    Cerrar sesión
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { authToken, clearAuthToken } from '../authState.js';
import { ref } from 'vue';
import { onMounted } from 'vue';

const state = ref(false);
const closeSession = () => {
    console.log("hola");
    clearAuthToken();
    state.value = false;
    window.location.href = '/';
}
const navigateTo = (ruta) => {
    if (authToken.value) {
        window.location.href = '/' + ruta;
    } else {
        window.location.href = '/confirmationMessage?message=¡Debes iniciar sesión!&newRuta=login';
    }
}
onMounted(() => {
    if (authToken.value) {
        state.value = true;
    } else {
        state.value = false;
    }
});
</script>