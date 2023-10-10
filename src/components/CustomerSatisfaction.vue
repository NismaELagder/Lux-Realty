<template>
  <div class="flex justify-between ml-20 mt-16 p">
    <div
      id="content"
      class="flex flex-col justify-center border-solid border-r-[1px] w-1/2 border-slate-300 mr-1"
    >
      <img
        src="https://assets.website-files.com/64e88cc610ddff2adf2e9839/64ead6074443d94759bfd7fa_Logo.png"
        alt=""
        class="h-[10vh] w-[11%]"
      />
      <h1 class="text-5xl font-Gilda mt-8 mb-4 text-white">
        Your Satisfaction Is Paramount
      </h1>
      <p class="text-slate-400 text-lg w-5/6">
        With an unwavering commitment to excellence, our
        team of experienced professionals is ready to
        provide personalized assistance and guidance.
      </p>
      <button
        class="py-4 text-blue-950 bg-orange-200 w mt-6 w-3/12"
      >
        GET STARTED
      </button>
    </div>

    <div class="w-1/2 flex justify-end" id="img">
      <img
        src="https://assets.website-files.com/64e88cc610ddff2adf2e9839/64e88cc610ddff2adf2e9883_a-chair-in-a-room-Square-p-1080.jpg"
        alt=""
        class="w-5/6"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerSatisfaction",
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
