# test-vue

> A Vue.js project

##  关于vue-cli
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 项目总结
## express
<br/>req.query ： 处理 get 请求，获取 get 请求参数
<br/>req.params ： 处理 /:xxx 形式的 get 或 post 请求，获取请求参数
<br/>req.body ： 处理 post 请求，获取 post 请求体
<br/>req.param() ： 处理 get 和 post 请求，但查找优先级由高到低为 req.params→req.body→req.quer
## js
<br/>数组使用前判断： if( arr && arr.length)
### delegate, bind,live,on区别
<br/>https://www.cnblogs.com/moonreplace/archive/2012/10/09/2717136.html
<br/>bind：解决了浏览器在事件处理中的兼容问题，.click(), .hover()...都是bind的一种简化处理方式
<br/>缺点
<br/>它会绑定事件到所有的选出来的元素上
<br/>它不会绑定到在它执行完后动态添加的那些元素上
<br/>当元素很多时，会出现效率问题
<br/>当页面加载完的时候，你才可以进行bind()，所以可能产生效率问题
<br/>
<br/>live: 采用事件委托，绑定相应的事件到你所选择的元素的根元素上，即是document元素上。所有通过冒泡上来的事件都可以用这个相同的ha<br/>ndler来处理了。可以用在动态添加的元素上。
<br/>缺点：
<br/>从1.7开始已经不被推荐了，所以你也要开始逐步淘汰它了。 
<br/>Chaining没有被正确的支持
<br/>当使用event.stopPropagation()是没用的，因为都要到达document
<br/>因为所有的selector/event都被绑定到document, 所以当我们使用matchSelector方法来选出那个事件被调用时，会非常慢
<br/>当发生事件的元素在你的DOM树中很深的时候，会有performance问题
<br/>
<br/>delegate：有点像.live(),不同于.live()的地方在于，它不会把所有的event全部绑定到document,而是由你决定把它放在哪儿。而和.live()<br/>相同的地方在于都是用event delegation.
<br/>缺点：
<br/>需要查找那个那个元素上发生了那个事件了，尽管比document少很多了，不过，你还是得浪费时间来查找。
<br/>
<br/>on: 提供了一种统一绑定事件的方法,通过合理设置参数可以代替以上3中方法
<br/>$(selector).on(event,childselector,data,function)
<br/>其实.bind(), .live(), .delegate()都是通过.on()来实现的，.unbind(), .die(), .undelegate(),也是一样的都是通过.off()来实现的
<br/>// Bind
<br/>$( "#members li a" ).on( "click", function( e ) {} ); 
<br/>$( "#members li a" ).bind( "click", function( e ) {} ); 
<br/>
<br/>// Live
<br/>$( document ).on( "click", "#members li a", function( e ) {} ); 
<br/>$( "#members li a" ).live( "click", function( e ) {} );
<br/>
<br/>// Delegate
<br/>$( "#members" ).on( "click", "li a", function( e ) {} ); 
<br/>$( "#members" ).delegate( "li a", "click", function( e ) {} );   
<br/>
## css
<br/>background:bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
<br/>background:url(bgimg.gif) no-repeat 5px 5px; //position
<br/>background-size最好另一行写
<br/>
<br/>>当margin/padding取形式为百分比的值时，无论是left/right，还是top/bottom，都是以父元素的width为参照物https://segmentfault.com<br/>/a/1190000004231995
<br/>
#不依赖容器内容来撑开容器  - 原因：容器高度随内容，内容没加载时为0，出现闪烁 
<br/>Parent{width:100%；padding-top: 100%; } 
<br/>max-height失效的原因是容器的高度本来就是padding撑的，而内容高度为0，max-height无法起作用
<br/>解决：添加子元素/伪元素激活max-height: .parent:after {  content: '';  display: block;  margin-top: 100%; //margin <br/>百分比相对父元素宽度计算}
<br/>容器内添加内容： img{position: absolute; top: 0; width: 100% ;}
<br/> 
<br/> 
<br/>vertical-align 定义行内元素的基线相对于该元素所在行的基线的垂直对齐
<br/>text-top	把元素的顶端与父元素字体的顶端对齐
<br/>top	把元素的顶端与行中最高元素的顶端对齐
<br/>
<br/>消除子元素之间间隙：
<br/>父元素font-size为0
<br/>子元素<span><i>等删掉换行
<br/>
<br/>ease-in-out 以慢速开始（in)和结束(out)
<br/>
### css sticky footer: 
<br/>1. 设置content{min-height: calc(100vh - header高-footer高)
<br/>2.parent{display: flex; flex-flow: column;min-height: 100vh;} content { flex: 1; } <br/>然后给页头和页脚设置高度后content就会自动伸缩占满剩余高度
<br/>3. parent{min-height: 100%;}
<br/>content{padding-bottom: 64px;} 
<br/>footer{margin: -64px auto 0 auto;}
<br/>
### CSS长度值
<br/>单位	含义
<br/>em	相对于父元素的字体大小
<br/>ex	相对于小写字母"x"的高度
<br/>gd	一般用在东亚字体排版上，这个与英文并无关系
<br/>rem	相对于根元素字体大小
<br/>vw	相对于视窗的宽度：视窗宽度是100vw
<br/>vh	相对于视窗的高度：视窗高度是100vh
<br/>vm	相对于视窗的宽度或高度，取决于哪个更小
<br/>ch	相对于0尺寸
<br/>px	相对于屏幕分辨率而不是视窗大小：通常为1个点或1/72英寸
<br/>in	inch, 表英寸
<br/>cm	centimeter, 表厘米
<br/>mm	millimeter, 表毫米
<br/>pt	1/72英寸
<br/>pc	12点活字，或1/12点
<br/>%	相对于父元素。正常情况下是通过属性定义自身或其他元素
<br/>
### flex
<br/>容器
<br/>排列方式 flex-flow: <flex-direction> || <flex-wrap>;
<br/>轴上的对齐方式 justify-content: flex-start | flex-end | center | space-between | space-around;
<br/>交叉轴上如何对齐 align-items: flex-start | flex-end | center | baseline | stretch;
<br/>order - 项目的排列顺序。数值越小，排列越靠前，默认为0
<br/>子项目
<br/>flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
<br/>flex-grow 放大比例，默认为0，即如果存在剩余空间，也不放大。
<br/>flex-shrink 项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
<br/>flex-basis 分配多余空间之前，项目占据的主轴空间（main size），它可以设为跟width或height属性一样的值（比如350px）
<br/>align-self 单个项目有与其他项目不一样的对齐方式
<br/>align-self: auto | flex-start | flex-end | center | baseline | stretch;
<br/>
## vue
<br/>v-enter-active: 第一帧指定样式(v-enter)->v-show=true
<br/>v-leave-active: v-show=true ->第一帧指定样式(v-leave-to)
<br/>
<br/>@click.stop.prevent阻止冒泡
<br/>@click="select(2,$event)" 传递event参数
<br/>
<br/>有时data属性被赋值为props属性时为undefined：再data里面初始化，在created()里面再赋值一遍
<br/>computed prop里面不要修改data
<br/>私有属性$_开头
<br/>enter, leave动画钩子中必须调用done（）:
<br/>dropping(el,done){...el.addEventListner('transitionend',done);}
<br/>Vue 不能检测以下变动的数组：
<br/>当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
<br/>当你修改数组的长度时，例如：vm.items.length = newLength
<br/>解决：Vue.set(vm.items, indexOfItem, newValue)
<br/>
<br/>:class = "{'up': rating.rateType ===0, 'down': rating.rateType===1}"
<br/>:style="{fontSize: fontSize + 'px'}" ; js里面写font-size
<br/>
<br/><div v-for="(value, [key], [index]) in object">
<br/>  {{ index }}. {{ key }}: {{ value }}
<br/></div>
<br/>Vue.nextTick() 获取更新后的DOM
<br/>props:['categoryID'] 标签内传值就应该这样写 :category-i-d="categoryID"
<br/>
<br/>在$http返回回调中，this指向的是$http对象而非Vue实例，方法1、self= this
<br/>2、this.$http.get(url).then(function(){}.bind(this))
<br/>不要在methods中用箭头函数，箭头函数的this是继承而来; 默认指向在定义它时所处的对象(宿主对象),而不是执行时的对象
<br/>addEventListener（dom,fn)的fn也需要bind(this)
<br/>
<br/><<<<<<< HEAD
## 未完待续

