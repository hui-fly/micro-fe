// lazy loading Components
// https://router.vuejs.org/zh/guide/advanced/lazy-loading.html
export default (name, index = false) => () => import(`../views/${name}${index ? '/index' : ''}.vue`)
