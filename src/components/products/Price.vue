<template>
  <span class="price">{{ formattedPrice }}</span>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-facing-decorator";

@Component
export default class Price extends Vue {
  @Prop({ required: true }) price!: number;

  get formattedPrice() {
    return new Intl.NumberFormat('en-US', { currency: 'USD', style: 'currency' }).format(this.price)
  }
}
</script>
<style lang="scss" scoped>
.price {
  color: cornflowerblue;
}
</style>