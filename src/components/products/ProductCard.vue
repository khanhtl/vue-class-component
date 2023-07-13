<template>
  <div class="product-card">
    <div class="product-card__img">
      <img :src="product.image" :alt="product.title"/>
    </div>
    <h2 class="product-card__title">
      <router-link :to="productLink">{{ product.title }}</router-link>
    </h2>
    <price :price="product.price" />
    <p class="product-card__description">{{product.description}}</p>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-facing-decorator";
import type {IProduct} from "@/types/product";
import Price from "@/components/products/Price.vue";

@Component({
  components: { Price }
})
export default class ProductCard extends Vue {
  @Prop({ required: true }) readonly product!: IProduct;

  get productLink() {
    return `/products/${this.product.id}`
  }
}
</script>
<style lang="scss" scoped>
.product-card {
  max-width: 220px;
  border-radius: 10px;
  overflow: hidden;

  &__img {
    max-width: 100%;

    img {
      max-width: 100%;
    }
  }

  &__title {
    font-size: 18px;
    color: #fff;

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__description {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.3em;
    height: 3.9em;
  }
}
</style>