<template>
	<form class="search-box" @submit.prevent="setLocation">
		<input type="text" v-model="location" class="search-input" placeholder="Enter your location">
		<button type="submit" class="search-button">
			<i class="fas fa-search"></i>
		</button>
	</form>
</template>

<script>
export default {
    data() {
        return {
            location: ''
        }
    },
    methods: {
        setLocation() {
			this.$store.dispatch('setLocation', this.location)
		}
	},
	beforeMount() {
		this.location = this.$store.getters.getLocation
	}
}
</script>


<style lang="scss" scoped>
.search-box {
	width: fit-content;
	background-color: #2f3640;
	height: 40px;
	border-radius: 40px;
	padding: 10px;

	&:hover .search-input {
		width: 240px;
		padding: 0 6px;
	}

	&:hover .search-button {
		background-color: #fff;
	}

	.search-input {
		border: none;
		outline: none;
		background: none;
		float: left;
		padding: 0;
		color: #fff;
		font-size: 16px;
		transition: 0.4s all;
		line-height: 40px;
		width: 0;
	}

	.search-button {
		color: #1abc9c;
		background: inherit;
		border: none;
		float: right;
		width: 40px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-radius: 50%;
	}
}

</style>