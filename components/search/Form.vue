<template>
  <form class="flex items-center gap-3 flex-1" @submit.prevent="handleSubmit">
    <div
      class="h-12 pl-3 flex-1 md:flex-[0.6] rounded-2xl flex items-center bg-white shadow-xl hover:shadow-slate-300 hover:shadow-2xl transition-all duration-300"
    >
      <MagnifyingGlassIcon class="w-5 text-gray-400" />
      <input
        v-model="input"
        type="text"
        class="bg-transparent flex-1 h-full outline-none border-0 p-2 px-3 rounded-2xl font-light"
        placeholder="What do you want"
      />
    </div>
    <button
      type="submit"
      class="h-12 w-12 cursor-pointer bg-white group shadow-xl rounded-2xl flex items-center justify-center hover:shadow-slate-300 hover:shadow-2xl transition-all duration-300"
    >
      <AdjustmentsHorizontalIcon
        class="w-5 transition-all duration-300 text-gray-500 group-hover:text-black"
      />
    </button>
  </form>
</template>

<script setup lang="ts">
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/vue/24/outline";

let input = ref<string>("");

const handleSubmit = () => {
  if (input.value) {
    useRouter().push(`/search/${input.value}`);
  } else {
    useRouter().push(`/search`);
  }
  input.value = "";
};
</script>
