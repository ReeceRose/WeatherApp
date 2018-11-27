<template>
    <div class="home">
        <h1 class="text-center white title">Weather App</h1>
        <h4 class="text-center white description">Simply enter your location below to get started</h4>
        <SearchBar/>
        <div class="container">
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        </div>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
export default {
    name: 'Home',
    components: {
        SearchBar
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";

.title {
    font-size: 4em;
    font-weight: 900 !important;
    margin-top: 20px;
    margin-bottom: 10px;
}
.description {
    margin-bottom: 40px;
}
.container {
    margin: 25px auto;
    background-color: #fff;
    width: 85vw;
}
</style>
