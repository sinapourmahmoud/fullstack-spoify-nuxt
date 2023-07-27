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
  </div>
</template>

<script setup lang="ts">
let { activeSong, isPlaying } = useSong();

let { getUrl } = useGet();
</script>
