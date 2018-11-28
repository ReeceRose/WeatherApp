<template>
    <div class="home">
        <h1 class="text-center title">Weather App</h1>
        <h4 class="text-center description">Simply enter your location below to get started (Canada only)</h4>
        <SearchBar/>
        <div class="weather-container">
            <h1 class="text-center location-weather">{{ currentLocation }} Weather</h1>
            <p class="text-center error" v-if="error">Unfortunately the weather cannot be loaded</p>
        </div>
    </div>
</template>

<script>
import axios from '@/axios.js'
import keys from '@/assets/keys.json'

import SearchBar from '@/components/SearchBar.vue'

export default {
    name: 'Home',
    data() {
        return {
            json:'',
            error: ''
        }
    },
    methods: {
        getWeather(location) {
            axios
                .get(`weather?q=${location},ca&units=metric&APPID=${keys.weatherApi}`)
                .then(response => {
                    // reset any previous errors
                    this.error = ''
                    // set json
                    this.json = response.data
                    console.log(response.data);
                })
                .catch(error => {
                    this.error = error;
                });
        }
    },
    components: {
        SearchBar
    },
    computed: {
        currentLocation() {
            const location = this.$store.getters.getLocation
            this.getWeather(location)
			return location
        }
    },
    // beforeMount() {
    //     this.getWeather(this.currentLocation)
    // }
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

.weather-container {
    display: grid;
    margin-top: 40px;

    .location-weather {
        grid-template-columns: 1fr;
    }

    .error {
        color: rgb(255, 0, 0);
    }
}
</style>
