<template>
  <div class="container mt-20 mb-20">
    <products-filter
        v-model:title="title"
        v-model:category="category"
        class="mb-20"
        :categories="store.categories"
        @change-category="onChangeCategory"
    />
    <div class="product-list">
      <product-card
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-facing-decorator";
import {useMainStore} from "@/stores/mainStore";
import ProductCard from "@/components/products/ProductCard.vue";
import ProductsFilter from "@/components/products/ProductsFilter.vue";

@Component({
  components: { ProductCard, ProductsFilter }
})
export default class Main extends Vue {
  private store = useMainStore()
  private title = '';
  private category = 'all';

  private async mounted() {
    await this.store.init()
  }

  private get products() {
    return this.store.products
        .filter(product => product.title.toLowerCase().includes(this.title.toLowerCase()))
  }

  private async onChangeCategory() {
    if(this.category === 'all') {
      await this.store.getProducts()
      return
    }
    await this.store.getProductsByCategory(this.category)
  }
}
</script>
<style lang="scss" scoped>
.product-list {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}
</style>