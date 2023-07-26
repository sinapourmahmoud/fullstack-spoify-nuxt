<template>
  <div class="cursor-pointer flex items-center flex-col gap-2">
    <img
      :src="
        getUrl(option?.image_path, 'profiles')
          ? getUrl(option?.image_path, 'profiles')
          : './../assets/placeholder.jpg'
      "
      class="w-12 h-12 object-cover rounded-full"
      alt="profile"
    />
    <p class="text-gray-500">{{ option?.label }}</p>
  </div>
</template>
<script setup lang="ts">
import { Options } from "types";

interface Props {
  option: Options;
}

let { option } = defineProps<Props>();

let { getUrl } = useGet();
</script>
