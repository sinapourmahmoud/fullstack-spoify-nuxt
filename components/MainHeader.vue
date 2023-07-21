<template>
  <div class="flex items-center justify-between flex-col md:flex-row gap-3">
    <div class="flex items-center gap-2" v-if="false">
      <img
        src="./../assets//placeholder.jpg"
        alt="profile"
        class="w-10 h-10 object-cover rounded-full"
      />
      <h1 class="text-xl font-normal text-gray-700">
        Good Morning ,
        <strong class="text-2xl font-medium text-black">Sina</strong>
      </h1>
    </div>
    <div class="flex items-center gap-2">
      <button
        @click="openModal('register')"
        class="bg-white rounded-3xl py-2 px-3 shadow-lg text-sm font-medium shadow-slate-300 transition-all duration-300 hover:shadow-sm"
      >
        Register
      </button>
      <button
        @click="openModal('login')"
        class="bg-white rounded-3xl py-2 px-3 shadow-lg text-sm font-medium shadow-slate-300 transition-all duration-300 hover:shadow-sm"
      >
        Login
      </button>
    </div>
    <div class="flex-1 flex justify-end">
      <form class="flex items-center gap-3 flex-1 justify-end">
        <div
          class="h-12 pl-3 flex-1 md:flex-[0.6] rounded-2xl flex items-center bg-white shadow-xl hover:shadow-slate-300 hover:shadow-2xl transition-all duration-300"
        >
          <MagnifyingGlassIcon class="w-5 text-gray-400" />
          <input
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/vue/24/outline";

let { toggleModal, modalType } = useModal();

const openModal = (provider: string) => {
  toggleModal.value = true;
  modalType.value = provider;
};
</script>
