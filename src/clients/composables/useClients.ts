import { computed, watch } from "vue";
import { storeToRefs } from "pinia";
import { useQuery } from "@tanstack/vue-query";

import clientsApi from "@/api/clients-api";
import type { Client } from "@/clients/interfaces/client";
import { useClientStore } from "@/store";

const getClients = async (page: number): Promise<Client[]> => {

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`);
    return data;
};

const useClients = () => {
    const store = useClientStore();
    const { clients, currentPage, totalPages } = storeToRefs(store);

    const { data, isLoading } = useQuery(["clients?page=", currentPage], () =>
        getClients(currentPage.value),
        {
            staleTime: 1000 * 60, // 1 minute
        }
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
    };
};

export default useClients;
