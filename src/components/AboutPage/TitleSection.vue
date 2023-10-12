<template>
  <div
    class="w-11/12 h-screen ml-auto mr-4 flex justify-center items-center px-5 border-solid border-b-[1px] border-yellow-500"
    ref="carousel"
    :style="{
      'background-image':
        'url(https://assets.website-files.com/64e88cc610ddff2adf2e9839/64ec36159f92b72fe4286102_About-Image-Overlay.png) , url(https://assets.website-files.com/64e88cc610ddff2adf2e9839/64ec35a7c2db6bd98c645098_About-Image.jpg)',
    }"
    data-aos="zoom-in-down"
  >
    <div id="content" class="text-center">
      <h1 class="text-6xl mb-4 font-Gilda text-white">
        About Us
      </h1>
      <p
        class="text-sm font-Barlow tracking-widest text-orange-200"
      >
        MEET OUR AGENTS
      </p>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
export default {
  name: "TitleSection",

  setup() {
    AOS.init();
  },
};
</script>

<style></style>
