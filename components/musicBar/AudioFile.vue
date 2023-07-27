<template>
  <audio
    :src="activeSong?.songUrl"
    ref="audioFile"
    @timeupdate="handleTimeUpdate"
  ></audio>
</template>
<script setup lang="ts">
let audioFile = ref<HTMLAudioElement>();

let { activeSong, isPlaying } = useSong();

watch(
  () => isPlaying.value,
  (newVal: boolean, oldVal: boolean) => {
    if (newVal) {
      audioFile.value.play();
    } else {
      audioFile.value?.pause();
    }
  }
);

const handleTimeUpdate = (e: any) => {
  console.log(e.target);
};
</script>
