<template>
  <div>
    <button @click="play">play</button>
    <button @click="pause">pause</button>
    <MusicBarWaveSurfer
      ref="refWaveSurfer"
      :src="`/demo.wav`"
      peaks-data="/demo.json"
      :options="waveSurferOption"
    />
  </div>
</template>
<script setup lang="ts">
const refWaveSurfer = ref(null);

const waveSurferOption = {
  height: 340,
  progressColor: "#e03639",
  waveColor: "#e7e7e7",
  cursorColor: "#FFDDDD",
  barWidth: 2,
  mediaControls: false,
  scrollParent: true,
  xhr: {
    mode: "no-cors",
  },
};
function play() {
  refWaveSurfer?.value.waveSurfer?.play();
}

function pause() {
  refWaveSurfer?.value.waveSurfer?.pause();
}
</script>
