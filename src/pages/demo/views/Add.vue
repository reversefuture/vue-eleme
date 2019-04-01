<template>
  <div>
    <p>标题</p>
    <p>
      <input type="text" v-model="title">
    </p>
    <p>内容</p>
    <p>
      <input type="text" v-model="content">
    </p>
    <p>
      <button class="btn" @click="add">添加</button>
    </p>
  </div>
</template>
<script>
export default {
  name: "Add",
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    add() {
      this.$store.commit("addItem", {
        title: this.title,
        content: this.content
      });
      this.title = "";
      this.content = "";
      this.$router.push('/list')
    }
  }
};
</script>
<style>
</style>

