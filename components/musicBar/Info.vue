<template>
  <div class="flex items-center gap-5">
    <img
      :src="getUrl(activeSong?.storage_path as string, 'images')"
      class="w-14 h-14 rounded-full object-cover"
      :class="isPlaying && 'animate-spin'"
      alt="song"
    />
    <div class="flex flex-col gap-0.5">
      <h2 class="text-lg font-semibold">{{ activeSong?.title }}</h2>
      <p class="text-gray-500 font-normal text-sm">
        {{ activeSong?.artists?.name }}
      </p>
    </div>
    <HeartIcon
      v-if="useUser"
      @click="handleClick"
      class="w-5 cursor-pointer"
      :class="isFavorite ? 'text-rose-500' : 'text-slate-500'"
    />
  </div>
</template>

<script setup lang="ts">
import { HeartIcon } from "@heroicons/vue/24/solid";
import { Favorites } from "types";

let client = useSupabaseAuthClient();
let { activeSong, isPlaying } = useSong();

let { addFavorites } = useAddItem();
let { useUser } = useAuth();

let { getUrl, useFavorites, getFavorites } = useGet();

onMounted(async () => {
  await getFavorites();

  const favorites = client
    .channel("custom-all-channel")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "favorites" },
      (payload: any) => {
        if (payload?.old) {
          useFavorites.value = useFavorites.value?.filter(
            (item: Favorites) => item.id !== payload.old?.id
          );
        } else {
          useFavorites.value.push({
            ...(payload.new as Favorites),
          });
        }
      }
    )
    .subscribe();
});
let isFavorite = computed(() => {
  return useFavorites.value?.some(
    (item: Favorites) => item.song_id === activeSong.value?.id
  );
});

const handleClick = async () => {
  await addFavorites(activeSong?.value?.id as string);
};
</script>
