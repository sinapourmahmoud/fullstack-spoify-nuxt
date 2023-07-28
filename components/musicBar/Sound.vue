<template>
  <div class="flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      class="text-3xl text-gray-400"
    >
      <path
        fill="currentColor"
        d="M14 8.83v6.34L11.83 13H9v-2h2.83L14 8.83M16 4l-5 5H7v6h4l5 5V4z"
      ></path>
    </svg>

    <input
      id="default-range"
      type="range"
      value="1"
      min="0"
      max="1"
      step="0.1"
      class="w-[50%] h-1 bg-gray-200 rounded-full appearance-none cursor-pointer"
      @change="handleChange"
    />
  </div>
</template>

<script setup lang="ts">
let { volume } = useSong();

const handleChange = (e: any) => {
  volume.value = +e.target.value;
};
</script>
