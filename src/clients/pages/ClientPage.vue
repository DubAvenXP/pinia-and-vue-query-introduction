<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import LoadingModal from "@/shared/components/LoadingModal.vue";
import { useClient } from "@/clients/composables";
import { watch } from "vue-demi";

const route = useRoute();
const router = useRouter();
const {
    client,
    isLoading,
    clientMutation,
    isError,
    isUpdating,
    isUpdatingError,
    isUpdatingSuccess,
} = useClient(+route.params.id);

watch(clientMutation.isSuccess, () => {
    setTimeout(() => {
        clientMutation.reset();
    }, 2000);
});

watch(isError, (isError) => {
    if (isError) {
        router.replace({ name: "clients-list" });
    }
});
</script>
<template>
    <div>
        <h3 v-if="isUpdating">Guardando...</h3>
        <h3 v-if="isUpdatingSuccess">Guardado</h3>
        <LoadingModal v-if="isLoading" />

        <div v-if="client">
            <h2>{{ client.name }}</h2>
            <form @submit.prevent="clientMutation.mutate(client!)">
                <input
                    type="text"
                    placeholder="Nombre del archivo"
                    v-model="client.name"
                />
                <br />
                <input
                    type="text"
                    placeholder="Dirección"
                    v-model="client.address"
                />
                <br />
                <button
                    type="submit"
                    :disabled="isUpdating"
                >
                    Guardar
                </button>
            </form>
        </div>

        <code> {{ client }} </code>
    </div>
</template>

<style scoped>
input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #408f44;
}

button:active {
    background-color: #5aae5f;
}
</style>
