<template>
  <div class="my-app">
    <h1>{{name}}</h1>
    <h2>age: {{age}}</h2>
    <my-cmp :name="name"></my-cmp>
  </div>
</template>

<script>
import Comp from './Comp.vue';

function randNum() {
  return Math.round(Math.random() * 100);
}

export default {
  components: {
    Comp,
  },
  data() {
    return {
      name: `Hans-${randNum()}`,
      age: randNum(),
    };
  },
};
</script>

<style>
.my-app {
  background: #eee;
}
</style>