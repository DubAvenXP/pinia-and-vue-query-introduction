<script setup lang="ts">
import { ref, toRef, watch } from "vue";

interface Props {
    currentPage: number;
    totalPages: number;
}

interface Emits {
    (event: "onChangePage", page: number): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const currentPage = toRef(props, "currentPage");
const totalPages = toRef(props, "totalPages");

const totalPageNumbers = ref<number[]>([]);

watch(
    totalPages,
    () => {
        totalPageNumbers.value = [...new Array(totalPages.value)].map(
            (_, i) => i + 1
        );
    },
    { immediate: true }
);
</script>
<template>
    <div>
        <button
            :disabled="currentPage === 1"
            @click="emits('onChangePage', currentPage - 1)"
        >
            Anterior
        </button>
        <button
            v-for="pageNumber of totalPageNumbers"
            :key="pageNumber"
            :class="{ active: currentPage === pageNumber }"
            @click="emits('onChangePage', pageNumber)"
        >
            {{ pageNumber }}
        </button>
        <button
            :disabled="currentPage === totalPages"
            @click="emits('onChangePage', currentPage + 1)"
        >
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
