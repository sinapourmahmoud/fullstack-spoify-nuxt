<template>
  <NuxtLink
    to="/favorites"
    class="w-full relative aspect-square rounded-2xl transition-all duration-300 hover:shadow-lg cursor-pointer"
  >
    <img
      :src="
        useUser
          ? getUrl(song?.storage_path, 'images')
          : '/assets/samuel-ramos-YfsyWcoI9Ko-unsplash.jpg'
      "
      class="w-full h-full object-cover rounded-2xl"
      alt="poster"
    />
    <div class="absolute bg-white rounded-3xl p-2 left-4 bottom-4">
      <p class="text-sm font-medium">
        {{ useUser ? song?.title : "favorites" }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { Song } from "types";

interface Props {
  song: Song;
}

let { getUrl } = useGet();
let { useUser } = useAuth();

let { song } = defineProps<Props>();
</script>
