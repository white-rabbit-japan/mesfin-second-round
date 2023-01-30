export default defineNuxtPlugin((nuxtApp) => {
  const link = document.createElement('link')

  link.id = 'typekit'
  link.rel = 'preload'
  link.as = 'style'
  link.href = 'https://use.typekit.net/pku0hda.css'

  link.onload = function () {
    link.onload = null
    link.rel = 'stylesheet'
  }

  document.head.appendChild(link)
})
