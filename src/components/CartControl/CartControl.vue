<template>
	<div class="cartcontrol">
		
			 <transition name="move">
			 	<div class="cart-decrease " v-show="food.count>0" @click.stop.prevent="decreaseCart">
					<span class="inner icon-remove_circle_outline"></span>
				</div>
			</transition>	

		<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
		<div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
	</div>
</template>

<script>
import Vue from 'vue'
export default {
  props:{
  	food:{
  		type: Object
  	}
  },
  created(){
  	// console.log(this.food)
  },
  methods:{
  	addCart(e){
  		if (!this.food.count) {
  			// this.food.count = 1 //not registered by Vue.
  			Vue.set(this.food, 'count', 1)
  		}else{
  			this.food.count++
  		}
  		this.$emit('addCart', {target: e.target})
  	},
  	decreaseCart(e){
  		if (this.food.count) {
  			this.food.count--
  		}
  	}
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.cartcontrol
		font-size 0
		.cart-decrease
			display inline-block
			padding 6px
			&.move-enter-active			
				/*transform: translate3d(0, 0, 0)*/
				transition: all .5s linear
			&.move-leave-active
				transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
			&.move-enter, &.move-leave-to
				transform: translateX(24px)
				opacity 0
				
			.inner
				line-height 24px
				font-size 24px
				color rgb(0,160,220)		
              	
		.cart-count
			display inline-block
			vertical-align top
			width 12px
			padding-top 6px
			line-height 24px
			text-align center
			font-size 10px
			color rgb(147,153,159)
		.cart-add
			display inline-block
			padding 6px
			line-height 24px
			font-size 24px
			color rgb(0,160,220)				
</style>
