<template>
  <section class="countryInfo">
    <h2>{{ data.fullName }}</h2>
    <img
      v-if="data.flag"
      :src="data.flag"
      class="countryInfo__flag"
      alt="country flag"
    />
    <ul class="countryInfo__list">
      <li class="countryInfo__item item">
        <span v-if="data.region" class="item__title">Region: </span>
        <span>{{ data.region }}</span>
      </li>
      <li class="countryInfo__item">
        <span v-if="data.capital" class="item__title">Capital/Capitals: </span>
        <span v-for="capital in data.capital" :key="capital">{{
          capital
        }}</span>
      </li>
      <li class="countryInfo__item">
        <span v-if="data.population" class="item__title">Population: </span>
        <span>{{ data.population }}</span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainCountryInfo",
  props: {
    data: {
      type: Object,
    },
  },
});
</script>

<style scoped lang="scss">
.countryInfo {
  max-width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 36px;
    color: var(--color-font-reverse);
  }
  img {
    width: 50%;
  }
  &__item {
    padding: 20px 0px;
    span {
      font-size: 22px;
      color: var(--color-font-reverse);
    }
    .item__title {
      font-size: 32px;
      color: var(--color-font-reverse);
    }
  }
}
</style>
