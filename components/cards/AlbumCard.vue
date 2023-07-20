<template>
  <div
    class="w-full relative aspect-square rounded-2xl transition-all duration-300 hover:shadow-lg cursor-pointer"
  >
    <img
      :src="image ? image : `./../../assets/placeholder.jpg`"
      class="w-full h-full object-cover rounded-2xl"
      alt="poster"
    />
    <div class="absolute bg-white rounded-3xl p-2 left-4 bottom-4">
      <p class="text-sm font-medium">{{ title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  image?: string;
}

let { title, image } = defineProps<Props>();
</script>
