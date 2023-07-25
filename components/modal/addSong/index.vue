<template>
  <div
    :aria-disabled="loading"
    :class="loading && 'pointer-events-none opacity-75'"
  >
    <ModalTitle title="Add a song" subtitle="Upload an MP3 player file" />
    <div class="my-5"></div>
    <FormKit type="form" @submit="handleSubmit" :actions="false">
      <Input
        label="Name"
        id="name"
        name="name"
        type="text"
        validation="required|text|length:5,255"
        placeholder="Enter Name"
      />
      <SelectInput
        v-if="!checkbox"
        label="Find Artist"
        placeholder="Choose a singer"
        :options="useOptions"
        name="artistSelect"
        :disabled="checkbox"
      />
      <div class="mb-5">
        <input type="checkbox" id="checkbox" v-model="checkbox" />
        <label for="checkbox" class="ml-2">Dont find your artist?</label>
      </div>
      <Input
        :disabled="!checkbox"
        label="Add artist"
        id="artist"
        name="artist"
        type="text"
        :validation="
          !checkbox ? 'text|length:5,255' : 'required|text|length:5,255'
        "
        placeholder="Enter Artist"
      />
      <ProjectFile
        accept=".png,.jpg"
        label="Artist image"
        id="artist-image"
        @changed="handleChangeArtistImage"
        :disabled="!checkbox"
        :error="artistImageError"
      />
      <ProjectFile
        accept=".mp3"
        label="Audio"
        id="audio"
        @changed="handleChangeAudio"
        :disabled="false"
        :error="audioError"
      />
      <ProjectFile
        accept=".png,.jpg"
        label="Image"
        id="image"
        @changed="handleChangeImage"
        :disabled="false"
        :error="imageError"
      />
      <Button
        type="submit"
        title="Add song"
        :disabled="loading"
        secondry
      ></Button>
    </FormKit>
  </div>
</template>

<script setup lang="ts">
let client = useSupabaseAuthClient();

let { toggleModal, modalType } = useModal();
let { loginGoogle, register } = useAuth();

let { submitSong } = useAddItem();
let { getArtists, useOptions } = useGet();

onMounted(async () => {
  await getArtists();
});

let loading = ref(false);
let audio = ref("");
let image = ref("");
let artistImage = ref("");
let checkbox = ref(false);

let audioError = ref(false);
let imageError = ref(false);
let artistImageError = ref(false);

const handleSubmit = async (event: any) => {
  if (!image.value) {
    imageError.value = true;
  } else {
    imageError.value = false;
  }
  if (!audio.value) {
    audioError.value = true;
  } else {
    audioError.value = false;
  }
  if (!artistImage.value && !checkbox) {
    artistImageError.value = true;
  } else {
    artistImageError.value = false;
  }

  loading.value = true;
  try {
    await submitSong({
      image: image.value,
      audio: audio.value,
      artistImage: artistImage.value,
      artist: event.artist,
      artistSelect: event?.artistSelect,
      name: event.name,
    });
    loading.value = false;
    toggleModal.value = false;
  } catch (err: any) {}
};

const handleChangeAudio = (e: any) => {
  audio.value = e.target.files[0];
};
const handleChangeImage = async (e: any) => {
  image.value = e.target.files[0];
};

const handleChangeArtistImage = (e: any) => {
  artistImage.value = e.target.files[0];
};
</script>
