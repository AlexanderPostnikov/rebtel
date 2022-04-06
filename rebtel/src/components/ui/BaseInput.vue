<template>
  <div ref="input-wrap" :class="['base-input', theme]">
    <input
      ref="input"
      v-bind="attrs"
      :value="modelValue"
      class="base-input__input"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <svg
      class="base-input__svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 28 28"
      width="28px"
      height="28px"
    >
      <g id="surface39639814">
        <path
          style="
            stroke: none;
            fill-rule: nonzero;
            fill: rgb(100%, 100%, 100%);
            fill-opacity: 1;
          "
          d="M 13 3 C 7.488281 3 3 7.488281 3 13 C 3 18.511719 7.488281 23 13 23 C 15.398438 23 17.597656 22.148438 19.324219 20.734375 L 25.292969 26.707031 C 25.542969 26.96875 25.917969 27.074219 26.265625 26.980469 C 26.617188 26.890625 26.890625 26.617188 26.980469 26.265625 C 27.074219 25.917969 26.96875 25.542969 26.707031 25.292969 L 20.734375 19.320312 C 22.148438 17.597656 23 15.398438 23 13 C 23 7.488281 18.511719 3 13 3 Z M 13 5 C 17.429688 5 21 8.570312 21 13 C 21 17.429688 17.429688 21 13 21 C 8.570312 21 5 17.429688 5 13 C 5 8.570312 8.570312 5 13 5 Z M 13 5 "
        />
      </g>
    </svg>
    <div
      v-if="label"
      :class="['base-input__label', { 'has-value': modelValue }]"
    >
      <span>{{ label }}</span>
    </div>
    <div v-if="isError" class="base-input__error">
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseInput",
  inheritAttrs: false,

  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    isError: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: "",
    },
    theme: {
      type: String,
      default: "base",
    },
  },
  emits: {
    "update:modelValue"(payload: string | number) {
      return payload;
    },
  },

  computed: {
    attrs(): { [x: string]: unknown } {
      const { input, ...attrs } = this.$attrs;
      return attrs;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/input";

.border {
  border: 2px solid var(--color-brand-light);
  width: 100%;
}

.invalid {
  color: var(--color-danger-dark);
}
</style>
