<template>
  <div class="md:pr-3">
    <h1 class="text-xl font-normal text-gray-700 mb-3">
      <strong class="text-2xl font-medium text-black">Your</strong>
      friends
    </h1>
    <div class="flex flex-col gap-6">
      <CardsFriend artist="Sina" album="Sinaom" />
      <CardsFriend artist="Sina" album="Sinaom" />
      <CardsFriend artist="Sina" album="Sinaom" />
    </div>
    <div class="w-full mt-9 h-72 relative">
      <img
        src="./../../../assets/background.jpg"
        class="rounded-2xl h-full w-full object-cover"
        alt="background"
      />
      <div
        class="flex flex-col justify-between z-20 inset-0 absolute pt-10 px-6 bg-[rgba(0,0,0,0.02)] rounded-2xl"
      >
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-3xl font-semibold text-white">
              Expand <br />
              Your <br />
              Waves
            </h3>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-6 rounded-3xl bg-white"></div>
            <div class="w-2 h-10 rounded-3xl bg-white"></div>
            <div class="w-2 h-14 rounded-3xl bg-white"></div>
          </div>
        </div>
        <button
          class="bg-white w-full mb-3 rounded-3xl py-3 text-sm font-medium"
        >
          Get premium
        </button>
      </div>
    </div>
  </div>
</template>
