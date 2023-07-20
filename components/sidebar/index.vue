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
        <SidebarItem title="Hello" path="/" v-slot="slotProps">
          <HomeIcon
            class="w-5 transition-all duration-300 group-hover:text-black"
            :class="slotProps.isActive ? 'text-black' : 'text-gray-500'"
          />
        </SidebarItem>
        <SidebarItem title="Explore" v-slot="slotProps">
          <MagnifyingGlassIcon
            class="w-5 transition-all duration-300 group-hover:text-black"
            :class="slotProps.isActive ? 'text-black' : 'text-gray-500'"
          />
        </SidebarItem>
        <SidebarItem title="Favorites" v-slot="slotProps">
          <HeartIcon
            class="w-5 transition-all duration-300 group-hover:text-black"
            :class="slotProps.isActive ? 'text-black' : 'text-gray-500'"
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
</script>
