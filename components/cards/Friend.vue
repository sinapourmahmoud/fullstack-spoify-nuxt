<template>
  <div class="flex items-center gap-3">
    <img
      :src="image ? image : `./../../assets/placeholder.jpg`"
      class="w-12 h-12 rounded-full object-cover"
      alt="profile"
    />
    <div class="flex flex-col gap-2 flex-1">
      <div class="flex items-center gap-2 w-full">
        <div
          class="w-5 h-5 p-1 flex items-center justify-center border rounded-full border-gray-500 cursor-pointer"
        >
          <PlayIcon class="w-2" v-show="!isPlaying" />
          <PauseIcon class="w-2" v-show="isPlaying" />
        </div>
        <p class="text-sm font-light">{{ artist }}</p>
        <div class="w-1 h-1 bg-black rounded-full"></div>
        <p class="text-sm font-medium">{{ album }}</p>
      </div>
      <div class="w-[80%] h-1 rounded-md relative cursor-pointer bg-slate-200">
        <div
          class="relative w-[30%] h-full z-10 inset-0 bg-gradient-to-r from-slate-500 to-slate-200 rounded-md"
        >
          <Bars3Icon
            class="absolute right-0 top-[50%] w-3 bg-transparent -translate-y-[50%] rotate-90 cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PlayIcon, Bars3Icon, PauseIcon } from "@heroicons/vue/24/outline";
interface Props {
  artist: string;
  album: string;
  image: string;
  isPlaying: boolean | false;
}

let { album, artist, image } = defineProps<Props>();
</script>
