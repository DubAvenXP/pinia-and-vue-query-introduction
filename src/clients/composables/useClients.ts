import { computed, watch } from "vue";
import { storeToRefs } from "pinia";
import { useQuery } from "@tanstack/vue-query";

import clientsApi from "@/api/clients-api";
import type { Client } from "@/clients/interfaces/client";
import { useClientStore } from "@/store";

const getClients = async (): Promise<Client[]> => {
    const { data } = await clientsApi.get<Client[]>("/clients?_page=1");
    return data;
};

const useClients = () => {
    const store = useClientStore();
    const { clients, currentPage, totalPages } = storeToRefs(store);

    const { data, isLoading } = useQuery(["clients?page=", 1], () =>
        getClients()
    );

    watch(data, (clients) => {
        if (clients) store.setClients(clients);
    });

    return {
        // Properties
        clients,
        isLoading,
        currentPage,
        totalPages,

        // Methods
        getPage: store.setPage, // getPage: (page: number) => store.setPage(page)

        // Getters
        totalPageNumbers: computed(() =>
            [...new Array(totalPages.value)].map((_, i) => i + 1)
        ),
    };
};

export default useClients;
