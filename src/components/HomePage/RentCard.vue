<template>
  <div
    id="product"
    class="relative w-5/6 mx-auto mt-6"
    :style="{
      'background-image':
        'linear-gradient( 360deg ,rgb(17, 27, 55),  transparent) , url(' +
        product.img +
        ')',
      height: '55vh',
    }"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <button
      class="absolute text-white bg-blue-950 top-2 right-3 p-2 text-xs"
    >
      {{ product.purpose }}
    </button>

    <div
      class="w-2/3 m-auto flex flex-col justify-end h-full"
    >
      <h1 class="text-white text-center mb-3 text-xl">
        {{ product.place }}
      </h1>

      <div
        v-if="!hover"
        class="mb-4 text-orange-200 flex justify-between w-2/3 mx-auto items-center text-xs"
      >
        <span class="flex items-center">
          <svg
            class="mr-1"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 640 512"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              class="text-orange-200"
              fill="currentColor"
              d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"
            /></svg
          >{{ product.beds }} Bed
        </span>
        <span class="flex items-center">
          <svg
            class="mr-1"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              class="text-orange-200"
              fill="currentColor"
              d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z"
            />
          </svg>
          {{ product.bath }} Bath</span
        ><span class="flex items-center">
          <svg
            class="mr-1"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              class="text-orange-200"
              fill="currentColor"
              d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
            />
          </svg>
          {{ product.Area }}
        </span>
      </div>
      <div
        v-if="hover"
        data-aos="fade-up"
        class="text-orange-200 text-center text-md py-2 mb-4"
      >
        {{ product.price }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "RentCard",
  props: ["product"],
  setup() {
    const hover = ref(false);
    return { hover };
  },
};
</script>

<style scoped>
#product {
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
