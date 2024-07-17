<template>
    <div
        class="mt-[calc(50vh-400px)] m-auto animate-fade-in p-8 rounded-lg shadow-lg w-full max-w-7xl bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg overflow-hidden border-b-[#fadd9f] border-r-[#fadd9f] border-white border-2 border-opacity-40 transition hover:shadow-[#fadd9f]">
        <div class="relative group" onclick="window.history.back()">
            <img src="img/deshacer.png" alt="Logo" class="w-6 h-5 hover:cursor-pointer " />
            <div
                class="absolute bottom-full -left-5  transform translate-x-1 mb-2 hidden group-hover:block bg-gray-400 text-white text-xs rounded py-0.5 px-2">
                volver
            </div>
        </div>
        <h3 class="text-2xl font-bold mb-6 text-center">Registrar Salón</h3>
        <form @submit.prevent="handleRegisterSalon" class="space-y-4">
            <div class="relative mb-4">
                <input type="text" id="name" v-model="newSalon.name" @input="checkName"
                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 border border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#e0c790]"
                    placeholder=" " required />
                <label for="name"
                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content-[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content-[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-[#e0c790] after:border-blue-gray-200 peer-focus:after:!border-[#e0c790]">
                    Nombre del Salón
                </label>
                <p v-if="checkNameText" class="text-red-500 text-xs italic">Ya existe un salón con ese nombre</p>
            </div>
            <div>
                <h4 class="text-lg font-bold mb-2">Dirección</h4>
            </div>
            <div class="flex space-x-4">
                <div class="relative w-1/2">
                    <input type="text" id="pais" v-model="newSalon.address.pais"
                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 border border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#e0c790]"
                        placeholder=" " required />
                    <label for="pais"
                        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content-[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content-[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-[#e0c790] after:border-blue-gray-200 peer-focus:after:!border-[#e0c790]">
                        País
                    </label>
                </div>
                <div class="relative w-1/2">
                    <input type="text" id="pais" v-model="newSalon.address.departamento"
                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 border border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#e0c790]"
                        placeholder=" " required />
                    <label for="pais"
                        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content-[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content-[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-[#e0c790] after:border-blue-gray-200 peer-focus:after:!border-[#e0c790]">
                        Departamento
                    </label>
                </div>
            </div>

            <div class="flex space-x-4">
                <div class="relative w-3/4 ">
                    <input type="text" id="ciudad" v-model="newSalon.address.ciudad"
                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 border border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#e0c790]"
                        placeholder=" " required />
                    <label for="ciudad"
                        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content-[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content-[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-[#e0c790] after:border-blue-gray-200 peer-focus:after:!border-[#e0c790]">
                        Ciudad
                    </label>
                </div>
                <div class="relative w-3/12">
                    <input type="text" id="codigoPostal" v-model="newSalon.address.codigoPostal"
                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 border border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#e0c790]"
                        placeholder=" " required />
                    <label for="codigoPostal"
                        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content-[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content-[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-[#e0c790] after:border-blue-gray-200 peer-focus:after:!border-[#e0c790]">
                        Código Postal
                    </label>
                </div>
            </div>
            <div class="flex space-x-4 justify-around">
                <div class="relative w-6/12">
                    <input type="text" id="colonia" v-model="newSalon.address.barrio"
                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 border border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#e0c790]"
                        placeholder=" " required />
                    <label for="colonia"
                        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content-[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content-[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-[#e0c790] after:border-blue-gray-200 peer-focus:after:!border-[#e0c790]">
                        Barrio
                    </label>
                </div>
                <div class="relative w-1/4">
                    <input type="text" id="calle" v-model="newSalon.address.calle"
                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 border border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#e0c790]"
                        placeholder=" " required />
                    <label for="calle"
                        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content-[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content-[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-[#e0c790] after:border-blue-gray-200 peer-focus:after:!border-[#e0c790]">
                        Calle
                    </label>
                </div>
                <div class="relative w-1/4">
                    <input type="text" id="numero" v-model="newSalon.address.numero"
                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 border border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#e0c790]"
                        placeholder=" " />
                    <label for="numero"
                        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content-[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content-[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-[#e0c790] after:border-blue-gray-200 peer-focus:after:!border-[#e0c790]">
                        Número
                    </label>
                </div>
            </div>
            <div class="relative mb-4">
                <input type="text" id="referencia" v-model="newSalon.address.referencia"
                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 border border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#e0c790]"
                    placeholder=" " />
                <label for="referencia"
                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content-[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content-[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-[#e0c790] after:border-blue-gray-200 peer-focus:after:!border-[#e0c790]">
                    Referencia
                </label>
            </div>
            <div class="relative ">
                <input type="text" id="telephone" v-model="newSalon.telephone"
                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 border border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#e0c790]"
                    placeholder=" " required />
                <label for="telephone"
                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content-[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content-[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-[#e0c790] after:border-blue-gray-200 peer-focus:after:!border-[#e0c790]">
                    Telefono
                </label>
            </div>
            <div class="flex space-x-4 justify-around h-16">
                <div class="relative w-1/2 mb-4">
                    <label for="startTime" class="text-gray-500 text-sm">Hora de inicio
                    </label>
                    <input type="time" id="startTime" v-model="newSalon.startTime"
                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 border border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#e0c790]"
                        placeholder=" " required />
                </div>
                <div class="relative w-1/2 mb-4">
                    <label for="endTime" class="text-gray-500 text-sm">Hora de cierre</label>
                    <input type="time" id="endTime" v-model="newSalon.endTime"
                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 border border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#e0c790]"
                        placeholder=" " required />
                </div>
            </div>
            <div class="relative mb-4">
                <div class="flex mb-2">
                    <h4 class="text-lg font-bold mx-2">Servicios</h4>
                    <div class="w-4 h-4 hover:cursor-pointer relative group">
                        <img src="img/info.png" alt="">
                        <div
                            class="absolute w-60 bottom-full -left-5  transform translate-x-1 mb-2 hidden group-hover:block bg-gray-400 text-white text-xs rounded py-0.5 px-2">
                            Debes seleccionar aquellos servicios que ofrece tu salón
                        </div>
                    </div>
                </div>
                <p v-if="checkServices" class="text-red-500 text-xs italic">Debes seleccionar al menos un servicio
                </p>
                <div class="grid grid-cols-2 gap-4">
                    <div v-for="(service, index) in servicesList" :key="index"
                        :class="{ 'bg-[#e0c790] text-white': isSelected(service), 'bg-gray-200': !isSelected(service) }"
                        class="cursor-pointer p-4 rounded-lg transition-colors" @click="toggleService(service)">
                        {{ service }}
                    </div>
                </div>
                <ul class="mt-4">
                    <li v-for="(service, index) in newSalon.services" :key="index"
                        class="flex justify-between items-center mt-2 text-gray-500 text-sm bg-gray-300 px-2 py-1 rounded-xl">
                        {{ service }}
                        <button type="button" @click="removeService(index)"
                            class="text-red-500 hover:text-red-700">&times;</button>
                    </li>
                </ul>
            </div>

            <button type="submit"
                class="w-full bg-[#e0c790] text-white py-2 rounded-lg hover:bg-[#d3bb86]">Registrar</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { registerSalon } from '../backend.js';
import { getSalons } from '../backend.js';
const checkNameText = ref(false);
const checkServices = ref(false);
const newSalon = ref({
    name: '',
    address:
    {
        calle: '',
        numero: '',
        barrio: '',
        ciudad: '',
        departamento: '',
        codigoPostal: '',
        pais: '',
        referencia: '',
    }
    ,
    services: [],
    telephone: '',
    startTime: '',
    endTime: '',
    userUid: '',
});

const servicesList = [
    'Corte de cabello',
    'Tratamientos capilares',
    'Rasurado',
    'Manicura',
    'Arreglo de barba, bigote y patilla',
    'Pedicura',
    'Tintura de cabello',
    'Maquillaje facial (no invasivo)'
];
const checkName = () => {
    const consult = getSalons().then((data) => {
        const nombre = [];
        data.forEach((salon) => {
            nombre.push(salon.name);
        })
        if (nombre.includes(newSalon.value.name)) {
            checkNameText.value = true;
        } else {
            checkNameText.value = false;
        }
    });
}

const isSelected = (service) => {
    return newSalon.value.services.includes(service);
};

const toggleService = (service) => {
    if (isSelected(service)) {
        newSalon.value.services = newSalon.value.services.filter(s => s !== service);
    } else {
        newSalon.value.services.push(service);
    }
};

const removeService = (index) => {
    newSalon.value.services.splice(index, 1);
};

const handleRegisterSalon = async () => {
    if (newSalon.value.services.length == 0) {
        checkServices.value = true;
    } else {
        if (newSalon.value.name.trim() !== '' && checkNameText.value == false) {
            const salon = await registerSalon(newSalon.value);
            console.log(salon);
            if (salon) {
                window.location.href = '/confirmationMessage?message=¡Salón registrado!&newRuta=';
            } else {
                window.location.href = '/confirmationMessage?message=¡Error!&newRuta=registerS';
            }
        }
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

.bg-gray-200:hover {
    background-color: #e0c790;
    color: white;
}
</style>
