<template>
    <div>
        <ul>
            <li v-for="(item,index) in list " :key="index" @click="choose(index)" :class="{active: index==current && current!=-1}">{{item}}</li>
        </ul>
        <button @click="add"> 添加</button>
        <ul>
            <li v-for="(item,index) in target " :key="index">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'demo1',
    data() {
        return {
            list: [1,2,3,4],
            current: -1,
            target: []
        }
    },
    methods:{
        choose(index){
            this.current=index;
        },
        add(){
            if(this.current < 0){
                alert('please choose one item!');
                return;
            }
            let val = this.list.splice(this.current, 1);
            console.log(this.target)
            this.target.push(val[0]);
            this.current =-1;
        }
    }
}
</script>
<style>
    .active{
        background: #f33;
    }
</style>

