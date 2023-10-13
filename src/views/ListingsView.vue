<template>
  <div class="px-8 pt-48 bg-[#111B37]">
    <ListingsHeader />
    <div class="flex">
      <AsideList />
      <ListingsProducts />
    </div>
    <CustomerSatisfaction />
  </div>
</template>
<script>
import AsideList from "@/components/ListingsPage/AsideList.vue";
import ListingsHeader from "@/components/ListingsPage/ListingsHeader.vue";
import ListingsProducts from "@/components/ListingsPage/ListingsProducts.vue";
import CustomerSatisfaction from "@/components/CustomerSatisfaction.vue";
export default {
  name: "ListingsView",
  components: {
    AsideList,
    ListingsHeader,
    ListingsProducts,
    CustomerSatisfaction,
  },
};
</script>
