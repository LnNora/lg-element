
<template>
  <div>
    <steps :count="count" :active="active"></steps>
    <button @click="next">下一步</button>
  </div>
</template>

<script>
import Steps from './Steps.vue'
export default {
  components: {
    Steps
  },
  data () {
    return {
      count: 7,
      active: 0
    }
  },
  methods: {
    next () {
      if (this.active == this.count) return
      this.active++
    }
  }
}
</script>

<style>

</style>