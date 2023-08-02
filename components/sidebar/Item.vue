<template>
  <NuxtLink
    @click="emit('clicked')"
    :to="path"
    class="p-2 md:p-1 lg:w-full flex items-center gap-3 rounded-full group justify-center lg:py-3 cursor-pointer transition-all duration-300 hover:shadow-slate-300 hover:shadow-2xl hover:bg-white"
    :class="isActive ? 'shadow-slate-300 shadow-2xl bg-white' : ''"
  >
    <slot :class="`${!isActive && 'text-gray-500'}`"></slot>
    <h5
      class="hidden lg:block text-base font-medium transition-all duration-300 group-hover:text-black group-hover:font-normal"
      :class="!isActive && 'text-gray-400 font-normal'"
    >
      {{ title }}
    </h5>
  </NuxtLink>
</template>
<script setup lang="ts">
interface Props {
  title: string;
  isActive?: boolean;
  path?: string;
}
//props
let { title, isActive, path } = defineProps<Props>();
let emit = defineEmits<{
  (event: "clicked"): void;
}>();

//route
</script>
