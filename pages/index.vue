<template>
  <div class="grid grid-cols-4 gap-4">
    <div class="min-h-screen flex flex-col gap-8 col-span-4 md:col-span-3">
      <IndexHeader />
      <ArtistsList />
      <IndexBody :songs="useSongs" />
    </div>
    <div class="col-span-4 md:col-span-1 h-full md:py-0 md:static md:top-0">
      <SidebarRight />
    </div>
  </div>
</template>
<script setup lang="ts">
let { subscribeSongs, getSongs, useSongs } = useGet();

let client = useSupabaseAuthClient();

definePageMeta({
  layout: "custom",
});

onMounted(async () => {
  await getSongs();

  const songs = client
    .channel("custom-all-channel")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "songs" },
      (provider) => {
        useSongs.value.push({
          created_at: provider.new.created_at,
          id: provider.new.id,
          singer_id: provider.new.singer_id,
          storage_path: provider.new.orage_path,
          title: provider.new.title,
          user_id: provider.new.user_id,
        });
      }
    )
    .subscribe();
  console.log(useSongs.value);
});
</script>
