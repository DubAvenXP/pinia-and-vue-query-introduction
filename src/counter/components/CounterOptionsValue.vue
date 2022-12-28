<script setup lang="ts">
import { useCounterOptionStore } from '@/store';

const counterStore = useCounterOptionStore();
</script>

<template>
    <h1>El valor es {{ counterStore.count }}</h1>
    <h4>Ultimo cambio: {{ counterStore.lastChange }}</h4>
</template>
