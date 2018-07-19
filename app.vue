<template>
	<div>
		<div class="header">
			<router-link
				to="/list"
				class="header-title"
			>
				router-link-to-list
			</router-link>
			<div class="header-menu">
				<router-link to="/cart" class="header-menu-cart">
					购物车
					<span v-if="cartList.length">{{cartList.length}}</span>
				</router-link>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
  export default {
    name: "app",
		computed:{
      cartList() {
        console.log('computed cartList run ');
        return this.$store.state.cartList;
      }
		}
  }
</script>

<style scoped>

</style>