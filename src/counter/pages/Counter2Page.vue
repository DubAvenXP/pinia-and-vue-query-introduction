<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useCounterSetupStore } from "@/store";

import CounterOptionsValue from "../components/CounterOptionsValue.vue";

const counterStore = useCounterSetupStore();
const { count, squareCount } = storeToRefs(counterStore);
const { incrementByOne, incrementBy } = counterStore;
</script>
<template>
    <h1>Pinia Setup</h1>
    <h1>Counter: {{ count }}</h1>
    <h1>Square: {{ squareCount }}</h1>
    <br>
    <button @click="incrementByOne">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="counterStore.$reset()">Reset</button>
    <br>
    <br>
    <hr>
    <br>
    <CounterOptionsValue />
</template>
.
0
<style scoped>
button {
    margin: 0 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    width: 75px;
}

button:hover {
    background-color: #ccc;
}
</style>
