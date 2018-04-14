<template>
  <div>
    <Header :seller = "seller" ></Header>
    <ul class="tab border-1px">
      <li class="tab-item">
        <router-link to="/goods">商品</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/rating">评论</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/seller">商家</router-link>
      </li>
    </ul>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <keep-alive>
  <router-view :seller="seller"></router-view>
</keep-alive>
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Test from '@/components/Test/Test.vue'
const ERR_OK = 0

// pass on data to router view in navigation guards

export default {
  data() {
    return {
      seller: {},
      asyncObject: undefined
    }
  },
  created() {
      this.$axios.get('/api/seller').then((res) => {
      if (res.data.errno === ERR_OK) {
        this.seller = res.data.seller
      }
    })

  
 },
  mounted () {
   // setTimeout模拟异步数据
   setTimeout(() => {
    // this.asyncObject = {'items': [1, 2, 3]}
    this.$emit('triggerChild', {'items': [1, 2, 3]})
    console.log('parent finish')

   }, 2000)
  },
  components: {
    Header
  }
}


</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './common/stylus/mixin.styl'

.tab
  display: flex
  width: 100%
  height: 40px
  line-height: 40px
  // border-bottom: 1px solid rgba(7,17,27,0.1)
  border-1px( rgba(7,17,27,0.1))
  .tab-item
    flex: 1
    text-align: center
    & > a
      display: block
      font-size: 14px
      color: rgb(77,85,93)
      &.active
        color: rgb(240,20,20)
      
</style>
