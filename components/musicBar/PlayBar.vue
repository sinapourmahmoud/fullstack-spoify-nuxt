<template>
  <div class="flex-[0.4] flex items-center gap-3">
    <div class="flex items-center gap-2">
      <svg
        @click="prevSong(activeSong)"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        class="rotate-180 text-2xl cursor-pointer text-gray-300 transition-all duration-300 hover:text-black"
      >
        <path
          fill="currentColor"
          d="M208 40v176a8 8 0 0 1-16 0v-69.23L72.43 221.55A15.95 15.95 0 0 1 48 208.12V47.88a15.95 15.95 0 0 1 24.43-13.43L192 109.23V40a8 8 0 0 1 16 0Z"
        ></path>
      </svg>
      <PlayButton :isPlaying="isPlaying" @clicked="handlePlayPause" />
      <MusicBarAudioFile />
      <svg
        @click="nextSong(activeSong)"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        class="text-2xl cursor-pointer text-gray-300 transition-all duration-300 hover:text-black"
      >
        <path
          fill="currentColor"
          d="M208 40v176a8 8 0 0 1-16 0v-69.23L72.43 221.55A15.95 15.95 0 0 1 48 208.12V47.88a15.95 15.95 0 0 1 24.43-13.43L192 109.23V40a8 8 0 0 1 16 0Z"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script setup lang="ts">
import { BackwardIcon, ForwardIcon } from "@heroicons/vue/24/solid";

let { isPlaying, pauseSong, playSong, nextSong, prevSong, activeSong } =
  useSong();

const handlePlayPause = () => {
  if (isPlaying.value) {
    pauseSong();
  } else {
    playSong();
  }
};
</script>
