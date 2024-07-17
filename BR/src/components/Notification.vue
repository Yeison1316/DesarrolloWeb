<template>
    <div v-if="visible" class="fixed top-4 right-4 z-50">
        <div v-for="(notification, index) in notifications" :key="index"
            class="mb-2 p-4 rounded-lg shadow-lg transition-opacity duration-300"
            :class="`bg-${notification.type}-500 text-white`">
            <p>{{ notification.message }}</p>
            <button @click="removeNotification(index)" class="absolute top-2 right-2 text-white hover:text-gray-300">
                &times;
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(true);
const notifications = ref([]);

const addNotification = (message, type = 'info') => {
    notifications.value.push({ message, type });
    setTimeout(() => {
        removeNotification(0);
    }, 5000);
};

const removeNotification = (index) => {
    notifications.value.splice(index, 1);
};

//export { addNotification };
</script>