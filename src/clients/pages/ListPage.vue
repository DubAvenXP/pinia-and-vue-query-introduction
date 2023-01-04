<script setup lang="ts">
import ClientList from "@/clients/components/ClientList.vue";
import { useClients } from "@/clients/composables";

import PaginationNumbers from "@/clients/components/PaginationNumbers.vue";
import LoadingModal from "@/shared/components/LoadingModal.vue";

const { clients, isLoading, totalPages, currentPage, getPage } = useClients();
</script>
<template>
    <div>
        <h1>Listado</h1>
        <ClientList :clients="clients" />
        <PaginationNumbers
            @on-change-page="getPage"
            :total-pages="totalPages"
            :current-page="currentPage"
        />
        <LoadingModal v-if="isLoading" />
    </div>
</template>

<style scoped></style>
