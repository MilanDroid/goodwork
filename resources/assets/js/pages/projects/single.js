import './../../bootstrap'
import componentMixin from './../commonComponent'
import single from './../../components/projects/single.vue'

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  mixins: [componentMixin],
  components: {
    single
  }
})
