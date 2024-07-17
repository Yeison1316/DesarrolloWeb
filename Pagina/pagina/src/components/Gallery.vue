<template>
    <div class="flex flex-wrap justify-center gap-4 p-8 bg-gray-100 rounded shadow-md">
        <h2 class="w-full text-2xl font-bold text-center mb-6">Galería</h2>
        <div v-for="image in images" :key="image.id" class="w-48 h-48 overflow-hidden rounded shadow-lg">
            <img :src="image.src" :alt="image.alt" class="object-cover w-full h-full" />
        </div>
    </div>
</template>

<script setup>
const images = [
    { id: 1, src: 'https://i.pinimg.com/564x/1c/8e/73/1c8e73ee461539f274a974a0ddac293b.jpg', alt: 'Manicura profesional' },
    { id: 2, src: 'https://i.pinimg.com/564x/7a/5a/53/7a5a5349210f1623f0ce4440067c4bfe.jpg', alt: 'Pedicura profesional' },
    { id: 3, src: 'https://i.pinimg.com/564x/41/bf/02/41bf02b4753889796354c5756ad3a96a.jpg', alt: 'Tratamiento de uñas' },
];
</script>