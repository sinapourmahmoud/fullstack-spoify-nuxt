<template>
  <div class="flex flex-col gap-5 mt-14 px-3 md:px-6">
    <CardsMusicCard
      v-for="(favorite, index) in useFavorites"
      :key="index"
      :song="favorite.songs"
      :songList="useFavorites"
    />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

let { getFavorites, useFavorites } = useGet();

onMounted(async () => {
  await getFavorites();
});
</script>
