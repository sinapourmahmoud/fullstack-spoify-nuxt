<template>
  <div class="grid grid-cols-4 gap-4">
    <div class="min-h-screen flex flex-col gap-8 col-span-4 md:col-span-3">
      <MainHeader />
      <ArtistsList />
      <IndexBody />
    </div>
    <div class="col-span-4 md:col-span-1 h-full md:py-0 md:static md:top-0">
      <SidebarRight />
    </div>
  </div>
</template>
