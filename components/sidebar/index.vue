<template>
  <aside class="col-span-1 h-full py-3 md:py-0 static top-0">
    <div class="flex flex-col gap-14 md:px-9">
      <div class="flex items-center justify-center gap-2">
        <div class="w-1 h-2 bg-black rounded-full hidden lg:block"></div>
        <div class="w-1 h-3 bg-black rounded-full hidden lg:block"></div>
        <div class="w-1 h-5 bg-black rounded-full hidden lg:block"></div>
        <h2 class="text-2xl font-bold">Wave .</h2>
      </div>
      <div class="flex flex-col items-center gap-5">
        <SidebarItem title="Hello" :isActive="fullPath === '/'" path="/">
          <HomeIcon
            class="w-5 transition-all duration-300 group-hover:text-black"
            :class="fullPath === '/' ? 'text-black' : 'text-gray-500'"
          />
        </SidebarItem>
        <SidebarItem
          title="Explore"
          :isActive="fullPath === '/search'"
          path="/search"
        >
          <MagnifyingGlassIcon
            class="w-5 transition-all duration-300 group-hover:text-black"
            :class="fullPath === '/search' ? 'text-black' : 'text-gray-500'"
          />
        </SidebarItem>
        <SidebarItem
          title="Favorites"
          :isActive="fullPath === '/favorites'"
          path="/favorites"
        >
          <HeartIcon
            class="w-5 transition-all duration-300 group-hover:text-black"
            :class="fullPath === '/favorites' ? 'text-black' : 'text-gray-500'"
          />
        </SidebarItem>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import {
  HomeIcon,
  MagnifyingGlassIcon,
  HeartIcon,
} from "@heroicons/vue/24/outline";

let fullPath = ref(useRoute().fullPath);

watch(
  () => useRoute().fullPath,
  (newVal) => {
    fullPath.value = newVal;
  }
);
</script>
