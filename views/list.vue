
<template>
	<div v-show="filteredAndOrderedList.length">
		<ProductCard v-for="item in filteredAndOrderedList" :info="item" :key="item.id"></ProductCard>
	</div>
	<div v-show="!filteredAndOrderedList.length">暂无相关商品</div>
</template>

<script>
  import ProductCard from '../components/productCard';
  export default {
    name: "list",
		components:{
      ProductCard
		},
		mounted(){
      this.$store.dispatch('getProductList')
		}
  }
</script>

<style scoped>

</style>