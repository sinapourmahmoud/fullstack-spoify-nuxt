<template>
  <div>
    <SearchForm class="justify-center" />
    <Loading v-show="loading" class="mt-6" />
    <div class="flex flex-col gap-5 mt-14 px-3 md:px-6" v-show="!loading">
      <CardsMusicCard
        v-for="(song, index) in songs"
        :key="index"
        :song="song"
        :songList="songs"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Song } from "types";

interface Props {
  songs: Song[];
  loading: boolean;
}

let { songs, loading } = defineProps<Props>();
</script>
