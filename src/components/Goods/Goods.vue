<template>
	<div class="goods">
		<div class="menu-wapper" ref="menu_wapper">
			<ul>
				<li v-for="(item,index) in goods" class="menu-item" :key="index" 
				:class="{'current': curIndex===index}" @click="selectMenu(index, $event)"> 
					<span class="text  border-1px"><span class="icon" v-show="item.type>0" :class="classMap[item.type]"></span>
				{{item.name}}</span>
					
				</li>
			</ul>
		</div>
		<div class="foods-wrapper" ref="foodsWrapper" >
			<ul>
				<li v-for="(item,index) in goods" class="food-list food-list-hook" :key="index" ref="foodList">
					<ul>
						<li  v-for="(food,index) in item.foods" class="food-item border-1px" :key="index" @click="selectFood(food,$event)">
							<div class="icon">
								<img :src="food.icon" width="57" height="57" alt="food">
							</div>
							<div class="content">
								<h2 class="name">{{food.name}}</h2>
								<p class="desc">{{food.description}}</p>
								<div class="extra">
									<span>月售{{food.sellCount}}份</span>
									<span>好评率{{food.rating}}%</span>
								</div>
								<div class="price">
									<span class="now">￥{{food.price}}</span>
									<span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
								</div>
								<div class="cartcontrol-wrapper">
									<CartControl :food = "food" v-on:addCart="addCartHandler"> </CartControl>
								</div>							
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<ShopCart ref="shopCart" :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></ShopCart>
		<food :food="selectedFood" ref="food" v-on:addCart="addCartHandlerForFood"></food>
	</div>
</template>

<script >
import ShopCart from '@/components/ShopCart/ShopCart'
import CartControl from '@/components/CartControl/CartControl'
import food from '@/components/Food/Food.vue'

const ERR_OK = 0
export default {
  props: {
  	seller: {
  		type: Object
  	}
  },
  data(){
  	return {
  		goods: [],
  		listHeight: [],
  		scrollY: 0,
  		selectedFood: {}
  	}
  },
  created(){
  	let self = this
  	this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  	this.$axios.get('/api/goods').then(function(res) {
  		if (res.data.errno === ERR_OK) {
  			this.goods = res.data.goods
  			this.$nextTick(function(){
  				this._calculateH()
  			})
  		}
  	}.bind(this))

  },
  computed:{
  	curIndex(){
  		let len=this.listHeight.length
  		for (var i = 0; i < len; i++) {
  			let h1 = this.listHeight[i]
  			let h2 = this.listHeight[i+1]
  			if (i===len || (this.scrollY > h1 && this.scrollY <= h2)) {
  				return i
  			}
  		}
  		return 0
  	},
  	selectFoods(){
  		let foods =[]
  		this.goods.forEach(good => {
  			good.foods.forEach(food => {
  				if (food.count) {
  					foods.push(food)
  				}
  			})
  		})
  		return foods
  	}
  },
  mounted(){
		let foodsWrapper = this.$refs.foodsWrapper
		foodsWrapper.addEventListener('scroll', function () {
    	this.scrollY = Math.abs(Math.round(foodsWrapper.scrollTop))
		}.bind(this), false)
  },
  methods: {
		_calculateH: function(e){
  	 	let foodList = document.querySelectorAll('.food-list-hook')
  	 	let h =0
  	 	this.listHeight.push(h)
  		for (var i = 0; i < foodList.length; i++) {
  			h += foodList[i].clientHeight
  			this.listHeight.push(h)
  		}
  	},
  	selectMenu(index, e){
  		let foodList = document.querySelectorAll('.food-list-hook')
  		this.$refs.foodsWrapper.scrollTop = this.listHeight[index] + 1
  	},
	  addCartHandler: function (payload) {
	  	//体验优化， 异步执行下落动画
	  	this.$nextTick(() => {
      	this.$refs.shopCart.drop(payload.target)
	  	})
    },
    addCartHandlerForFood(target){
    	this.$nextTick(() => {
      	this.$refs.shopCart.drop(target)
	  	})
    },
    selectFood(food, event) {
      this.selectedFood = food;
      this.$refs.food.show();
    }    
  },
  components:{
  	ShopCart,
  	CartControl,
  	food
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin.styl'

	.goods
		display flex
		position absolute
		top 174px
		bottom 46px
		width 100%
		.menu-wapper
			flex 0 0 80px
			width 80px
			overflow-x hidden
			overflow-y scroll	
			&::-webkit-scrollbar
				display none
			background #f3f5f7
			.menu-item
				display table
				width 56px
				height 54px
				line-height 14px
				padding 0 12px
				&.current
					position relative
					z-index 10
					margin-top -1px
					background #fff
					font-weight 700
					color #f88
					.text
						border-none()
				.icon
					display inline-block
					vertical-align top
					width 12px
					height 12px
					margin-right 2px
					background-size 12px 12px
					background-repeat no-repeat
					&.decrease
						bg-image('decrease_3')
					&.discount
						bg-image('discount_3')
					&.guarantee
						bg-image('guarantee_3')
					&.invoice
						bg-image('invoice_3')
					&.special
						bg-image('special_3')
				.text
					display table-cell
					width 56px
					vertical-align middle
					border-1px(rgba(7,17,27,0.1))
					font-size 12px
		.foods-wrapper
			flex 1
			overflow-x hidden
			overflow-y scroll
			&::-webkit-scrollbar
				display none
			.title
				padding-left 14px
				height 26px
				line-height 26px
				border-left 2px solid #d9dde1
				font-size 12px
				color rgb(147,153,159)
				background #f3f5f7
			.food-item
				display flex
				margin 18px
				padding-bottom 18px
				border-1px(rgba(7,17,27,0.1))
				&:last-child
					border-none()
					margin-bottom 0
				.icon
					flex 0 0 57
					margin-right 10px
				.content
					flex 1
					display relative
					p
						line-height 12px
					.name
						margin 2px 0 8px 0
						line-height 14px
						font-size 14px
						color rgb(7,17,27)
					.desc, .extra
						font-size 10px
						color rgb(147,153,159)
					.desc
						margin-bottom 8px
					.extra
						&.count
							margin-right 12px
					.price
						font-weight 700
						line-height 24px
						.now
							margin-right 8px
							font-size 14px
							color rgb(240,20,20)
						.old
							text-decoration line-through
							font-size 10px
							color rgb(147,153,159)
					.cartcontrol-wrapper
						position absolute
						right 0
						bottom 12px
</style>
