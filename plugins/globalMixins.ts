import globalMixin from '~/mixins/global'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin(globalMixin)
})