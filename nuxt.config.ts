// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app : {
    head : {
      title : 'Nuxt Testing',
      meta : [
        {
          name : 'description',
          content : 'Testing the nuxt 3'
        }
      ],
      link : [
        {
          rel : 'stylesheet',
          href : 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    }
  }
})
