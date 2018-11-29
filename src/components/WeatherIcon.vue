<template>
    <div class="icon">
        <!-- https://openweathermap.org/weather-conditions -->
        <i v-if="icon.includes('01')" class="fas fa-sun"></i>
        <i v-if="icon.includes('02')" class="fas fa-cloud-sun"></i>
        <i v-if="icon.includes('03')" class="fas fa-cloud"></i>
        <i v-if="icon.includes('04')" class="fas fa-cloud"></i>
        <i v-if="icon.includes('09')" class="fas fa-cloud-rain"></i>
        <i v-if="icon.includes('10')" class="fas fa-cloud-rain"></i>
        <i v-if="icon.includes('11')" class="fas fa-bolt"></i>
        <i v-if="icon.includes('13')" class="fas fa-snowflake"></i>
        <i v-if="icon.includes('50')" class="fas fa-cloud-rain"></i>
    </div>
</template>

<script>
export default {
    props: ['icon']
}
</script>
