<script setup lang="ts">
import { toRef } from 'vue-demi';
import type { Client } from '../interfaces/client';

const props = defineProps<{
    clients: Client[];
}>()

const clients = toRef(props, 'clients');
</script>

<template>
    Listado de clientes
    <ul>
        <li v-for="client of clients" :key="client.id">
            <router-link :to="{ name: 'clients-id', params: { id: client.id } }">
                {{ client.name }}
            </router-link>
        </li>
    </ul>
</template>

<style scoped></style>
