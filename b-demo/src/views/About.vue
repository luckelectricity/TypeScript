<template>
  <div class="about">
    <h1>This is an about page</h1>
    <VEmojiPicker @select="selectEmoji" />
  </div>
</template>
<script>
import VEmojiPicker from 'v-emoji-picker'

export default {
  name: 'Demo',
  components: {
    VEmojiPicker
  },
  data: () => ({}),
  methods: {
    selectEmoji  (emoji) {
      console.log(emoji)
    }
  }
}
</script>
