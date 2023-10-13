<template>
  <div class="px-8 pt-48 bg-[#111B37]">
    <BlogSection :length="'full'" />
    <CustomerSatisfaction />
  </div>
</template>
<script>
import CustomerSatisfaction from "@/components/CustomerSatisfaction.vue";
import BlogSection from "@/components/HomePage/BlogSection.vue";
export default {
  name: "BlogView",
  components: { CustomerSatisfaction, BlogSection },
};
</script>
