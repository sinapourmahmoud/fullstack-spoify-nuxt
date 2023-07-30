<template>
  <div>
    <SearchForm class="justify-center" />
    <div class="flex flex-col gap-5 mt-14 px-3 md:px-6">
      <CardsMusicCard
        v-for="(song, index) in songs"
        :key="index"
        :song="song"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Song } from "types";

interface Props {
  songs: Song[];
}

let { songs } = defineProps<Props>();
console.log(songs);
</script>
