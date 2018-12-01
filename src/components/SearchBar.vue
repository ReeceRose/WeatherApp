<template>
	<form class="search-box" @submit.prevent="setLocation">
		<input type="text" :value="currentLocation" class="search-input" placeholder="Enter your location" aria-label="Enter your location">
		<button type="submit" class="search-button" value="Send your location" aria-label="Send your location">
			<i class="fas fa-search"></i>
		</button>
	</form>
</template>

<script>
export default {
	methods: {
		setLocation(event) {
			this.$store.dispatch("setLocation", event.target[0].value)
		}
	},
	computed: {
		currentLocation() {
			return this.$store.getters.getLocation
		}
	}
}
</script>


<style lang="scss" scoped>
@import "@/assets/global.scss";

.search-box {
	width: fit-content;
	background-color: #22292f;
	height: 40px;
	border-radius: 40px;
	padding: 10px;
	margin-top: 15px;
	margin: 5px auto;
	color: #fff;

	&:hover .search-input, &:focus-within .search-input {
		width: 50vw;
		padding: 0 6px;

		@include desktop {
			width: 33vw;
		}
	}

	&:not(:hover) .search-input {
		transition-delay: 1s;
	}

	&:hover .search-button, &:focus-within .search-button {
		background-color: #fff;
	}

	.search-input {
		color: #fff;
		border: none;
		outline: none;
		background: none;
		float: left;
		padding: 0;
		transition-delay: 1s;
		font-size: 16px;
		transition: 0.4s all;
		line-height: 40px;
		width: 0;
		text-align: center;
	}

	.search-button {
		color: color(primaryBlue);
		background: inherit;
		border: none;
		float: right;
		width: 40px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-radius: 50%;
		cursor: pointer;
	}
}

</style>