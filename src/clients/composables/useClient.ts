import { ref, computed, watch } from "vue";
import { useQuery, useMutation, useQueryClient } from "@tanstack/vue-query";

import type { Client } from "@/clients/interfaces/client";
import clientsApi from "@/api/clients-api";
// const queryClient = useQueryClient();


const getClient = async (id: number): Promise<Client> => {
    const { data } = await clientsApi.get<Client>(`/clients/${id}`);
    return data;
};

const updateClient = async (client: Client): Promise<Client> => {

    const { data } = await clientsApi.patch<Client>(`/clients/${client.id}`, client);
    // const queries = queryClient.getQueryCache().findAll(['clients?page='], { exact: false });
    // queries.forEach(query => query.fetch());
    return data;
}

export const useClient = (id: number) => {
    const client = ref<Client>();
    const clientMutation = useMutation(updateClient)

    const { isLoading, data, isError } = useQuery(["client", id], () => getClient(id), {
        retry: false,
    });


    watch(data, () => {
        if (data.value) client.value = { ...data.value }
    }, { immediate: true });


    return {
        isLoading,
        client,
        clientMutation,
        isError,

        isUpdating: computed(() => clientMutation.isLoading.value),
        isUpdatingSuccess: computed(() => clientMutation.isSuccess.value),
        isUpdatingError: computed(() => clientMutation.isError.value),
    };
};
