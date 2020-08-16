<template>
  <div class="login">
    <cube-input v-model="inputData.account" placeholder="请输入email" ></cube-input>
    <cube-input v-model="inputData.pwd" placeholder="请输入password"></cube-input>
    <cube-button @click='register'>Button</cube-button>
  </div>
</template>

<script>
import { setStorage } from '../utils/storage.js'
export default {
  name: 'register',
  data () {
    return {
      inputData: {
        account: '',
        pwd: '',
        type: 101
      }
    }
  },
  methods: {
    register () {
      this.$http('/v1/token', this.inputData).then(res => {
        if (res.code === 200) {
          setStorage('token', res.data.token)
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style>

</style>
