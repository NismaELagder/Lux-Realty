<template v-if="products.length">
  <div
    class="w-11/12 m-auto flex justify-between flex-wrap"
  >
    <div
      class="md:w-1/2 w-full"
      v-for="(item, i) in products"
      :key="i"
    >
      <RentCard v-if="isMounted && i < 4" :product="item" />
    </div>
  </div>
</template>

<script>
import RentCard from "./RentCard.vue";
import { ref, onMounted } from "vue";
import getData from "@/components/Composable/getData";
export default {
  name: "RentSection",
  components: { RentCard },

  setup() {
    let products = ref([]);
    let isMounted = ref(false);

    onMounted(() =>
      getData(
        "https://lux-realty-db.onrender.com/products",
        true,
        products,
        isMounted
      )
    );

    return { products, isMounted };
  },
};
</script>

<style></style>
