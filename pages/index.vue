<template>
  <div class="grid grid-cols-4 gap-4">
    <div class="flex flex-col gap-8 col-span-4 md:col-span-3">
      <MainHeader />
      <ArtistsList />
      <IndexBody />
    </div>
    <div
      class="flex flex-col gap-8 col-span-4 md:col-span-1 h-screen bg-green-500"
    ></div>
  </div>
</template>
<script lang="ts" setup></script>
