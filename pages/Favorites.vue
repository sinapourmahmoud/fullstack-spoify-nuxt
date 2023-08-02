<template>
  <Loading v-show="loading" />
  <div class="flex flex-col gap-5 mt-14 px-3 md:px-6" v-show="!loading">
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

let loading = ref(false);

onMounted(async () => {
  loading.value = true;
  await getFavorites();
  loading.value = false;
});
</script>
