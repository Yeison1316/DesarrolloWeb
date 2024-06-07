<script setup>
import {ref} from 'vue';
const palabras = ref('');
const npalabra = ref(0);
function contar(){
	npalabra.value = 0;
	console.log(palabras.value);
	for (let index = 0; index <= palabras.value.length; index++) {
		let p = palabras.value.charCodeAt(index);
		if(p === 32){
			npalabra.value = npalabra.value + 1;
			console.log(npalabra.value);
		}
	}
}
</script>
<template>
    <div class="w-96 m-auto mt-4">
			<div class="flex p-4 justify-around items-end">
				<div class="w-16 h-20 bg-gray-400" :class="{'bg-red-500':npalabra > 1 }"></div>
				<div class="w-16 h-32 bg-gray-400" :class="{'bg-orange-500':npalabra > 2}"></div>
				<div class="w-16 h-44 bg-gray-400" :class="{'bg-yellow-500':npalabra > 4}"></div>
				<div class="w-16 h-56 bg-gray-400" :class="{'bg-green-500':npalabra > 6}"></div>
			</div>
			<div class="bg-zinc-50">
				<input v-model="palabras" placeholder="Palabras" class="border-2 rounded w-[100%] border-black p-2">
                <button @click="contar(palabras)" class="bg-yellow-300 p-2 mt-1 rounded-lg">Contar</button>
			</div>
		</div>
</template>