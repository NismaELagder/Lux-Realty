<template>
  <div>
    <div class="flex">
      <AsideList />
      <CarouselComponent />
    </div>
    <div class="flex justify-around p-16">
      <HomeValues />
    </div>
    <div>
      <HomeDiscovery />
    </div>
    <UIDivider />
    <HomeAbout />
    <HomeServices />
    <UIDivider />
    <RentSection />
    <HomeDestinations />
  </div>
</template>

<script>
import CarouselComponent from "@/components/Carousel/CarouselComponent.vue";
import AsideList from "@/components/AsideList.vue";
import HomeValues from "@/components/HomePage/HomeValues.vue";
import HomeDiscovery from "@/components/HomePage/HomeDiscovery.vue";
import HomeAbout from "@/components/HomePage/HomeAbout.vue";
import UIDivider from "@/components/UI/DividerComponent.vue";
import HomeServices from "@/components/HomePage/HomeServices.vue";
import RentSection from "@/components/HomePage/RentSection.vue";
import HomeDestinations from "@/components/HomePage/HomeDestinations.vue";

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
  },
};
</script>
