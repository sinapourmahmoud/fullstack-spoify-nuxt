<template>
  <div class="md:pt-6 pt-3 grid grid-cols-5 h-screen bg-[#f8f8f8ec] gap-4">
    <Sidebar />
    <div class="col-span-4 h-full overflow-y-auto pr-3 md:pr-0 pb-24">
      <slot />
    </div>
    <MusicBar />
    <Modal>
      <ModalLogin v-if="modalType === 'login'" />
      <ModalRegister v-if="modalType === 'register'" />
      <ModalAddSong v-if="modalType === 'addSong'" />
    </Modal>
  </div>
</template>
<script setup lang="ts">
let { toggleModal, modalType } = useModal();
let { playList } = useSong();
</script>
