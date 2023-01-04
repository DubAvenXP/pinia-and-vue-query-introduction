<script setup lang="ts">
import { useClients } from "@/clients/composables";

const { getPage, totalPageNumbers, currentPage, totalPages } = useClients();
</script>
<template>
    <div>
        <button :disabled="currentPage === 1" @click="getPage(currentPage - 1)">
            Anterior
        </button>
        <button
            v-for="pageNumber of totalPageNumbers"
            :key="pageNumber"
            :class="{ active: currentPage === pageNumber }"
            @click="getPage(pageNumber)"
        >
            {{ pageNumber }}
        </button>
        <button :disabled="currentPage === totalPages" @click="getPage(currentPage + 1)">
            Siguiente
        </button>
    </div>
</template>

<style scoped>
div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 35px;
}

button {
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid var(--color-border);
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

button:hover {
    background-color: #eee;
    transition: all 0.2s ease-in-out;
}

button:active {
    background-color: #ddd;
    transition: all 0.2s ease-in-out;
}

button:disable {
    cursor: not-allowed;
}

.active {
    background-color: #ddd;
    transition: all 0.2s ease-in-out;
}
</style>
