<template>
  <layout-header/>
  <router-view/>
</template>

<script lang="ts">
import {Component, Vue} from "vue-facing-decorator";
import LayoutHeader from "@/components/layout/LayoutHeader.vue";

@Component({
  components: { LayoutHeader }
})
export default class App extends Vue {}
</script>

