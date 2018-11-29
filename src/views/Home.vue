<template>
    <div class="home">
        <h1 class="text-center title">Weather App</h1>
        <h4 class="text-center description">Simply enter your location below to get started (Canada only)</h4>
        <SearchBar/>
        <div class="weather-container">
            <h1 class="text-center location-weather">Current Weather in {{ currentLocation }}</h1>
            <p class="text-center error" v-if="error">Unfortunately the weather cannot be loaded</p>
            <div v-if="weatherData && !error">
                <div class="weather-header text-center">
                    <span class="weather-main">{{ weatherData.weather[0].main }}</span> 
                    <WeatherIcon class="weather-icon" :icon="weatherData.weather[0].icon"/>
                </div>
                <div class="weather-current text-center">
                    <div class="card">
                        Current temperature: {{ weatherData.main.temp }} °C<br>
                        Minimum temperature: {{ weatherData.main.temp_min }} °C<br>
                        Maximum temperature: {{ weatherData.main.temp_max }} °C
                    </div>
                    <div class="card">
                        Current pressure: {{ weatherData.main.pressure /10}} kPa<br>
                        Current humidity: {{ weatherData.main.humidity }}%<br>
                        Current wind speed: {{ weatherData.wind.speed }} KM/H
                    </div>
                </div>
                <p class="text-center error" v-if="forecastError">Unfortunately the forecast could not be loaded</p>
                <div class="text-center weather-forecast" v-if="forecastData && !error">
                    <h3 class="forecast-title">Forecasted weather in {{ currentLocation }}</h3>
                    <div class="forecast-cards">
                        <span v-for="index in 9" :key="index" class="">
                            <Card 
                                :data="forecastData.list[index]"
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '@/axios.js'
import keys from '@/assets/keys.json'

import SearchBar from '@/components/SearchBar.vue'
import WeatherIcon from '@/components/WeatherIcon.vue'
import Card from '@/components/Card.vue'

export default {
    name: 'Home',
    components: {
        SearchBar,
        WeatherIcon,
        Card
    },
    data() {
        return {
            weatherData: '',
            forecastData:'',
            forecastError:'',
            error: ''
        }
    },
    methods: {
        getWeather(location) {
            axios
                .get(`weather?q=${location},ca&units=metric&APPID=${keys.weatherApi}`)
                .then(response => {
                    // reset any previous errors
                    this.error = '';
                    this.weatherData = response.data;
                })
                .catch(error => {
                    this.error = error;
                });
        },
        getForecast(location) {
            axios
                .get(`forecast?q=${location},ca&units=metric&APPID=${keys.weatherApi}`)
                .then(response => {
                    this.forecastError = '';
                    this.forecastData = response.data;
                }).catch(error => {
                    this.forecastError = error;
                });
        }
    },
    computed: {
        currentLocation() {
            const location = this.$store.getters.getLocation;
            this.getWeather(location);
            this.getForecast(location);
            return this.$store.getters.getLocation;
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/global.scss";
.error {
    color: rgb(255, 0, 0);
}
.home {
    .title {
        font-size: 4em;
        font-weight: 900 !important;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .description {
        margin-bottom: 40px;
    }
}

.weather-container {
    display: grid;
    margin-top: 40px;

    .location-weather {
        grid-template-columns: 1fr;
    }
}

.weather-header {
    margin: 15px;
    .weather-main {
        font-size: 30px;
        padding-right: 10px;
    }

    .weather-description {
        font-size: 15px;
    }

    .weather-icon {
        display: inline;
        vertical-align: top;
    }
}

.weather-current {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 !important;
    max-width: 625px;
    margin: 15px auto;

    .card {
        margin: 0 auto;
        margin-top: 15px;
        padding: 15px;
        border-radius: 5px;
        border: 1px solid #808080;
        width: 250px;
        line-height: 1.75em;
    }


    @include mobile {
        grid-template-columns: 1fr;
        grid-row-gap: 15px
    }
}

.weather-forecast {
    .forecast-cards {
        display: grid;
        margin-bottom: 15px;

        @include mobile {
            grid-template-columns: 1fr;
        }
        @include tablet {
            grid-template-columns: repeat(2, 1fr);
        }
        @include desktop {
            grid-template-columns: repeat(3, 1fr);
        }
    }
}
</style>
