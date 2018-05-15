<template>
  <div class="app">
    {{text}}
    <button @click="changeText"></button>
    <router-link to="hello">Hello router</router-link>
    <div><span>helloText</span>{{helloText}}</div>
  </div>
</template>
<script lang="ts">
  export default {
    asyncData ({ store, route, data }: any) {
      return store.commit('setPage', data);
    },
    data() {
      return {
        text: 'hello world'
      }; 
    },
    methods: {
      changeText(this: any) {
        this.text = 'test click'
      }
    },
    computed: {
      helloText(this: any) {
        return this.$store.state.ssrData.helloText;
      }
    }
  } as any;
</script>
<style>
.app { color: red }
</style>
