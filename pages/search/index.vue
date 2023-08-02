<template>
  <div>
    <Search :songs="useSearchResault" :loading="loading" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

let { getSearchResault, useSearchResault } = useGet();

let loading = ref(false);

onMounted(async () => {
  loading.value = true;
  await getSearchResault();
  loading.value = false;
});
</script>
