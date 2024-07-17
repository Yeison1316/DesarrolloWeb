<template>
    <div class="absolute w-4 h-12" :style="style"><img src="img/projectil.png"></div>
</template>

<script>
export default {
    props: ['positionX', 'positionY'],
    computed: {
        style() {
            return {
                left: `${this.positionX}px`,
                top: `${this.positionY}px`,
            };
        },
    },
}
</script>

<style scoped></style>