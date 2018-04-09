<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">

export default {
    asyncData ({ store, route }: any) {
      return store.dispatch('fetchItem', route.params.id)
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
    }
};
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>