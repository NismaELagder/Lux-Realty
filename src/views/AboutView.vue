<template>
  <TitleSection />
  <LuxuryLiving />
  <SeasonedSection />
  <BeyondExpectations />
  <OurTeam />
  <BlogSection />
</template>

<script>
import TitleSection from "@/components/AboutPage/TitleSection.vue";
import LuxuryLiving from "@/components/AboutPage/LuxuryLiving.vue";
import SeasonedSection from "@/components/AboutPage/SeasonedSection.vue";
import BeyondExpectations from "@/components/AboutPage/BeyondExpectations.vue";
import OurTeam from "@/components/AboutPage/OurTeam.vue";
import BlogSection from "@/components/HomePage/BlogSection.vue";
export default {
  name: "AboutView",
  components: {
    TitleSection,
    LuxuryLiving,
    SeasonedSection,
    BeyondExpectations,
    OurTeam,
    BlogSection,
  },
};
</script>

<style scoped></style>
