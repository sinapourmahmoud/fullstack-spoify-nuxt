<template>
  <div class="flex items-center justify-between flex-col md:flex-row gap-3">
    <div class="flex items-center gap-2" v-if="!useUser">
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
      <button @click="logout">logout</button>
    </div>
    <div v-else class="flex items-center gap-3">
      <img
        src="./../assets/placeholder.jpg"
        class="w-12 h-12 rounded-full object-cover"
        alt="profile"
      />
      <p class="text-lg font-medium">
        Have a good time ,
        <span class="text-xl font-semibold">{{
          useUser?.email.split("@")[0]
        }}</span>
      </p>
      <button
        @click="openModal('addSong')"
        class="bg-white rounded-3xl py-2 px-3 shadow-lg text-sm font-medium shadow-slate-300 transition-all duration-300 hover:shadow-sm"
      >
        Add Song
      </button>
    </div>
    <div class="flex-1 flex justify-end">
      <SearchForm class="justify-end" />
    </div>
  </div>
</template>

<script setup lang="ts">
let { toggleModal, modalType } = useModal();
let { useUser } = useAuth();

const user = useSupabaseUser();
const client = useSupabaseAuthClient();

const openModal = (provider: string) => {
  toggleModal.value = true;
  modalType.value = provider;
};

const logout = async () => {
  let { error } = await client.auth.signOut();
  console.log(error);
};
</script>
