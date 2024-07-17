<template>
    <div class="mx-auto w-full">

    </div>
    <div class="max-w-7xl mx-auto p-6">
        <!-- Función 1: Registro y Perfil de Salones -->
        <section class="function-section mb-12 h-4/5 flex flex-col items-center justify-center mt-16 ">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                    class="transition-transform hover-zoom flex max-h-[30rem] max-w-[35rem] flex-col p-4 rounded-xl shadow-xl items-center bg-transparent bg-opacity-95 backdrop-filter backdrop-blur-lg overflow-hidden border-b-[#fadd9f] border-l-[#fadd9f] border-2 border-opacity-40   hover:shadow-[#fadd9f] hover:shadow-lg">
                    <img src="/img/salon.jpg" alt="Registro de Salón"
                        class="h-[85%] w-[540px] rounded-lg mb-4 animate-fade-in hover:cursor-pointer">
                    <h3 class="text-xl font-bold  mb-2 text-center">Registra y administra tu salón</h3>
                    <p class="text-sm text-center">Desde el registro inicial hasta la gestión diaria,
                        simplificamos tu
                        administración.</p>
                </div>
                <div
                    class="flex max-h-[30rem] max-w-[35rem] flex-col items-center rounded-xl shadow-xl p-4 bg-transparent bg-opacity-95 backdrop-filter backdrop-blur-lg overflow-hidden border-b-[#fadd9f] border-r-[#fadd9f] border-white border-2 border-opacity-40  transition-transform hover-zoom hover:shadow-[#fadd9f] hover:shadow-lg">
                    <img src="/img/perfil.jpg" alt="Perfil del Salón"
                        class="h-[85%] w-[540px] rounded-lg mb-4 animate-fade-in  hover:cursor-pointer">
                    <h3 class="text-xl font-bold  mb-2 text-center">Perfil del salón</h3>
                    <p class="text-sm  text-center">Muestra información detallada, fotos y opiniones para
                        destacar tu
                        negocio.</p>
                </div>
            </div>
        </section>

        <!-- Función 2: Reserva de Citas -->
        <section class="function-section mb-12 h-4/5 flex flex-col items-center justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                    class="flex max-h-[30rem] max-w-[35rem] flex-col items-center rounded-xl shadow-xl p-4 bg-transparent bg-opacity-95 backdrop-filter backdrop-blur-lg overflow-hidden border-b-[#fadd9f] border-l-[#fadd9f] border-white border-2 border-opacity-40  transition-transform hover-zoom hover:shadow-[#fadd9f]">
                    <img src="img/calendario.jpg" alt="Calendario de Disponibilidad"
                        class="h-[85%] w-[540px] rounded-lg mb-4 animate-fade-in hover:cursor-pointer">
                    <h3 class="text-xl font-bold  mb-2 text-center">Calendario de disponibilidad</h3>
                    <p class="text-sm text-center">Administra tu horario y permite que los clientes reserven fácilmente.
                    </p>
                </div>
                <div
                    class="flex max-h-[30rem] max-w-[35rem] flex-col items-center rounded-xl shadow-xl p-4 bg-transparent bg-opacity-95 backdrop-filter backdrop-blur-lg overflow-hidden border-b-[#fadd9f] border-r-[#fadd9f] border-white border-2 border-opacity-40  transition-transform hover-zoom hover:shadow-[#fadd9f]">
                    <img src="img/reserva.jpg" alt="Reserva en Línea"
                        class="h-[85%] w-[540px] rounded-lg mb-4 animate-fade-in  hover:cursor-pointer">
                    <h3 class="text-xl font-bold mb-2 text-center">Reserva en línea</h3>
                    <p class="text-sm text-center">Permite a tus clientes reservar servicios con solo unos clics.</p>
                </div>
            </div>
        </section>

        <!-- Función 3: Visualización de Diseños y Portafolio -->
        <section class="function-section mb-12 h-4/5 flex flex-col items-center justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                    class="flex max-h-[30rem] max-w-[35rem] p-4 flex-col items-center rounded-xl shadow-xl bg-transparent bg-opacity-95 backdrop-filter backdrop-blur-lg overflow-hidden border-b-[#fadd9f] border-r-[#fadd9f] border-white border-2 border-opacity-40  transition-transform hover-zoom hover:shadow-[#fadd9f]">
                    <img src="img/galeria.jpg" alt="Galería de Diseños"
                        class="h-[85%] w-[540px] rounded-lg mb-4 animate-fade-in hover:cursor-pointer">
                    <h3 class="text-xl font-bold mb-2 text-center">Galería de diseños</h3>
                    <p class="text-sm text-center">Muestra tus mejores trabajos organizados por categorías.</p>
                </div>
                <div
                    class="flex max-h-[30rem] max-w-[35rem] flex-col items-center rounded-xl shadow-xl p-4 bg-transparent bg-opacity-95 backdrop-filter backdrop-blur-lg overflow-hidden border-b-[#fadd9f] border-r-[#fadd9f] border-white border-2 border-opacity-40  transition-transform hover-zoom hover:shadow-[#fadd9f]">
                    <img src="img/portafolio.jpg" alt="Portafolio y Trabajos Anteriores"
                        class="h-[85%] rounded-lg mb-4 animate-fade-in  hover:cursor-pointer">
                    <h3 class="text-xl font-bold mb-2 text-center">Portafolio y trabajos anteriores</h3>
                    <p class="text-sm text-center">Destaca tu experiencia y calidad a través de proyectos pasados.</p>
                </div>
            </div>
        </section>

        <!-- Función 4: Gestión de Clientes -->
        <section class="function-section mb-12 h-4/5 flex flex-col items-center justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                    class="flex max-h-[30rem] max-w-[35rem] flex-col items-center rounded-xl shadow-xl p-4 bg-transparent bg-opacity-95 backdrop-filter backdrop-blur-lg overflow-hidden border-b-[#fadd9f] border-r-[#fadd9f] border-white border-2 border-opacity-40  transition-transform hover-zoom hover:shadow-[#fadd9f]">
                    <img src="/img/historial.webp" alt="Historial de Clientes"
                        class="h-[85%] w-[540px] rounded-lg mb-4 animate-fade-in  hover:cursor-pointer">
                    <h3 class="text-xl font-bold mb-2 text-center">Historial de clientes</h3>
                    <p class="text-sm text-center">Accede a un historial completo de servicios y preferencias de cada
                        cliente.</p>
                </div>
                <div
                    class="flex max-h-[30rem] max-w-[35rem] flex-col items-center rounded-xl shadow-xl p-4 bg-transparent bg-opacity-95 backdrop-filter backdrop-blur-lg overflow-hidden border-b-[#fadd9f] border-r-[#fadd9f] border-white border-2 border-opacity-40  transition-transform hover-zoom hover:shadow-[#fadd9f]">
                    <img src="/img/fidelizacion.jpg" alt="Programa de Fidelización"
                        class="h-[85%] w-[540px] rounded-lg mb-4 animate-fade-in  hover:cursor-pointer">
                    <h3 class="text-xl font-bold mb-2 text-center">Programa de fidelización</h3>
                    <p class="text-sm text-center">Ofrece descuentos y recompensas para clientes recurrentes.</p>
                </div>
            </div>
        </section>

        <!-- Función 5: Comunicación y Notificaciones -->
        <section class="function-section mb-12 h-4/5 flex flex-col items-center justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                    class="flex max-h-[30rem] max-w-[35rem] flex-col items-center rounded-xl shadow-xl p-4 bg-transparent bg-opacity-95 backdrop-filter backdrop-blur-lg overflow-hidden border-b-[#fadd9f] border-r-[#fadd9f] border-white border-2 border-opacity-40  transition-transform hover-zoom hover:shadow-[#fadd9f]">
                    <img src="/img/chat.webp" alt="Chat en Tiempo Real"
                        class="h-[85%] w-[540px] rounded-lg mb-4 animate-fade-in hover:cursor-pointer">
                    <h3 class="text-xl font-bold mb-2 text-center">Chat en tiempo real</h3>
                    <p class="text-sm text-center">Comunícate directamente con tus clientes para consultas rápidas.</p>
                </div>
                <div
                    class="flex max-h-[30rem] max-w-[35rem] flex-col items-center rounded-xl shadow-xl p-4 bg-transparent bg-opacity-95 backdrop-filter backdrop-blur-lg overflow-hidden border-b-[#fadd9f] border-r-[#fadd9f] border-white border-2 border-opacity-40  transition-transform hover-zoom hover:shadow-[#fadd9f]">
                    <img src="/img/notificaciones.avif" alt="Notificaciones Push"
                        class="h-[85%] w-[540px] rounded-lg mb-4 animate-fade-in">
                    <h3 class="text-xl font-bold mb-2 text-center">Notificaciones Push</h3>
                    <p class="text-sm text-center">Envía promociones, ofertas y recordatorios directamente a tus
                        clientes.</p>
                </div>
            </div>
        </section>

        <!-- Función 6: Integraciones de Pago -->
        <section class="function-section mb-12 h-4/5 flex flex-col items-center justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                    class="flex max-h-[30rem] max-w-[35rem] flex-col items-center rounded-xl shadow-xl p-4 bg-transparent bg-opacity-95 backdrop-filter backdrop-blur-lg overflow-hidden border-b-[#fadd9f] border-r-[#fadd9f] border-white border-2 border-opacity-40  transition-transform hover-zoom hover:shadow-[#fadd9f]">
                    <img src="/img/pagos.jpg" alt="Pagos en Línea"
                        class="h-[85%] w-[540px] rounded-lg mb-4 animate-fade-in hover:cursor-pointer">
                    <h3 class="text-xl font-bold mb-2 text-center">Pagos en línea</h3>
                    <p class="text-sm text-center">Ofrece a tus clientes la opción de pagar sus servicios de manera
                        segura en línea.</p>
                </div>
                <div
                    class="flex max-h-[30rem] max-w-[35rem] flex-col items-center rounded-xl shadow-xl p-4 bg-transparent bg-opacity-95 backdrop-filter backdrop-blur-lg overflow-hidden border-b-[#fadd9f] border-r-[#fadd9f] border-white border-2 border-opacity-40  transition-transform hover-zoom hover:shadow-[#fadd9f]">
                    <img src="/img/facturas.jpg" alt="Gestión de Facturación"
                        class="h-[85%] w-[540px] rounded-lg mb-4 animate-fade-in">
                    <h3 class="text-2xl font-bold mb-2 text-center">Gestión de facturación</h3>
                    <p class="text-lg text-center">Emite facturas y gestiona los pagos de manera eficiente.</p>
                </div>
            </div>
        </section>

        <!-- Función 7: Panel de Administración -->
        <section class="function-section mb-12 h-4/5 flex flex-col items-center justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                    class="flex max-h-[30rem] max-w-[35rem] flex-col items-center rounded-xl shadow-xl p-4 bg-transparent bg-opacity-95 backdrop-filter backdrop-blur-lg overflow-hidden border-b-[#fadd9f] border-r-[#fadd9f] border-white border-2 border-opacity-40  transition-transform hover-zoom hover:shadow-[#fadd9f]">
                    <img src="/img/dashboard.jfif" alt="Dashboard del Salón"
                        class="h-[85%] w-[540px] rounded-lg mb-4 animate-fade-in hover:cursor-pointer">
                    <h3 class="text-xl font-bold mb-2 text-center">Dashboard del salón</h3>
                    <p class="text-sm text-center">Accede a estadísticas clave y administra tu salón de manera efectiva.
                    </p>
                </div>
                <div
                    class="flex max-h-[30rem] max-w-[35rem] flex-col items-center rounded-xl shadow-xl p-4 bg-transparent bg-opacity-95 backdrop-filter backdrop-blur-lg overflow-hidden border-b-[#fadd9f] border-r-[#fadd9f] border-white border-2 border-opacity-40  transition-transform hover-zoom hover:shadow-[#fadd9f]">
                    <img src="/img/redesSociales.jpg" alt="Integración con Redes Sociales"
                        class="h-[85%] w-[540px] rounded-lg  mb-4 animate-fade-in hover:cursor-pointer">
                    <h3 class="text-xl font-bold mb-2 text-center">Integración con Redes Sociales</h3>
                    <p class="text-sm text-center">Facilita la compartición de tus perfiles y ofertas en redes sociales.
                    </p>
                </div>
            </div>
        </section>
        <!-- Últimas Reseñas -->
        <section class="h-1/2 flex flex-col items-center justify-center">
            <h2 class="text-3xl font-bold mb-4 text-center">Descubre lo que nuestros clientes dicen</h2>
            <review-list />
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { authToken, setAuthToken } from '../authState';
onMounted(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
            }
        });
    }, {
        threshold: 0.5
    });
    const sections = document.querySelectorAll('.function-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

</script>

<style scoped>
.function-section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.function-section.opacity-100 {
    opacity: 1;
}

.function-section.translate-y-0 {
    transform: translateY(0);
}

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

.transition-transform {
    transition: transform 0.3s ease;
}

.hover-zoom:hover {
    transform: scale(1.05);
}
</style>