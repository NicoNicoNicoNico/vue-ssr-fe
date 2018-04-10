<template>
  <div class="app">
    {{text}}
    <button @click="changeText"></button>
    <router-link to="hello">Hello router</router-link>
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
    mounted() {
      const _this = this as any;
      var dd = document.createElement('span');
      dd.innerText = _this.$store.state.items.index;
      document.documentElement.appendChild(dd);
    }
  } as any;
</script>
<style>
.app { color: red }
</style>
