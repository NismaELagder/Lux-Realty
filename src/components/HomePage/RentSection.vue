<template v-if="products.length">
  <div
    class="w-11/12 m-auto flex justify-between flex-wrap"
  >
    <div
      class="w-1/2"
      v-for="(item, i) in products"
      :key="i"
    >
      <RentCard v-if="isMounted" :product="item" />
    </div>
  </div>
</template>

<script>
import RentCard from "./RentCard.vue";
import { ref, onMounted } from "vue";

export default {
  name: "RentSection",
  components: { RentCard },

  setup() {
    let products = ref([]);
    let isMounted = ref(false);
    onMounted(async () => {
      await fetch(
        "https://lux-realty-db.onrender.com/products"
      )
        .then((data) => data.json())
        .then((data) => {
          isMounted.value = true;
          products.value = data;
          // return data;
        });
      // .catch((err) => err.message);
    });

    return { products, isMounted };
  },
};
</script>

<style></style>
