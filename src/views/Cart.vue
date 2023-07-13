<template>
  <div class="mt-20 container">
    <h2>Cart</h2>
    <cart-item
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add="onAdd"
        @remove="onRemove"
    />
    <hr class="delimeter" color="#59ffe0" />
    <p class="ml-auto w-fit">Total price: <price :price="totalPrice"/> </p>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-facing-decorator";
import {useCartStore} from "@/stores/cartStore";
import CartItem from "@/components/cart/CartItem.vue";
import type {IProduct} from "@/types/product";
import Price from "@/components/products/Price.vue";
@Component({
  components: { CartItem, Price }
})
export default class Cart extends Vue {
  private store = useCartStore()

  private get products() {
    return this.store.products
  }

  private onAdd(product: IProduct) {
    this.store.addProduct(product)
  }

  private onRemove(id: number) {
    this.store.removeProduct(id)
  }

  private get totalPrice() {
    return this.store.totalCost
  }
}
</script>
<style scoped lang="scss">
.delimeter {
  margin: 5px 0;
}
</style>