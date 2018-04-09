<template>
  <div class="app">
    {{text}}
    <button @click="changeText"></button>
    <router-link to="hello">Hello router</router-link>
  </div>
</template>
<script lang="ts">
  export default {
    asyncData ({ store, route }: any) {
      return store.dispatch('fetchItem', route.params.id)
    },
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
      const _this = this as any;
      // var dd = document.createElement('span');
      // dd.innerText = _this.$store.state.id;
      // document.documentElement.appendChild(dd);
      // console.log("store", _this.$store.state.storeText);
      // window.location.href = 'http://codesky.me';
    }
  } as any;
</script>
<style>
.app { color: red }
</style>
