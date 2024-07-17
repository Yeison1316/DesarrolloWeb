<script setup lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';

let userData = ref([]);

function buscar() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => userData.value = data);
    console.log(userData);
}


defineComponent({
    name: 'MdiSearch',
    name: 'MdiCoolantTemperature',
});
</script>
<template>
    <div
        class="bg-gradient-to-r from-[#357680] to-[#347596] shadow-[#eab052] p-3 shadow-2xl border-b-2 border-[#357690]">
        <div class="flex justify-around">
            <div
                class="hover:cursor-pointer font-semibold text-zinc-300 transition-transform duration-500 ease-in-out hover:text-xl hover:text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5" />
                </svg>
            </div>
            <div
                class="hover:cursor-pointer font-semibold text-xs text-zinc-300 transition-transform duration-500 ease-in-out hover:text-sm hover:text-zinc-400">
                STRUCTURE
            </div>
            <div
                class="hover:cursor-pointer font-semibold text-xs text-zinc-300  transition-transform duration-500 ease-in-out hover:text-sm hover:text-zinc-400">
                CONNECT</div>
            <div
                class="hover:cursor-pointer text-xl font-bold font-mono text-zinc-300 transition-transform duration-500 ease-in-out hover:text-2xl hover:text-zinc-400">
                S P A C E D
            </div>
            <div
                class="hover:cursor-pointer font-semibold text-xs text-zinc-300 transition-transform duration-500 ease-in-out hover:text-sm hover:text-zinc-400">
                TEGNOLOGY</div>
            <div
                class="hover:cursor-pointer font-semibold text-xs text-zinc-300 transition-transform duration-500 ease-in-out hover:text-sm hover:text-zinc-400">
                MAPS</div>
            <div
                class="hover:cursor-pointer font-semibold text-xs text-zinc-300 transition-transform duration-500 ease-in-out hover:text-sm hover:text-zinc-400">
                - 50<svg class="inline mx-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                    viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M11.5 1A1.5 1.5 0 0 0 10 2.5v12c-.63.47-1 1.21-1 2a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5c0-.79-.37-1.5-1-2V13h4v-2h-4V9h4V7h-4V5h4V3h-4v-.5A1.5 1.5 0 0 0 11.5 1M0 15v2c.67 0 .79.21 1.29.71S2.67 19 4 19s2.21-.79 2.71-1.29c.11-.12.2-.21.29-.3v-2.25c-.79.26-1.35.77-1.71 1.13c-.5.5-.62.71-1.29.71s-.79-.21-1.29-.71S1.33 15 0 15m16 0v2c.67 0 .79.21 1.29.71S18.67 19 20 19s2.21-.79 2.71-1.29S23.33 17 24 17v-2c-1.33 0-2.21.79-2.71 1.29S20.67 17 20 17s-.79-.21-1.29-.71S17.33 15 16 15m-8 5c-1.33 0-2.21.79-2.71 1.29S4.67 22 4 22s-.79-.21-1.29-.71c-.36-.36-.92-.87-1.71-1.13v2.25c.09.09.18.18.29.3c.5.5 1.38 1.29 2.71 1.29s2.21-.79 2.71-1.29S7.33 22 8 22s.79.21 1.29.71c.44.43 1.15 1.09 2.21 1.25c.16.04.33.04.5.04c1.33 0 2.21-.79 2.71-1.29S15.33 22 16 22s.79.21 1.29.71S18.67 24 20 24s2.21-.79 2.71-1.29c.11-.12.2-.21.29-.3v-2.25c-.79.26-1.35.77-1.71 1.13c-.5.5-.62.71-1.29.71s-.79-.21-1.29-.71S17.33 20 16 20s-2.21.79-2.71 1.29s-.62.71-1.29.71c-.22 0-.37-.03-.5-.08c-.28-.1-.45-.29-.79-.63C10.21 20.79 9.33 20 8 20" />
                </svg>
            </div>
        </div>
    </div>
    <div class="bg-gradient-to-b from-[#347596] to-[#00020d]">
        <div class="h-[800px] flex m-auto w-4/5 ">
            <div class="absolute w-[80%] text-center mt-20 ml-60">
                <h3 class="font-mono font-semibold text-2xl ">En algún lugar, algo
                    increíble está
                    esperando a ser
                    descubierto
                </h3>
            </div>
            <div
                class="flex items-center justify-center w-1/2 transform transition-transform duration-500 ease-in-out hover:-translate-x-8 hover:translate-y-5">
                <img src="img/hombre-espacial.png" class="">
            </div>
            <div
                class="flex items-center justify-center w-1/2 transform transition-transform duration-500 ease-in-out hover:translate-x-10 hover:translate-y-5">
                <img src="img/universe.png" class="w-3/4">
            </div>
        </div>
    </div>
    <div class=" bg-cover bg-[url('https://wallpaperaccess.com/full/9070139.png')] h-[800px]">
        <div class="">
            <img src="img/nave.png" class="absolute animate-move-x m-[-500px] mt-12">
        </div>
    </div>
</template>