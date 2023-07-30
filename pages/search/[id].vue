<template>
  <div>
    <h2>
      Resault for : <strong>{{ route.params.id }}</strong>
    </h2>
    <Search :songs="useSearchResault" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

let { getSearchResault, useSearchResault } = useGet();

let route = useRoute();

onMounted(async () => {
  await getSearchResault(route.params?.id as string);
  console.log(useSearchResault.value);
});

watch(
  () => useRoute().params,
  async (newVal) => {
    await getSearchResault(newVal?.id as string);
    console.log(useSearchResault.value);
  }
);
</script>
