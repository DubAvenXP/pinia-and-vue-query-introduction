<script setup lang="ts">
import ClientList from "@/clients/components/ClientList.vue";
import { useClients } from "@/clients/composables";

import PaginationNumbers from "@/clients/components/PaginationNumbers.vue";

const { clients } = useClients();
</script>
<template>
    <div>
        <h1>Listado</h1>
        <ClientList :clients="clients" />
        <PaginationNumbers />
    </div>
</template>

<style scoped></style>
