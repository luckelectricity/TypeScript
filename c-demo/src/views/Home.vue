<template>
  <div class="home">
    登录成功
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.$http('/v1/book/latest', {}, { method: 'GET' }).then(res => {
      console.log(res)
    })
  }
}
</script>
