<template>
  <div
    class="flex justify-between md:flex-row flex-col md:ml-auto md:mr-4 md:w-11/12 mt-16"
  >
    <div
      id="content"
      class="flex flex-col justify-center md:border-solid md:border-r border-slate-300 md:w-1/2 md:pr-1"
    >
      <img
        src="https://assets.website-files.com/64e88cc610ddff2adf2e9839/64ead6074443d94759bfd7fa_Logo.png"
        alt=""
        class="h-[10vh] w-[11%] md:mx-0 mx-auto"
      />
      <h1
        class="md:text-5xl text-4xl font-Gilda mt-8 mb-4 text-white text-center md:text-left"
      >
        Your Satisfaction Is Paramount
      </h1>
      <p
        class="text-slate-400 md:text-lg w-11/12 md:w-5/6 text-center md:text-left md:mx-0 mx-auto"
      >
        With an unwavering commitment to excellence, our
        team of experienced professionals is ready to
        provide personalized assistance and guidance.
      </p>
      <button
        class="py-4 text-blue-950 bg-orange-200 mt-6 w-3/12 mx-auto md:mx-0 md:mb-0 mb-4"
      >
        GET STARTED
      </button>
    </div>

    <div
      class="md:w-1/2 w-full"
      id="img"
      data-aos="zoom-in"
      data-aos-duration="2.2s"
    >
      <img
        src="https://assets.website-files.com/64e88cc610ddff2adf2e9839/64e88cc610ddff2adf2e9883_a-chair-in-a-room-Square-p-1080.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import AOS from "aos";
export default {
  name: "CustomerSatisfaction",
  setup() {
    AOS.init();
  },
};
</script>

<style scoped>
#img {
  mask-image: linear-gradient(
    270deg,
    #1f3261,
    transparent 80%
  );
}

#img img {
  mask-image: linear-gradient(
    180deg,
    #1f3261,
    transparent 100%
  );
}
</style>
