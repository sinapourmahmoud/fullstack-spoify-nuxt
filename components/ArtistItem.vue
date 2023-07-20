<template>
  <div class="cursor-pointer aspect-square flex items-center flex-col gap-2">
    <img
      :src="image ? image : './../assets/placeholder.jpg'"
      class="w-12 h-w-12 object-cover rounded-full"
      alt="profile"
    />
    <p class="text-gray-500">{{ name }}</p>
  </div>
</template>
<script setup lang="ts">
interface Props {
  name: string;
  image?: string;
}

let { image, name } = defineProps<Props>();
</script>
