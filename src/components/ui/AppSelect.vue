<template>
  <select
      v-model="model"
      class="app-input"
      @change="$emit('change')"
  >
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>
<script lang="ts">
import {Component, Prop, VModel, Vue} from "vue-facing-decorator";
import type {ISelectOption} from "@/types/components";

@Component({
  emits: ['change']
})
export default class AppSelect extends Vue {
  @VModel() model!: string;
  @Prop({ required: true }) options!: ISelectOption[];
}
</script>
<style scoped>
@import url('../../assets/app-input.css');
</style>