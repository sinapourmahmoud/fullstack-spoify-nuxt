<template>
  <div>
    <h2>
      Resault for : <strong>{{ route.params.id }}</strong>
    </h2>
    <Search :songs="useSearchResault" :loadng="loading" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

let loading = ref(false);

let { getSearchResault, useSearchResault } = useGet();

let route = useRoute();

onMounted(async () => {
  loading.value = true;
  await getSearchResault(route.params?.id as string);
  loading.value = false;
});

watch(
  () => useRoute().params,
  async (newVal) => {
    loading.value = true;

    await getSearchResault(newVal?.id as string);
    loading.value = false;
  }
);
</script>
