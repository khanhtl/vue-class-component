<template>
  <div class="product">
    <div class="product__image">
      <img :src="product.image" :alt="product.title">
    </div>
    <div>
      <h2 class="product__title">{{ product.title }}</h2>
      <price :price="product.price" />
      <div class="product__btns">
        <button class="btn add" @click="onAdd">Add more</button>
        <button class="btn remove" @click="onRemove">Remove</button>
      </div>
    </div>
    <div class="product__count">
      <p>Count: {{ count }}</p>
      <p>Total price: <price :price="totalPrice" /></p>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-facing-decorator";
import type {ICartProduct} from "@/types/cart-store";
import Price from "@/components/products/Price.vue";

@Component({
  components: { Price }
})
export default class CartItem extends Vue {
  @Prop({ required: true }) product!: ICartProduct

  get count() {
    return this.product.count
  }

  get totalPrice() {
    return this.product.count * this.product.price
  }

  onAdd() {
    this.$emit('add', this.product)
  }

  onRemove() {
    this.$emit('remove', this.product.id)
  }
}
</script>
<style lang="scss" scoped>
.product {
  display: flex;
  gap: 20px;

  &__image {
    max-width: 120px;

    img {
      max-width: 100%;
    }
  }

  &__title {
    color: white;
  }

  &__count {
    margin-left: auto;
  }

  &__btns {
    display: flex;
    gap: 20px;
    margin-top: 10px;
  }
}

.add {
  background: greenyellow;
}

.remove {
  background: #ff6363;
}
</style>