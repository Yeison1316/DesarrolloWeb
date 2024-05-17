<script setup>
import {ref} from 'vue'

const tema = ref(0);
const viewTema = ref(false);


function view(temaClicado){
    console.log('hola');
    console.log(temaClicado);
    tema.value = temaClicado;
    viewTema.value = !viewTema.value; 
}

</script>
<template>
<div class="w-1/3 m-auto mt-3 bg-blue-300 p-2">
    <div class="items-center justify-center">
        <div class="w-[99%] rounded px-2">
            <div class="flex justify-between bg-blue-200 rounded px-2 hover:bg-blue-400 cursor-pointer"
            @click="view(1)">
                <h5>Tema 1</h5>
                <div class="text-2xl mr-2 rounded-full hover:cursor-pointer flex justify-center items-center">+</div>
            </div>
            <div class="py-2">
                <input placeholder="Texto del tema" v-if="viewTema && tema == 1" class="w-[99%] h-52 outline-none rounded px-2 bg-blue-100"/>
            </div>
        </div>
        <div class="w-[99%] rounded px-2">
            <div class="flex justify-between bg-blue-200 rounded px-2 hover:bg-blue-400 cursor-pointer"
            @click="view(2)">
                <h5>Tema 2</h5>
                <div class="text-2xl mr-2 rounded-full hover:cursor-pointer flex justify-center items-center">+</div>
            </div>
            <div class="py-2">
                <input placeholder="Texto del tema" v-if="viewTema && tema == 2" class="w-[99%] h-52 outline-none rounded px-2 bg-blue-100"/>
            </div>
        </div>
        <div class="w-[99%] rounded px-2">
            <div class="flex justify-between bg-blue-200 rounded px-2 hover:bg-blue-400 cursor-pointer"
            @click="view(3)">
                <h5>Tema 3</h5>
                <div class="text-2xl mr-2 rounded-full hover:cursor-pointer flex justify-center items-center">+</div>
            </div>
            <div class="py-2">
                <input placeholder="Texto del tema" v-if="viewTema && tema == 3" class="w-[99%] h-52 outline-none rounded px-2 bg-blue-100"/>
            </div>
        </div>
        <div class="w-[99%] rounded px-2">
            <div class="flex justify-between bg-blue-200 rounded px-2 hover:bg-blue-400 cursor-pointer"
            @click="view(4)">
                <h5>Tema 4</h5>
                <div class="text-2xl mr-2 rounded-full hover:cursor-pointer flex justify-center items-center">+</div>
            </div>
            <div class="py-2">
                <input placeholder="Texto del tema" v-if="viewTema && tema == 4" class="w-[99%] h-52 outline-none rounded px-2 bg-blue-100"/>
            </div>
        </div>
    </div>
</div>
</template>