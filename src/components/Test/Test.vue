<template>
 <div>
  子组件<!--这里很常见的一个问题，就是{{childObject}}可以获取且没有报错，但是{{childObject.items[0]}}不行，往往有个疑问为什么前面获取到值，后面获取不到呢？-->
  <p>{{test}}</p>
 </div>
</template>
 
<script>
/*   export default {
props: ['childObject'],
  data: () => ({
   test: ''
  }),
  watch: {
   'childObject.items': function (n, o) {
    this._test = n[0]
   }
  },
  computed: {
   _test: {
    set (value) {
     this.update()
     this.test = value
    },
    get () {
     return this.test
    }
   }
  },
  methods: {
   update () {
    console.log(this.childObject) // {items: [1,2,3]}
   }
  }
 }*/

  export default {
  props: ['childObject'],
  data: () => ({
   test: ''
  }),
  created () {
   // 绑定
   this.$on('triggerChild', (parmas) => {
    this.test = parmas.items[0] // 1
    this.updata()
   })
  },
  methods: {
   updata () {
    console.log(this.test) // 1
   }
  }
 }
</script>