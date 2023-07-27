<template>
  <div
    class="flex gap-5 cursor-pointer items-center bg-white transition-all duration-300 rounded-2xl py-4 p-3 shadow-slate-200 shadow-sm hover:shadow-lg"
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

    <PlayButton
      :isPlaying="activeSong?.id === song.id && isPlaying"
      small
      @clicked="handlePlayPause"
    />
  </div>
</template>
<script setup lang="ts">
import { Song } from "types";

interface Props {
  song: Song;
}

let { song } = defineProps<Props>();

let { getUrl } = useGet();
let { selectSong, pauseSong, activeSong, isPlaying, playSong } = useSong();
let { useSongs } = useGet();

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
</script>
