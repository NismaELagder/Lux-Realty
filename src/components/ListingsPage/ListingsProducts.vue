<template>
  <div class="w-10/12 flex justify-between flex-wrap">
    <div
      v-for="(item, i) in products"
      :key="i"
      class="w-6/12"
    >
      <RentCard v-if="isMounted" :product="item" />
    </div>
  </div>
</template>

<script>
import getData from "@/components/Composable/getData";
import RentCard from "@/components/HomePage/RentCard.vue";
import { ref, onMounted } from "vue";
export default {
  name: "ListingsProducts",
  components: { RentCard },
  setup() {
    const products = ref([]);
    const isMounted = ref(false);
    onMounted(() => {
      getData(
        "https://lux-realty-db.onrender.com/products",
        true,
        products,
        isMounted
      );
    });

    return { isMounted, products };
  },
};
</script>

<style></style>
