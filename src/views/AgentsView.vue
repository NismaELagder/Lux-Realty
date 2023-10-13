<template>
  <div class="px-8 pt-48 bg-[#111B37]">
    <OurTeam :hide="true" />
    <CustomerSatisfaction />
  </div>
</template>
<script>
import OurTeam from "@/components/AboutPage/OurTeam.vue";
import CustomerSatisfaction from "@/components/CustomerSatisfaction.vue";

export default {
  name: "AgentsView",
  components: { OurTeam, CustomerSatisfaction },
};
</script>
