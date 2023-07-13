<template>
  <header class="header">
    <div class="container w-100 header__container">
      <h1 class="logo">
        <router-link to="/">Super store</router-link>
      </h1>
      <router-link to="/cart">Cart</router-link>
    </div>
  </header>
</template>
<script lang="ts">
import {Component, Vue} from "vue-facing-decorator";

@Component
export default class LayoutHeader extends Vue {}
</script>
<style scoped lang="scss">
.logo {
  font-size: 28px;

  a {
    text-decoration: none;
    color: #59ffe0;
    font-style: italic;
    font-weight: 700;
  }
}

.header {
  height: 60px;
  display: flex;
  width: 100%;
  align-items: center;
  box-shadow: 0 1px 6px #59ffe0;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
      color: #59ffe0;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>