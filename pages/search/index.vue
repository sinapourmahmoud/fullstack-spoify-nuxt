<template>
  <div>
    <Search :songs="useSearchResault" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

let { getSearchResault, useSearchResault } = useGet();

onMounted(async () => {
  await getSearchResault();
  console.log(useSearchResault.value);
});
</script>
