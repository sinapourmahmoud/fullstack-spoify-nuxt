<template>
  <div class="flex flex-col gap-3">
    <h1 class="text-xl font-normal text-gray-700">
      <strong class="text-2xl font-medium text-black">Follow</strong>
      artists
    </h1>
    <div class="flex items-center gap-5 flex-wrap">
      <ArtistItem
        v-for="(option, index) in useOptions"
        :key="index"
        :option="option"
      />
      <div
        class="aspect-square flex cursor-pointer flex-col gap-2 items-center"
      >
        <div
          class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center"
        >
          <small class="text-gray-500 text-base">5+</small>
        </div>
        <p class="text-gray-500">More</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let { useOptions } = useGet();
</script>
