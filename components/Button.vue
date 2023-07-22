<template>
  <button
    @click="$emit('clicked')"
    :type="type"
    :class="`${small ? 'py-2' : 'py-3'} ${
      secondry
        ? 'bg-blue-500 text-white hover:opacity-90'
        : 'bg-white text-blue-500'
    } ${border ? 'border border-blue-500' : 'border-none'} ${
      rounded ? 'rounded-full' : 'rounded-lg'
    } text-sm font-medium transition-all duration-300 disabled:pointer-events-none gap-4 disabled:opacity-70 flex items-center justify-center w-full shadow-md`"
    :disabled="disabled"
  >
    <slot></slot>
    {{ title }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  type: "submit" | "button";
  title: string;
  border?: boolean | false;
  small?: boolean | false;
  secondry: boolean | false;
  rounded?: boolean | false;
  disabled?: boolean | false;
}

let { type, title, border, small, secondry, rounded, disabled } =
  defineProps<Props>();
let emit = defineEmits<{
  (event: "clicked"): void;
}>();
</script>
