<template>
  <div class="main">
    <MainHeader />
    <div class="input-block">
      <BaseInput v-model="choisenCountry" @keyup.enter="fetchData" />
    </div>
    <BaseLoader v-if="isFetching" />
    <MainCountryInfo :data="countryInfo" />
  </div>
</template>

<script lang="ts">
//VUE
import { defineComponent } from "vue";
//Components
import MainHeader from "@/components/app/main/MainHeader.vue";
import BaseLoader from "@/components/ui/BaseLoader.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
import MainCountryInfo from "@/components/app/main/MainCountryInfo.vue";
//API
import api from "@/api/fetch";

interface IData {
  choisenCountry: string;
  isFetching: boolean;
  flag: string;
  countryInfo: {
    fullName?: string;
    capital?: string;
    currency?: string;
    region?: string;
    population?: number;
    flag?: string;
    cca2?: string;
    name?: { official: string };
  };
}

export default defineComponent({
  name: "MainPage",
  data: (): IData => ({
    choisenCountry: "",
    isFetching: false,
    flag: "",
    countryInfo: {},
  }),
  methods: {
    async fetchData() {
      // as futher option, transfer the fetch to store so the data could be distributed to different routes
      this.isFetching = true;
      if (!this.choisenCountry) {
        alert("please fill the country name");
      } else {
        this.isFetching = true;
        // https://restcountries.com is used instead of https://restcountries.eu because it's blocked in Russia

        const res = await api<Array<IData["countryInfo"]>>(
          `https://restcountries.com/v3.1/name/${this.choisenCountry}`,
          null,
          "GET",
          {}
        );
        this.isFetching = false;
        console.log(res[0]);
        const { cca2, capital, name, region, population } = res[0];
        const flagISO = cca2?.toLowerCase();
        this.countryInfo = {
          fullName: name?.official,
          capital,
          region,
          population: population,
          flag: `https://raw.githubusercontent.com/hampusborgos/country-flags/main/png100px/${flagISO}.png`,
        };
        console.log(this.countryInfo);
      }
    },
  },
  components: {
    MainHeader,
    BaseLoader,
    BaseInput,
    MainCountryInfo,
  },
});
</script>
<style>
.input-block {
  padding: 20px;
  display: flex;
  justify-content: center;
}
</style>
