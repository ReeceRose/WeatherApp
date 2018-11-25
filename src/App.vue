<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {
        
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
}
</style>