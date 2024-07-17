<template>
    <div class="animate-fade-in max-w-md mx-auto mt-[calc(50vh-200px)]">
        <div class="w-1/2 h-1/2 mx-auto p-6 m-auto">
            <img src="img/load.svg" alt="" class="w-full h-full">
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
const urlParams = new URL(window.location.href).searchParams;
const newRuta = urlParams.get('newRuta');
onMounted(() => {
    console.log(newRuta);
    setTimeout(() => {
        window.location.href = '/' + newRuta;
    }, 3000);
})
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