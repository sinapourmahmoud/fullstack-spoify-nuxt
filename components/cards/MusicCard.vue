<template>
  <div
    class="flex gap-5 cursor-pointer items-center bg-white transition-all duration-300 rounded-2xl py-4 p-3 shadow-slate-200 shadow-lg"
  >
    <img
      src="./../../assets/placeholder.jpg"
      class="w-12 h-12 rounded-full object-cover"
      alt="music-cover"
    />
    <div class="flex flex-col gap-0.5 flex-1">
      <small class="text-gray-400 text-sm font-light">This weekend</small>
      <p class="text-xl font-medium">Title</p>
    </div>

    <PlayButton :isPlaying="isPlaying" @clicked="handlePlayPause" small />
  </div>
</template>
<script setup lang="ts">
let isPlaying = ref(false);

const handlePlayPause = () => {
  isPlaying.value = !isPlaying.value;
};
</script>
