import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterSetupStore = defineStore("counterSetup", () => {
    const count = ref(0);
    const lastChange = ref<Date>();

    const incrementBy = (value: number) => {
        count.value += value;
        lastChange.value = new Date();
    }

    return {
        // state
        count,
        lastChange,

        // getters
        squareCount: computed(() => Math.pow(count.value, 2)),

        // actions
        incrementBy,
        incrementByOne: () => incrementBy(1),
    };
});
