<template>
  <div class="home">
    <cube-popup
      type="my-popup"
      content="<i>My Popup Content 3</i>"
      ref="myPopup3" />
    <cube-button @click="showPopup('myPopup3')">
      Show Popup - with content
    </cube-button>
    <div class="img-bg">
      <p class="p-bg">
        图片列表：鼠标移入/移出改变图片透明度倒计时时钟星级评分系统用键盘控制DIV仿腾讯微博效果移动效果（按轨迹移动）iPhone手机解锁效果仿苹果电脑任务栏菜单自动轮播广告（面向对象版）面试题-动态生成表格眼镜在线试戴酒店价格中心-Demo图片列表：鼠标移入/移出改变图片透明度倒计时时钟星级评分系统用键盘控制DIV仿腾讯微博效果移动效果（按轨迹移动）iPhone手机解锁效果仿苹果电脑任务栏菜单自动轮播广告（面向对象版）面试题-动态生成表格眼镜在线试戴酒店价格中心-Demo图片列表：鼠标移入/移出改变图片透明度倒计时时钟星级评分系统用键盘控制DIV仿腾讯微博效果移动效果（按轨迹移动）iPhone手机解锁效果仿苹果电脑任务栏菜单自动轮播广告（面向对象版）面试题-动态生成表格眼镜在线试戴酒店价格中心-Demo图片列表：鼠标移入/移出改变图片透明度倒计时时钟星级评分系统用键盘控制DIV仿腾讯微博效果移动效果（按轨迹移动）iPhone手机解锁效果仿苹果电脑任务栏菜单自动轮播广告（面向对象版）面试题-动态生成表格眼镜在线试戴酒店价格中心-Demo图片列表：鼠标移入/移出改变图片透明度倒计时时钟星级评分系统用键盘控制DIV仿腾讯微博效果移动效果（按轨迹移动）iPhone手机解锁效果仿苹果电脑任务栏菜单自动轮播广告（面向对象版）面试题-动态生成表格眼镜在线试戴酒店价格中心-Demo图片列表：鼠标移入/移出改变图片透明度倒计时时钟星级评分系统用键盘控制DIV仿腾讯微博效果移动效果（按轨迹移动）iPhone手机解锁效果仿苹果电脑任务栏菜单自动轮播广告（面向对象版）面试题-动态生成表格眼镜在线试戴酒店价格中心-Demo图片列表：鼠标移入移出改变图片透明度倒计时时钟星级评分系统用键盘控制DIV仿腾讯微博效果移动效果（按轨迹移动）iPhone手机解锁效果仿苹果电脑任务栏菜单自动轮播广告（面向对象版）面试题-动态生成表格眼镜在线试戴酒店价格中心-Demo图片列表：鼠标移入移出改变图片透明度倒计时时钟星级评分系统用键盘控制DIV仿腾讯微博效果移动效果（按轨迹移动）iPhone手机解锁效果仿苹果电脑任务栏菜单自动轮播广告（面向对象版）面试题-动态生成表格眼镜在线试戴酒店价格中心-Demo
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    // this.$http('/v1/book/latest', {}, { method: 'GET' }).then(res => {
    //   console.log(res)
    // })
  },
  methods: {
    showPopup (refId) {
      const component = this.$refs[refId]
      component.show()
      // setTimeout(() => {
      //   component.hide()
      // }, 1000)
    }
  }
}
</script>

<style lang='stylus'>
  .img-bg{
    width 266px
    margin 0 auto
    // background-image: url('../assets/popup.png')
    // background-repeat no-repeat
    // background-size:100%
    .p-bg{
      padding 147px 30px  90px
    }
  }
</style>
