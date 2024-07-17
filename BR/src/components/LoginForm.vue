<template>
    <div
        class="animate-fade-in max-w-md mx-auto mt-[calc(50vh-200px)] rounded-xl shadow-xl p-8 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg overflow-hidden border-b-[#fadd9f] border-r-[#fadd9f] border-white border-2 border-opacity-40 transition hover:shadow-[#fadd9f]">
        <div class="relative group animate-fade-in" onclick="window.location.href = '/';">
            <img src="img/deshacer.png" alt="Logo" class="w-6 h-5 hover:cursor-pointer tol" />
            <div
                class="absolute bottom-full -left-5  transform translate-x-1 mb-2 hidden group-hover:block bg-gray-400 text-white text-xs rounded py-0.5 px-2">
                volver
            </div>
        </div>
        <h2 class="animate-fade-in text-2xl font-semibold mb-4 text-center">Iniciar sesión</h2>
        <form @submit.prevent="loginUser" class="animate-fade-in">
            <div class="relative mb-8">
                <input type="email" id="email" v-model="email"
                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 border border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#e0c790]"
                    placeholder=" " required />
                <label
                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-[#e0c790] after:border-blue-gray-200 peer-focus:after:!border-[#e0c790]">Correo
                    electronico</label>
            </div>
            <div class="relative mb-8">
                <input type="password" id="password" v-model="password"
                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 border border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#e0c790]"
                    placeholder=" " required />
                <label
                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-[#e0c790] after:border-blue-gray-200 peer-focus:after:!border-[#e0c790]">
                    Contraseña</label>
            </div>
            <div class="relative mb-4">
                <h3>
                    <p v-if="isInputInvalid" class="text-red-500">Credenciales incorrectas</p>
                </h3>
            </div>
            <div class="relative mb-2">
                <p class="mt-4 text-center">¿Ya tienes una cuenta? <a onclick="window.location.href = '/registerU'"
                        class="text-blue-600 cursor-pointer">Registrate aquí</a></p>
            </div>
            <div class="relative mb-4">
                <p class="mt-4 text-center"> <a @click="window.location.href = '/registerU'"
                        class=" cursor-pointer">¿Olvidaste tu contraseña?</a></p>
            </div>
            <div class="flex justify-center">
                <button type="submit" class="px-4 py-2 shadow-lg bg-[#e0c790] text-white rounded-md hover:bg-[#d3bb86]">
                    Iniciar sesión
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { login } from '../backend.js';
import { authToken, setAuthToken, clearAuthToken } from '../authState';

const email = ref('');
const password = ref('');
const loginUser = async () => {
    const user = { email: email.value, password: password.value };
    try {
        const token = await login(user);
        setAuthToken(token);
        if (token) {
            window.location.href = '/load?newRuta=';
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        isInputInvalid.value = true;
    }
};
</script>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 1s ease-in-out forwards;
}
</style>