<template>
  <div class="flex items-center gap-3">
    <audio
      :src="activeSong?.songUrl"
      ref="audioFile"
      @timeupdate="handleTimeUpdate"
      :volume="volume"
      @loadeddata="handleLoad"
    ></audio>
    <input
      type="range"
      :max="maxValue"
      :value="inputValue"
      min="0"
      class="w-[40vw]"
      @change="handleChageInput"
    />
  </div>
</template>
<script setup lang="ts">
let audioFile = ref<HTMLAudioElement>();

let { activeSong, isPlaying, volume, nextSong } = useSong();

let maxValue = ref<number>(0);
let inputValue = ref<number>(0);

watch(
  () => isPlaying.value,
  (newVal: boolean) => {
    if (newVal) {
      audioFile?.value?.play();
    } else {
      audioFile?.value?.pause();
    }
  }
);

const handleTimeUpdate = (e: any) => {
  inputValue.value = e.target.currentTime;
  if (e.target.currentTime >= e.target.duration) {
    nextSong(activeSong);
  }
};

const handleLoad = (e: any) => {
  maxValue.value = e.target.duration;
};

const handleChageInput = (e: any) => {
  audioFile.value!.currentTime = e.target.value;
};
</script>
