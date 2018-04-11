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
    asyncData ({ store, route, date }: any) {
      var name = 'index';
      return store.commit('setItem', {name , date})
    },
    data() {
      return {
        text: 'hello world'
      };
    },
    methods: {
      changeText() {
        const _this = this as any;
        _this.text = 'test click'
      }
    },
    computed: {
      helloText() {
        const _this = this as any;
        console.log("helloText", _this.$store.state.items.index);
        return _this.$store.state.items.index;
      }
    }
    // mounted() {
    //   const _this = this as any;
    //   var dd = document.createElement('span');
    //   dd.innerText = _this.$store.state.items.index;
    //   document.documentElement.appendChild(dd);
    // }
  } as any;
</script>
<style>
.app { color: red }
</style>
