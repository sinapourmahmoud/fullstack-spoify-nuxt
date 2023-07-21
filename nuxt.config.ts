// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    "nuxt-headlessui",
    "@formkit/nuxt",
  ],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,300;1,400;1,500&display=swap",
        },
      ],
    },
  },
});
