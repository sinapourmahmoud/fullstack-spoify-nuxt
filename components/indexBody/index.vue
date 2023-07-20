<template>
  <div class="grid grid-cols-6 gap-10">
    <div class="md:col-span-2 col-span-6">
      <h1 class="text-xl font-normal text-gray-700 mb-3">
        <strong class="text-2xl font-medium text-black">Favorite</strong>
        albums
      </h1>

      <div class="flex flex-col gap-4">
        <CardsAlbumCard title="After houres" />
        <CardsAlbumCard title="After houres" />
        <CardsAlbumCard title="After houres" />
      </div>
    </div>
    <div class="md:col-span-4 col-span-6">
      <CardsMusicCard />
    </div>
  </div>
</template>
