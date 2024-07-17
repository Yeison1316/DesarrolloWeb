<template>
    <div class="absolute w-24 h-24 rounded-full" :style="style"> <img src="img/asteroide.png" alt=""></div>
</template>

<script>
export default {
    props: ['positionX', 'positionY'],
    computed: {
        style() {
            return {
                left: this.positionX + 'px',
                top: this.positionY + 'px',
            };
        },
    },
}
</script>