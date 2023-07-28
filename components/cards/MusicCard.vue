<template>
  <div
    class="flex gap-3 cursor-pointer items-center bg-white transition-all duration-300 rounded-2xl py-4 p-3 shadow-slate-200 shadow-sm hover:shadow-lg"
  >
    <img
      :src="getUrl(song?.storage_path, 'images')"
      class="w-12 h-12 rounded-full object-cover"
      alt="music-cover"
    />
    <div class="flex flex-col gap-0.5 flex-1">
      <small class="text-gray-400 text-sm font-light">{{
        song.artists.name
      }}</small>
      <p class="text-xl font-medium">{{ song?.title }}</p>
    </div>

    <HeartIcon
      class="w-5"
      @click.capture="handleClick"
      :class="isFavorite ? 'text-rose-400' : 'text-slate-500'"
    />
    <PlayButton
      :isPlaying="activeSong?.id === song.id && isPlaying"
      small
      @clicked="handlePlayPause"
    />
  </div>
</template>
<script setup lang="ts">
import { HeartIcon } from "@heroicons/vue/24/solid";

import { Favorites, Song } from "types";

interface Props {
  song: Song;
}

let { song } = defineProps<Props>();

let { getUrl } = useGet();
let { selectSong, pauseSong, activeSong, isPlaying, playSong } = useSong();

let { addFavorites } = useAddItem();

let { useSongs, getFavorites, useFavorites } = useGet();

let client = useSupabaseAuthClient();

onMounted(async () => {
  await getFavorites();

  const favorites = client
    .channel("custom-all-channel")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "favorites" },
      (payload) => {
        if (payload?.old) {
          useFavorites.value = useFavorites.value.filter(
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

const handlePlayPause = () => {
  if (activeSong?.value?.id === song.id && isPlaying.value) {
    pauseSong();
  } else if (activeSong?.value?.id === song.id && isPlaying.value) {
    playSong();
  } else {
    selectSong(useSongs.value, {
      ...song,
      songUrl: getUrl(song.storage_path, "songs"),
    });
  }
};

const handleClick = async () => {
  await addFavorites(song?.id);
};

let isFavorite = computed(() => {
  return useFavorites.value.some((item: Favorites) => item.song_id === song.id);
});
</script>
