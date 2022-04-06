<template>
  <header class="header">
    <div class="header__container">
      <h1 class="header__title">Country info app</h1>
      <p class="header__text">please enter the country name to get info</p>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainHeader",
});
</script>

<style scoped lang="scss">
.header {
  padding: 100px 0px;
  background: no-repeat center url("@/assets/img/bg-free-img.jpg");
  position: relative;
  &__container {
    padding: 50px;
    margin: 0 auto;
    text-align: center;
  }
  &__title {
    color: var(--color-font-reverse);
    font-size: 26px;
    line-break: 30px;
  }
  &__text {
    color: var(--color-font-reverse);
    font-size: 14px;
    line-break: 1.5;
  }
}
</style>
