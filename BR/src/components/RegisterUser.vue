<template>
    <div class="min-h-screen flex items-center justify-center bg-transparent">
        <div
            class="animate-fade-in p-8 rounded-lg shadow-lg w-full max-w-md bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg overflow-hidden border-b-[#fadd9f] border-r-[#fadd9f] border-white border-2 border-opacity-40 transition hover:shadow-[#fadd9f]">
            <div class="relative group" onclick="window.history.back()">
                <img src="img/deshacer.png" alt="Logo" class="w-6 h-5 hover:cursor-pointer tol" />
                <div
                    class="absolute bottom-full -left-5  transform translate-x-1 mb-2 hidden group-hover:block bg-gray-400 text-white text-xs rounded py-0.5 px-2">
                    volver
                </div>
            </div>
            <h2 class="text-2xl font-bold mb-6 text-center">Registrarme</h2>
            <form @submit.prevent="register" class="relative">
                <div class="mb-4 relative">
                    <input v-model="firstName" type="text" id="firstName"
                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 border border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#e0c790]"
                        placeholder=" " required />
                    <label for="firstName"
                        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-[#e0c790] after:border-blue-gray-200 peer-focus:after:!border-[#e0c790]">Nombres</label>
                </div>
                <div class="mb-4 relative">
                    <input v-model="lastName" type="text" id="lastName"
                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 border border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#e0c790]"
                        placeholder=" " required />
                    <label for="lastName"
                        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-[#e0c790] after:border-blue-gray-200 peer-focus:after:!border-[#e0c790]">Apellidos</label>
                </div>
                <div class="mb-4 relative">
                    <input v-model="email" type="email" id="email" @input="checkEmailValid()"
                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 border border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#e0c790]"
                        placeholder=" " required />
                    <label for="email"
                        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-[#e0c790] after:border-blue-gray-200 peer-focus:after:!border-[#e0c790]">Correo
                        Electrónico</label>
                    <p v-if="checkEmail" class="text-red-500 text-xs italic">El correo electrônico ya existe
                    </p>
                </div>
                <div class="mb-4 relative">
                    <input v-model="password" type="password" id="password"
                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 border border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#e0c790]"
                        placeholder=" " required />
                    <label for="password"
                        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-[#e0c790] after:border-blue-gray-200 peer-focus:after:!border-[#e0c790]">Contraseña</label>
                </div>
                <div class="mb-4 relative">
                    <input v-model="phone" type="tel" id="phone"
                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 border border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#e0c790]"
                        placeholder=" " required />
                    <label for="phone"
                        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-[#e0c790] after:border-blue-gray-200 peer-focus:after:!border-[#e0c790]">Teléfono</label>
                </div>
                <div class="mb-4 relative">
                    <input v-model="address" type="text" id="address"
                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 border border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#e0c790]"
                        placeholder=" " required />
                    <label for="address"
                        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-[#e0c790] after:border-blue-gray-200 peer-focus:after:!border-[#e0c790]">Dirección</label>
                </div>
                <button type="submit"
                    class="w-full bg-[#e0c790] text-white py-2 rounded-lg hover:bg-[#d3bb86]">Registrarme</button>
            </form>
            <p class="mt-4 text-center">¿Ya tienes una cuenta? <a onclick="window.location.href = '/login'"
                    class="text-blue-600 cursor-pointer">Inicia sesión aquí</a></p>
            <p v-if="error" class="text-red-500 text-xs italic">{{ messageError }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { registerUser } from '../backend.js';
import { getUsers } from '../backend.js';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const phone = ref('');
const address = ref('');
const checkEmail = ref(false);
const messageError = ref('');
const error = ref(false);

const register = async () => {
    const user = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        phone: phone.value,
        address: address.value,
    };
    try {
        const userCredential = await registerUser(user);
        if (userCredential.status == 'success') {
            window.location.href = '/login';
        } else {
            error.value = true;
            messageError.value = 'Error al registrar usuario, email invalido';
        }
    } catch (error) {
        console.error('Error registering user:', error);
        error.value = true;
        messageError.value = 'Error al registrar usuario';
    }
};
const checkEmailValid = async () => {
    const user = {
        email: email.value
    }
    const users = await getUsers(user);
    if (users.length > 0) {
        checkEmail.value = true;
    } else {
        checkEmail.value = false;
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