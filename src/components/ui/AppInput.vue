<template>
  <input 
      v-model="model" 
      class="app-input" 
      type="text"  
      :placeholder="placeholder"
  />
</template>
<script lang="ts">
import {Component, Prop, VModel, Vue} from "vue-facing-decorator";

@Component
export default class AppInput extends Vue {
  @VModel() model!: string;
  @Prop({default: ''}) placeholder!: string
}
</script>
<style scoped>
@import url('../../assets/app-input.css');
</style>