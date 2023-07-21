<template>
  <div>
    <ModalTitle
      title="Wellcome to Spotify"
      subtitle="Register to your account"
    />
    <div class="my-5">
      <Button title="Login with Google!" type="button" border small>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301c1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
          ></path>
        </svg>
      </Button>
    </div>
    <FormKit type="form" @submit="handleSubmit" :actions="false">
      <Input
        label="Email"
        id="email"
        name="email"
        type="email"
        validation="required|email|length:5,255"
        placeholder="Enter Email"
      />
      <Input
        id="password"
        name="password"
        label="Password"
        type="password"
        validation="required|password|length:5,255"
        placeholder="Enter Password"
      />
      <Button type="submit" title="Login" :disabled="loading" secondry></Button>
    </FormKit>
    <div class="flex flex-col gap-2 mt-3 items-center">
      <a
        href="#"
        @click="modalType = 'login'"
        class="underline text-blue-500 font-normal text-sm"
      >
        Already have a account ? Login</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
let { toggleModal, modalType } = useModal();

let loading = ref(false);

const handleSubmit = (event: any) => {
  console.log(event);
};
</script>
