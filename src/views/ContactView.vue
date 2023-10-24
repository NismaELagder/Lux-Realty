<template>
  <div class="px-8 pt-48 bg-[#111B37]">
    <ContactForm />
    <ReachToUs />
    <CustomerSatisfaction />
  </div>
</template>

<script>
import ContactForm from "@/components/ContactPage/ContactForm.vue";
import ReachToUs from "@/components/ContactPage/ReachToUs.vue";
import CustomerSatisfaction from "@/components/CustomerSatisfaction.vue";
export default {
  name: "ContactView",
  components: {
    ContactForm,
    ReachToUs,
    CustomerSatisfaction,
  },
};
</script>

<style></style>
, CustomerSatisfaction
