<template>
    <div class="absolute w-24 h-24 rounded-full" :style="{ left: positionX + 'px', bottom: '10px' }"><img
            src="img/nave2.png" alt=""> </div>
</template>

<script>
export default {
    props: ['positionX'],
}
</script>