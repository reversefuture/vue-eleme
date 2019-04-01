<template>
  <div>
      list
    <ul>
      <li v-for="(item,index) in computedList" :key="item.title">
        <span>{{index+1}}</span> . &nbsp;
        <span>{{item.title}}</span>:&nbsp;
        <span>{{item.content}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'List',
  data() {
    return {};
  },
  methods: {},
  computed: {
    computedList() {
      return this.$store.state.lists;
    }
  }
};
</script>
<style>
</style>

