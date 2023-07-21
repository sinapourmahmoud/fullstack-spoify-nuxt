<template>
  <div
    class="rounded-full flex items-center justify-center border p-2 cursor-pointer"
    :class="`${isPlaying && 'bg-blue-500'} ${
      small ? 'w-10 h-10' : 'w-12 h-12'
    }`"
    @click="$emit('clicked')"
  >
    <PlayIcon
      class="text-blue-500"
      v-show="!isPlaying"
      :class="small ? 'w-5' : 'w-7'"
    />
    <PauseIcon
      class="text-white"
      v-show="isPlaying"
      :class="small ? 'w-5' : 'w-7'"
    />
  </div>
</template>
<script setup lang="ts">
import { PauseIcon, PlayIcon } from "@heroicons/vue/24/solid";

interface Props {
  isPlaying?: boolean | false;
  small?: boolean | false;
}

let { isPlaying, small } = defineProps<Props>();

let emit = defineEmits<{
  (event: "clicked"): void;
}>();
</script>
