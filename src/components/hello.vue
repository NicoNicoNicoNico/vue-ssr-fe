<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">

export default {
    asyncData ({ store, route, date }: any) {
      var name = 'hello';
      return store.commit('setItem', {name , date})
    },
    data() {
        return {
            name: 'world',
            enthusiasm: 5,
        }
    },
    methods: {
        increment() { var _this = this as any; _this.enthusiasm++; },
        decrement() {
             var _this = this as any;
            if (_this.enthusiasm > 1) {
                _this.enthusiasm--;
            }
        },
    },
    computed: {
        exclamationMarks() {
             var _this = this as any;
            return Array(_this.enthusiasm + 1).join('!');
        }
		},
		mounted() {
      const _this = this as any;
      var dd = document.createElement('span');
      dd.innerText = _this.$store.state.items.hello;
      document.documentElement.appendChild(dd);
			console.log("store", _this.$store.state.items);
		}
};
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>