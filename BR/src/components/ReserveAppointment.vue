<template>
    <div class="max-w-7xl  justify-around m-auto mt-[calc(50vh-430px)]">
        <div class="relative mb-4">
            <div class="flex mb-2">
                <h4 class="text-lg font-bold mx-2">Servicios</h4>
                <div class="w-4 h-4 hover:cursor-pointer relative group">
                    <img src="img/info.png" alt="">
                    <div
                        class="absolute w-60 bottom-full -left-5  transform translate-x-1 mb-2 hidden group-hover:block bg-gray-400 text-white text-xs rounded py-0.5 px-2">
                        Debes seleccionar el tipo de servicio que deseas reservar
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div v-for="(service, index) in servicesList" :key="index"
                    :class="{ 'bg-[#e0c790] text-white': isSelected(service), 'bg-[#f8f8f6]': !isSelected(service) }"
                    class="cursor-pointer max-h-96 p-4 rounded-lg  shadow-xl overflow-hidden hover:bg-[#e6d8bc] transition-transform hover-zoom"
                    @click="toggleService(service)">
                    <img :src="`img/services/${service.icono}`" class="h-[90%] m-auto rounded-lg  ">
                    <p class="text-center font-semibold h-[10%]">{{ service.name }}</p>
                </div>
            </div>
        </div>
        <div class=" w-full p-2 mb-2 m-auto" id="sectionSalons" v-if="selected.length > 0">
            <h4 class="text-lg font-bold mx-2 mb-2">Salones disponibles</h4>
            <div class="flex mb-2 bg-[#f8f8f6] rounded-lg border border-[#e6d8bc] hover:cursor-pointer hover:bg-[#e6d8bc] shadow-md"
                v-for="(salon, index) in salons" :key="index">
                <img src="img/logo.png" alt="" class="h-20">
                <div class="ml-2 text-lg">
                    <h4 class="text-sm font-bold mb-1">{{ salon.name }}</h4>
                    <div class="flex">
                        <div class="flex text-sm mb-1 space-x-1">
                            <p class="text-sm font-semibold">Dirección: </p>
                            <p class="text-sm"> Barrio {{ salon.address.barrio }} Calle {{
                                salon.address.calle }} N°{{ salon.address.numero }} {{ salon.address.ciudad }} {{
                                    salon.address.departamento }} {{ salon.address.pais }}</p>
                        </div>
                    </div>
                    <div class="flex space-x-2">
                        <div class="flex text-sm mb-1 space-x-1">
                            <p class="text-sm font-semibold">Horario:</p>
                            <p class="text-sm"> {{ salon.startTime }} - {{ salon.endTime }}</p>
                        </div>
                        <div class="flex text-sm mb-1 space-x-1">
                            <p class="text-sm font-semibold">Teléfono: </p>
                            <p class="text-sm"> {{ salon.telephone }}</p>
                        </div>
                    </div>
                    <div class="flex space-x-2">
                        <div class="flex text-sm mb-1 space-x-1">
                            <p class="text-sm font-semibold">Servicios: </p>
                            <p v-for="service in salon.services" class="text-sm"> {{ service }},</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchSalons, reserveAppointment } from '../backend.js';
import { getSalons } from '../backend.js';


const salons = ref([]);
const filtroSalon = ref([]);
const CopySalon = ref([]);
const servicesList = [
    { icono: 'img/corte.jpg', name: 'Corte de cabello' },
    { icono: 'img/tratamiento.jpg', name: 'Tratamientos capilares' },
    { icono: 'img/depilacion.webp', name: 'Depilación' },
    { icono: 'img/manicura.jpg', name: 'Manicura' },
    { icono: 'img/barba-y-bigote.jpg', name: 'Arreglo de barba, bigote y patilla' },
    { icono: 'img/pedicura.jpg', name: 'Pedicura' },
    { icono: 'img/tinte-para-el-cabello.jpg', name: 'Tintura de cabello' },
    { icono: 'img/maquillaje.jpg', name: 'Maquillaje facial (no invasivo)' },
];
const selectedSalon = ref('');
const selectedService = ref('');
const selectedDate = ref('');
const newReserve = ref({
    salon: '',
    service: '',
    date: '',
})
const selected = ref([]);
const toggleService = (service) => {
    if (isSelected(service)) {
        selected.value.splice(selected.value.indexOf(service), 1);
    } else {
        selected.value.push(service);
        window.scrollTo(0, screen.height);
    }
    filtroSalon.value = [];
    salons.value = [];
    salons.value = CopySalon.value;
    for (let k = 0; k < selected.value.length; k++) {
        let s = salons.value.forEach(s => {
            for (let i = 0; i < s.services.length; i++) {
                if (s.services[i] === selected.value[k].name) {
                    if (!filtroSalon.value.includes(s)) {
                        filtroSalon.value.push(s);
                    }
                }
            }
        });
    }
    if (filtroSalon.value.length > 0) {
        salons.value = filtroSalon.value;
    }
}
function calculateHorario(salon) {
    const [endHours, endMinutes] = salon.endTime.split(':');
    const [startHours, startMinutes] = salon.startTime.split(':');
    const endDate = new Date();
    endDate.setHours(endHours);
    endDate.setMinutes(endMinutes);
    endDate.setSeconds(0);
    const startDate = new Date();
    startDate.setHours(startHours);
    startDate.setMinutes(startMinutes);
    startDate.setSeconds(0);
    if (new Date() > startDate && new Date() < endDate) {
        return true;
    } else {
        return false;
    }
}
const isSelected = (service) => {
    return selected.value.includes(service);
}
onMounted(async () => {
    salons.value = await getSalons();
    CopySalon.value = salons.value;
    salons.value.forEach((salon) => {
        if (calculateHorario(salon)) {
            console.log("Abierto");
        }
    })
});


const handleReserveAppointment = async () => {
    if (selectedSalon.value && selectedService.value && selectedDate.value) {
        const newAppointment = {
            salon: selectedSalon.value,
            service: selectedService.value,
            date: selectedDate.value
        };
        await reserve.reserveAppointment(newAppointment);
        window.location.href = '/confirmation?message=Cita reservada con éxito';
    }
};
</script>

<style scoped>
.transition-transform {
    transition: transform 0.3s ease;
}

.hover-zoom:hover {
    transform: scale(1.05);
}
</style>