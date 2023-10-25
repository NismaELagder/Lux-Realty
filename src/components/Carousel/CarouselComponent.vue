<template>
  <div
    class="carousel w-full lg:w-5/6 h-screen flex justify-between items-center px-5"
    ref="carousel"
    :style="{ 'background-image': srcs[0].src }"
    :id="0"
    data-aos="zoom-in-down"
  >
    <button
      class="border-slate-50 border-solid border-x border-y p-10 rounded-full hover:bg-blue-950 hidden lg:block"
      ref="prevBtn"
      @click="carouselPrevHandler()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="3em"
        viewBox="0 0 512 512"
      >
        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          fill="currentColor"
          d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"
        />
      </svg>
    </button>
    <div
      id="content"
      class="lg:w-7/12 w-full text-center text-white font-Gilda"
    >
      <h1 class="text-7xl mb-6">{{ title }}</h1>
      <p class="text-2xl">{{ desc }}</p>
      <ButtonComponent
        BtnTxt="Explore Homes"
      ></ButtonComponent>
    </div>
    <button
      class="border-slate-50 border-solid border-x border-y p-10 rounded-full hover:bg-blue-950 hidden lg:block"
      ref="nextBtn"
      @click="carouselNextHandler()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="3em"
        viewBox="0 0 512 512"
      >
        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          fill="currentColor"
          d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
        />
      </svg>
    </button>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import ButtonComponent from "../UI/ButtonComponent.vue";
import AOS from "aos";
export default {
  name: "CarouselComponent",
  components: { ButtonComponent },
  setup() {
    onMounted(() => {
      AOS.init();
    });

    const srcs = [
      {
        id: 0,
        src: `url(https://assets.website-files.com/64e88cc610ddff2adf2e9839/64eaf1a8a1e0779103b43b42_Hero-Image-Overlay.png),
    url(https://assets.website-files.com/64e88cc610ddff2adf2e9839/64eaf1a9c7954f09e383bb3f_Hero-Image-1.jpg)`,
      },
      {
        id: 1,
        src: `url(https://assets.website-files.com/64e88cc610ddff2adf2e9839/64eaf1a8a1e0779103b43b42_Hero-Image-Overlay.png),url(https://assets.website-files.com/64e88cc610ddff2adf2e9839/64eaf1aacd5072aa98223ab7_Hero-Image-2.jpg)`,
      },
    ];

    const carousel = ref(null);
    const nextBtn = ref(null);
    const prevBtn = ref(null);
    const title = "Luxury Real Estate";
    const desc =
      "Our portfolio includes exquisite properties nestled in prime locations and prestigious neighborhoods renowned for their desirability.";

    function carouselNextHandler() {
      let carouselID = carousel.value.id;
      if (+carouselID < srcs.length) {
        carousel.value.id = +carouselID + 1;
        carousel.value.style.backgroundImage =
          srcs[carouselID].src;
      } else {
        carouselID = 0;
        carousel.value.id = 0;
        carousel.value.style.backgroundImage =
          srcs[carouselID].src;
      }
    }

    function carouselPrevHandler() {
      let carouselID = carousel.value.id;
      if (+carouselID < srcs.length) {
        carousel.value.id = +carouselID + 1;

        carousel.value.style.backgroundImage =
          srcs[carouselID].src;
      } else {
        carouselID = 0;
        carousel.value.id = 0;
        carousel.value.style.backgroundImage =
          srcs[carouselID].src;
      }
    }

    return {
      carousel,
      carouselNextHandler,
      carouselPrevHandler,
      nextBtn,
      prevBtn,
      srcs,
      title,
      desc,
    };
  },
};
</script>

<style scoped>
.carousel {
  background-image: url(https://assets.website-files.com/64e88cc610ddff2adf2e9839/64eaf1a8a1e0779103b43b42_Hero-Image-Overlay.png),
    url(https://assets.website-files.com/64e88cc610ddff2adf2e9839/64eaf1a9c7954f09e383bb3f_Hero-Image-1.jpg);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

button svg {
  font-size: xx-small;
  animation: btnsAnimate 1.5s infinite;
}

.carousel button[ref="prevBtn"] svg {
  animation: prevAnimation 1.5s infinite !important;
}
path {
  color: aliceblue;
}

/* svg:hover {
  transform: translateX(20px);
  transition: 0.25s all;
} */

@keyframes btnsAnimate {
  0% {
    transform: translate(0);
  }
  100% {
    transform: translateX(10px);
  }
}

@keyframes prevAnimation {
  0% {
    transform: translate(0);
  }
  100% {
    transform: translateX(-15px);
  }
}
</style>

<!-- slide 2 -->
<!-- url(https://assets.website-files.com/64e88cc610ddff2adf2e9839/64eaf1a8a1e0779103b43b42_Hero-Image-Overlay.png),url(https://assets.website-files.com/64e88cc610ddff2adf2e9839/64eaf1aacd5072aa98223ab7_Hero-Image-2.jpg) -->
