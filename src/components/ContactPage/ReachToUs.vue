<template>
  <div class="">
    <div class="text-center">
      <h1 class="text-5xl text-white font-Gilda">
        Reach Out To Us
      </h1>
      <UIDivider />
      <p
        class="w-5/12 mx-auto text-white text-2xl font-Gilda"
      >
        Feel free to contact us for a consultation, where
        our seasoned agents will curate a tailored selection
        of exquisite properties.
      </p>
    </div>
    <div
      class="w-3/4 mx-auto gallery flex flex-wrap justify-between pt-16 pb-8"
    >
      <div class="w-[30%] mb-8">
        <img
          src="https://assets.website-files.com/64e88cc610ddff2adf2e9839/64e88cc610ddff2adf2e9866_brown-wooden-cabinet-near-green-and-white-table.jpeg"
          alt=""
          class="h-[50vh] w-full"
        />
      </div>
      <div
        class="flex justify-center items-center flex-col bg-[#1C2745] px-4 mb-8 text-white w-[32%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 512 512"
        >
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            fill="currentColor"
            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
          />
        </svg>
        <h3 class="font-Gilda text-4xl mt-2 mb-6">
          Email Us
        </h3>
        <p class="text-lg text-slate-500 text-center">
          For any inquiries, questions we are just an email
          away.
        </p>

        <p class="text-orange-300 font-Barlow text-sm pt-2">
          HELLO@LUXREALTY.COM
        </p>
      </div>
      <div class="w-[32%]">
        <img
          class="h-[50vh] w-full"
          src="https://assets.website-files.com/64e88cc610ddff2adf2e9839/64eaf1aacd5072aa98223ab7_Hero-Image-2.jpg"
          alt=""
        />
      </div>
      <div
        class="flex justify-center items-center flex-col bg-[#1C2745] px-4 text-white w-[32%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 512 512"
        >
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            fill="currentColor"
            d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
          />
        </svg>
        <h3 class="font-Gilda text-4xl mt-2 mb-6">
          Call Us
        </h3>
        <p class="text-lg text-slate-500 text-center">
          We are available to speak with you and provide
          support.
        </p>

        <p class="text-orange-300 font-Barlow text-md pt-2">
          +123 456789
        </p>
      </div>
      <div class="w-[32%]">
        <img
          class="h-[50vh] w-full"
          src="https://assets.website-files.com/64e88cc610ddff2adf2e9839/64e88cc610ddff2adf2e9884_living-room-with-brown-wooden-table-and-chairs.jpg"
          alt=""
        />
      </div>
      <div
        class="flex justify-center items-center flex-col text-white w-[32%] bg-[#1C2745] px-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 384 512"
        >
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            fill="currentColor"
            d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
          />
        </svg>

        <h3 class="font-Gilda text-4xl mt-2 mb-6">
          Location
        </h3>
        <p class="text-lg text-slate-500 text-center">
          Visit us at our office and let us assist you with
          your requests.
        </p>

        <p class="text-orange-300 font-Barlow text-sm pt-2">
          XYZ TIMES SQ, NEW YORK, 10036
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import UIDivider from "@/components/UI/DividerComponent.vue";
export default {
  name: "ReachToUs",
  components: { UIDivider },
};
</script>

<style></style>
