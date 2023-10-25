<template>
  <div>
    <div class="flex">
      <AsideList />
      <CarouselComponent />
    </div>
    <div
      class="flex md:flex-row flex-col items-center justify-center md:justify-around p-16"
    >
      <HomeValues />
    </div>
    <HomeDiscovery />
    <UIDivider />
    <HomeAbout />
    <HomeServices />
    <UIDivider />
    <RentSection />

    <HomeDestinations />

    <CustomerSatisfaction />
    <CustomerExperience />
    <BlogSection :length="2" />
  </div>
</template>

<script>
import CarouselComponent from "@/components/Carousel/CarouselComponent.vue";
import AsideList from "@/components/HomePage/AsideList.vue";
import HomeValues from "@/components/HomePage/HomeValues.vue";
import HomeDiscovery from "@/components/HomePage/HomeDiscovery.vue";
import HomeAbout from "@/components/HomePage/HomeAbout.vue";
import UIDivider from "@/components/UI/DividerComponent.vue";
import HomeServices from "@/components/HomePage/HomeServices.vue";
import RentSection from "@/components/HomePage/RentSection.vue";
import HomeDestinations from "@/components/HomePage/HomeDestinations.vue";
import CustomerSatisfaction from "@/components/CustomerSatisfaction.vue";
import CustomerExperience from "@/components/ClientExperience.vue";
import BlogSection from "@/components/HomePage/BlogSection.vue";

export default {
  name: "HomeView",
  components: {
    CarouselComponent,
    AsideList,
    HomeValues,
    HomeDiscovery,
    UIDivider,
    HomeAbout,
    HomeServices,
    RentSection,
    HomeDestinations,
    CustomerSatisfaction,
    CustomerExperience,
    BlogSection,
  },
};
</script>
