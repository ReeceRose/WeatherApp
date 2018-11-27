<template>
    <div class="container">
        <Home/>
    </div>
</template>

<script>
import Home from '@/views/Home.vue'
export default {
    name: 'App',
    components: {
        Home
    },
    beforeMount() {
        this.$store.dispatch('loadLocation')
    }
}
</script>


<style lang="scss">
* {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
}
body {
    color: #22292f;
}
.text-center {
    text-align: center;
}
</style>