export const VERSION = "1.0.0"

const GH = `https://github.com/davinaleong/gracesoft-paperstack/releases/download/v${VERSION}`
const LQ = `https://store.gracesoft.dev/checkout/buy`

export const downloads = {
  core: {
    html:   `${GH}/paperstack-core-html-v${VERSION}.zip`,
    react:  `${GH}/paperstack-core-react-v${VERSION}.zip`,
    vue:    `${GH}/paperstack-core-vue-v${VERSION}.zip`,
    svelte: `${GH}/paperstack-core-svelte-v${VERSION}.zip`,
  },
  pro: {
    html:   `${LQ}/1730296`,
    react:  `${LQ}/1730247`,
    vue:    `${LQ}/1730249`,
    svelte: `${LQ}/1730251`,
  },
}