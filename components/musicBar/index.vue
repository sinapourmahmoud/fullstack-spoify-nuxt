<template>
  <div
    class="fixed inset-x-0 min-h-fit bottom-0 bg-white z-50 px-5 py-4 flex items-center justify-between transition-all duration-300"
    :class="playList.length > 0 ? 'translate-y-0' : 'translate-y-[100%]'"
  >
    <MusicBarInfo />
    <MusicBarPlayBar />
    <MusicBarSound />
  </div>
</template>

<script setup lang="ts">
let { playList } = useSong();
</script>
