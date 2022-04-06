<template>
  <div class="loader">
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <span>{{ text }}</span>
  </div>
</template>
<script lang="ts">
export default {
  name: "BaseLoader",
  props: {
    text: {
      type: String,
      default: "searching...",
    },
  },
};
</script>
<style scoped lang="scss">
.loader {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;

  img {
    height: auto;
    margin-bottom: 10px;
    max-width: 42px;
  }

  span {
    color: var(--color-font-reverse);
    text-align: center;
  }
}

.lds-ring {
  display: inline-block;
  height: 80px;
  position: relative;
  width: 80px;
}

.lds-ring div {
  animation: lds-ring 1s cubic-bezier(0, 0, 0, 0) infinite;
  border: 8px solid var(--color-logo);
  border-color: var(--color-logo) transparent transparent;
  border-radius: 50%;
  box-sizing: border-box;
  display: block;
  height: 64px;
  margin: 8px;
  position: absolute;
  width: 64px;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.44s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.2s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.14s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
