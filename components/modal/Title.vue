<template>
  <div class="flex flex-col gap-3 items-center">
    <h2 class="text-lg font-bold">{{ title }}</h2>
    <p class="tex-sm font-light">{{ subtitle }}</p>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
}
let { subtitle, title } = defineProps<Props>();
</script>
