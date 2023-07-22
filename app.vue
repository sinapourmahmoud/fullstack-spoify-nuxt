<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  font-family: "Roboto", sans-serif;
}
</style>
<script setup lang="ts">
let { useUser } = useAuth();

const user = useSupabaseUser();
const client = useSupabaseAuthClient();

onMounted(() => {
  client.auth.onAuthStateChange((event, session) => {
    useUser.value = session?.user;
  });
});
</script>
