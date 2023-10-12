<template>
  <TitleSection />
  <LuxuryLiving />
  <SeasonedSection />
</template>

<script>
import TitleSection from "@/components/AboutPage/TitleSection.vue";
import LuxuryLiving from "@/components/AboutPage/LuxuryLiving.vue";
import SeasonedSection from "@/components/AboutPage/SeasonedSection.vue";

export default {
  name: "AboutView",
  components: {
    TitleSection,
    LuxuryLiving,
    SeasonedSection,
  },
};
</script>

<style scoped></style>
