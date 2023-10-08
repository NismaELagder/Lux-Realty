<template>
  <ServiceComponent
    :Caption="caption"
    :Slogan="slogan"
    :imgL="imgs[0]"
    :imgR="imgs[1]"
    :SectionTitle="title"
  />
</template>
<script>
import ServiceComponent from "../UI/ServiceComponent.vue";
export default {
  name: "HomeAbout",
  components: { ServiceComponent },
  setup() {
    const caption =
      " Experience the epitome of luxury living with our exceptional collection of houses that offer unparalleled comfort.";

    const title = "ABOUT US";
    const slogan = "Luxury Houses with Quality Comfort";

    const imgs = [
      "https://assets.website-files.com/64e88cc610ddff2adf2e9839/64e88cc610ddff2adf2e9884_living-room-with-brown-wooden-table-and-chairs.jpg",
      "https://assets.website-files.com/64e88cc610ddff2adf2e9839/64e88cc610ddff2adf2e9884_living-room-with-brown-wooden-table-and-chairs-p-500.jpg",
    ];
    return { slogan, caption, title, imgs };
  },
};
</script>
