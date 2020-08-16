<template>
  <div class="register">
    <cube-input v-model="inputData.email" placeholder="请输入email" ></cube-input>
    <cube-input v-model="inputData.nickname" placeholder="请输入nickname"></cube-input>
    <cube-input v-model="inputData.password" placeholder="请输入password"></cube-input>
    <cube-input v-model="inputData.confirm_password" placeholder="请再次输入password"></cube-input>
    <cube-button @click='register'>Button</cube-button>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      inputData: {
        email: '',
        nickname: '',
        password: '',
        confirm_password: ''
      }
    }
  },
  methods: {
    register () {
      this.$http('/v1/user/register', this.inputData).then(res => {
        if (res.code === 200) {
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>

<style>

</style>
