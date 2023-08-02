<template>
  <div
    ref="wavesurferMain"
    id="wavesurfer"
    class="w-[20vw] hidden lg:block"
  ></div>
  <div ref="waveTimeline"></div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },

  options: {
    type: Object,
  },
});

const waveSurfer = ref(null);
const wavesurferMain = ref(null);
const waveTimeline = ref(null);

const handleLoadPage = async () => {
  const WaveSurfer = (await import("wavesurfer.js")).default;
  const Timeline = (
    await import("wavesurfer.js/dist/plugin/wavesurfer.timeline")
  ).default;
  let options = props.options;
  let wsOptions = Object.assign(
    {
      container: wavesurferMain.value,
      plugins: [Timeline.create({ container: waveTimeline.value })],
    },
    options
  );

  waveSurfer.value = new WaveSurfer.create(wsOptions);
  waveSurfer.value.load(`${props.src}`);
};

onMounted(async () => {
  await handleLoadPage();
});

watch(
  () => props.src,
  async (newVal) => {
    waveSurfer.value.destroy();

    await handleLoadPage();
  }
);

onUnmounted(() => {
  waveSurfer.value.destroy();
});
defineExpose({
  waveSurfer,
});
</script>

<style lang="css" scoped>
div {
  position: relative;
}
</style>
