<template>
  <div
    :class="`${border && `border`} p-4 w-full text-base font-medium ${
      success
        ? 'border-green-700 bg-green-100 text-green-800'
        : 'border-red-700 bg-red-200 text-red-800'
    } rounded-xl`"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  border?: boolean | false;
  success?: boolean | false;
}

let { border, success } = defineProps<Props>();
</script>
