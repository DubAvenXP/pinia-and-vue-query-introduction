import { defineStore } from "pinia";
import { ref } from "vue";

import type { Client } from "@/clients/interfaces/client";

export const useClientStore = defineStore("client", () => {
    const currentPage = ref<number>(1);
    const totalPages = ref<number>(5);
    const clients = ref<Client[]>([]);

    return {
        // state
        currentPage,
        totalPages,
        clients,

        // actions
        setClients(newClients: Client[]) {
            clients.value = newClients;
        },

        setPage(page: number) {
            if (currentPage.value === page) return;
            currentPage.value = page;
        }
    };
});
