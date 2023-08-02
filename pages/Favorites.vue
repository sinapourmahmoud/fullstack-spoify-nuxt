<template>
  <Loading v-show="loading" />
  <div
    class="flex items-center justify-center text-lg font-semibold"
    v-show="!loading || !useFavorites.length"
  >
    no Favorites
  </div>
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
  middleware: function (to, from) {
    const user = useSupabaseUser();
    console.log(user, "user");
    if (!user.value) {
      return navigateTo("/");
    }
  },
});

let { getFavorites, useFavorites } = useGet();

let loading = ref(false);

onMounted(async () => {
  loading.value = true;
  await getFavorites();
  loading.value = false;
});
</script>
