<template>
  <div
    class="p-2 md:p-1 lg:w-full flex items-center gap-3 rounded-full group justify-center lg:py-3 cursor-pointer transition-all duration-300 hover:shadow-slate-300 hover:shadow-2xl hover:bg-white"
    :class="fullPath === path ? 'shadow-slate-300 shadow-2xl bg-white' : ''"
  >
    <slot
      :class="`${fullPath !== path && 'text-gray-500'}`"
      :isActive="path === fullPath"
    ></slot>
    <h5
      class="hidden lg:block text-base font-medium transition-all duration-300 group-hover:text-black group-hover:font-normal"
      :class="fullPath !== path && 'text-gray-400 font-normal'"
    >
      {{ title }}
    </h5>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string;
  path?: string | "/";
}
//props
let { title, path } = defineProps<Props>();

//route
let fullPath = useRoute().fullPath;
</script>
