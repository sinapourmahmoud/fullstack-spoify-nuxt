<template>
  <div
    class="rounded-full w-10 h-10 flex items-center justify-center border p-2"
    :class="isPlaying && 'bg-blue-500'"
    @click="$emit('clicked')"
  >
    <PlayIcon class="w-5 text-blue-500" v-show="!isPlaying" />
    <PauseIcon class="w-5 text-white" v-show="isPlaying" />
  </div>
</template>
<script setup lang="ts">
import { PauseIcon, PlayIcon } from "@heroicons/vue/24/solid";

interface Props {
  isPlaying: boolean | false;
}

let { isPlaying } = defineProps<Props>();

let emit = defineEmits<{
  (event: "clicked"): void;
}>();
</script>
