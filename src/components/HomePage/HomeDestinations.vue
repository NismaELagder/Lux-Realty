<template class="">
  <div class="text-center pt-32">
    <h3
      class="text-orange-200 tracking-widest text-md mb-4"
    >
      DESTINATIONS
    </h3>
    <h1
      class="text-white text-5xl font-Gilda tracking-tight"
    >
      OUR AREAS
    </h1>
    <p
      class="w-5/12 mx-auto text-2xl font-Gilda mt-4 text-white"
    >
      Embark on a captivating journey through the most
      desirable locations that define the pinnacle of
      luxurious living
    </p>
    <ButtonComponent
      BtnTxt="EXPLORE LOCATIONS"
      class="text-white text-sm font-Barlow hover:bg-blue-900 transition-colors duration-500"
    />
  </div>
  <div
    class="flex justify-between my-12 relative overflow-hidden"
  >
    <div
      v-for="item in destinations"
      :key="item?.id"
      class="min-w-[41.67%] ml-20 relative left-0"
      ref="carousel"
    >
      <DestinationCard v-if="isMounted" :data="item" />
    </div>
    <div class="btns absolute bottom-0 left-8">
      <!-- <button @click="prevHandler()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 320 512"
        > -->
      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <!-- <path
            fill="currentColor"
            class="text-white"
            d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
          />
        </svg>
      </button> -->
      <button @click="nextHandler()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 320 512"
        >
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            fill="currentColor"
            class="text-white"
            d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import ButtonComponent from "../UI/ButtonComponent.vue";
import DestinationCard from "./DestinationCard.vue";
export default {
  name: "HomeDestinations",
  components: { ButtonComponent, DestinationCard },
  setup() {
    const destinations = ref(null);
    const isMounted = ref(false);
    const carousel = ref(null);
    onMounted(async () => {
      await fetch(
        "https://lux-realty-db.onrender.com/Destinations"
      )
        .then((data) => data.json())
        .then((data) => {
          isMounted.value = true;

          destinations.value = data;
        });
    });
    // const prevAmount = ref(0);
    const amount = ref(0);
    const clicks = ref(0);
    // function prevHandler() {
    //   // carousel.value.classList.add("prev");
    //   // console.log(carousel.value);

    //   carousel.value.forEach((element) => {
    //     // if (i == 0 && element.style.left <= "800px") return;
    //     element.style.left = element.style.left - 60 + "px";
    //   });
    // }

    function nextHandler() {
      // carousel.value.classList.add("prev");
      // console.log(carousel.value);
      clicks.value += 1;
      console.log(clicks.value);

      if (clicks.value == 5) {
        carousel.value.forEach((element) => {
          element.style.left = 0;
          clicks.value = 1;
        });
        return;
      }
      carousel.value.forEach((element) => {
        element.style.left = "-" + amount.value + "px";
        amount.value += 60;
      });
    }
    // 100 ->
    return {
      destinations,
      isMounted,
      carousel,
      // prevHandler,
      nextHandler,
    };
  },
};
</script>

<style scoped>
.prev {
  transform: translateX(100%);
}

.next {
  transform: translateX(-100%);
}
</style>
