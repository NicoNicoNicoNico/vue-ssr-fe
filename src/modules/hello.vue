<template>
  <div>
    <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">

export default {
    asyncData ({ store, route, data }: any) {
      return store.commit('setPage', data);
    },
    data() {
      return {
        name: 'world',
        enthusiasm: 5,
      }
    },
    methods: {
      increment(this: any) { 
        this.enthusiasm++; 
      },
      decrement(this: any) {
        if (this.enthusiasm > 1) {
          this.enthusiasm--;
        }
      },
    },
    computed: {
      exclamationMarks(this: any) {
        return Array(this.enthusiasm + 1).join('!');
      }
		}
} as any;
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>