<template>
  <div class="products-filter">
    <div class="products-filter__container">
      <app-input v-model="titleValue" placeholder="Product name..."/>
      <app-select
          v-model="categoryValue"
          :options="categoriesOptions"
          @change="onChangeCategory"/>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Prop, VModel, Vue} from "vue-facing-decorator";
import AppInput from "@/components/ui/AppInput.vue";
import type {ISelectOption} from "@/types/components";
import AppSelect from "@/components/ui/AppSelect.vue";

@Component({
  components: {AppSelect, AppInput },
  emits: ['change-category']
})
export default class ProductsFilter extends Vue {
  @VModel({name: 'title'}) titleValue!: string;
  @VModel({name: 'category'}) categoryValue!: string;
  @Prop({ default: [] }) categories!: string[]

  private get categoriesOptions(): ISelectOption[] {
    return [
      {name: 'All', value: 'all'},
      ...this.categories.map(category => ({
      name: category,
      value: category
    }))]
  }

  private onChangeCategory() {
    this.$emit('change-category')
  }
}
</script>
<style lang="scss" scoped>
.products-filter {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  &__container {
    display: flex;
    gap: 20px;
    flex: 0 1 50%;
  }
}
</style>