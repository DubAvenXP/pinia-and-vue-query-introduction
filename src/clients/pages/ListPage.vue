<script setup lang="ts">
import ClientList from "@/clients/components/ClientList.vue";
import { useClients } from "@/clients/composables";

const { clients } = useClients();
</script>
<template>
    <div>
        <h1>Listado</h1>
        <ClientList :clients="clients" />
    </div>
</template>

<style scoped></style>
