<template>
  <div class="flex-[0.7] flex items-center">
    <div class="flex items-center justify-between gap-20">
      <div class="flex items-center gap-2 flex-1">
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
        <!-- <MusicBarAudioFile /> -->
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
      <div class="flex items-center gap-2 justify-end">
        <MusicBarWaveSurfer
          ref="refWaveSurfer"
          :options="waveSurferOption"
          :src="activeUrl"
        />
        <p class="whitespace-nowrap font-medium">{{ totalDuration }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { BackwardIcon, ForwardIcon } from "@heroicons/vue/24/solid";

let { isPlaying, pauseSong, playSong, nextSong, prevSong, activeSong } =
  useSong();

let { useSongs } = useGet();

let src = ref(
  "https://grcenhalnznrwvbggsyc.supabase.co/storage/v1/object/public/songs/public/lki3nll6"
);

const handlePlayPause = () => {
  if (isPlaying.value) {
    pauseSong();
  } else {
    playSong();
  }
};

const waveSurferOption = reactive({
  container: "#wavesurfer",
  height: 60,
  autoScroll: false,
  progressColor: "#147AFF",
  autoScroll: false,
  fillParent: true,
  waveColor: "#E7E7E8",
  cursorColor: "transparent",
  responsive: true,
  barRadius: 5,
  hideScrollbar: true,
  autoScroll: false,
  barWidth: 5,
  barGap: 10,
  mediaControls: false,
  backend: "MediaElement",
  scrollParent: false,
});

const refWaveSurfer = ref(null);

let activeUrl = computed(() => {
  return activeSong.value?.songUrl;
});

watch(
  () => isPlaying.value,
  (newVal) => {
    if (!newVal) {
      refWaveSurfer.value.waveSurfer.pause();
    } else {
      refWaveSurfer.value.waveSurfer.play();
    }
  }
);

let totalDuration = computed(() => {
  let minute = Math.floor(
    +refWaveSurfer.value?.waveSurfer?.backend?.buffer?.duration / 60
  );
  let second = Math.floor(
    +refWaveSurfer.value?.waveSurfer?.backend?.buffer?.duration % 60
  );
  minute = String(minute).padStart(2, "0");
  second = String(second).padStart(2, "0");
  return `${minute} : ${second}`;
});
</script>
