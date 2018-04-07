<template>
  <div id="app">
    {{text}}
    <button @click="changeText"></button>
    <router-link to="hello">Hello router</router-link>
  </div>
</template>
<script lang="ts">
  export default {
    // asyncData ({ store, route }) {
    // 触发 action 后，会返回 Promise
      // return store.dispatch('fetchItem', route.params.id)
    // },
    data() {
      return {
        text: 'hello world'
      };
    },
    // created() {
      // localStorage.setItem('test', 'hello');
      // window.location.href = 'http://codesky.me';
    // },
    methods: {
      changeText() {
        const _this = this as any;
        _this.text = 'test click'
      }
    },
    mounted() {
      // window.location.href = 'http://codesky.me';
    }
  };
</script>
<style>
#app { color: red }
</style>
