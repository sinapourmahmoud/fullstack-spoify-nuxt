<template>
  <button @click="handleclick">logout</button>
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
  client.auth.onAuthStateChange((event: any, session: any) => {
    useUser.value = session?.user;
  });
});
const handleclick = async () => {
  await client.auth.signOut();
};
</script>
