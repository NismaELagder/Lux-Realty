<template>
  <ServiceComponent
    :Caption="caption"
    :Slogan="slogan"
    :imgL="imgs[0]"
    :imgR="imgs[1]"
    :SectionTitle="title"
    :dir="'rtl'"
    :imgLStyle="{
      'mask-image':
        'linear-gradient( 90deg,  transparent 0 ,rgba(17, 27, 55, 0.8))',
    }"
  />
</template>
<script>
import ServiceComponent from "../UI/ServiceComponent.vue";
export default {
  name: "HomeServices",
  components: { ServiceComponent },
  setup() {
    const caption =
      "Discover the allure of prime locations and coveted neighborhoods with our selection of luxury properties.";
    const title = "OUR SERVICES";
    const slogan = "Prime Locations & Neighborhoods";
    const imgs = [
      "https://assets.website-files.com/64e88cc610ddff2adf2e9839/64e88cc610ddff2adf2e9871_green-plant-on-white-ceramic-pot-Square-p-500.jpg",
      "https://assets.website-files.com/64e88cc610ddff2adf2e9839/64e88cc610ddff2adf2e987c_gray-sectional-couch-beside-brown-wooden-table-p-500.jpeg",
    ];

    return { slogan, caption, title, imgs };
  },
};
</script>
<style scoped></style>
