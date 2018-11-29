<template>
    <div class="card">
        <div>
            <span class="weather-main">{{ data.weather[0].main }}</span> 
            <WeatherIcon class="weather-icon" :icon="data.weather[0].icon"/>
        </div>
        {{ new Date(data.dt*1000).toLocaleString() }}
        <hr>
        Current Temperature: {{ data.main.temp }} °C <br>
        Minimum temperature: {{ data.main.temp_min }} °C<br>
        Maximum temperature: {{ data.main.temp_max }} °C
    </div>
</template>

<script>
import WeatherIcon from '@/components/WeatherIcon.vue'
export default {
    components: {
        WeatherIcon
    },
    props: ['data']
}
</script>

<style lang="scss" scoped>
.card {
    margin: 0 auto;
    margin-top: 15px;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #808080;
    width: fit-content;
    width: 290px;
    line-height: 1.75em;

    .weather-icon {
        display: inline;
        vertical-align: top;
        padding-left: 10px;
    }
}
</style>
