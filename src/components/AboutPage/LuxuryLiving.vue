<template>
  <div class="w-11/12 mx-auto pt-16">
    <div class="w-1/2 pb-12">
      <h3
        class="text-sm text-orange-200 font-Barlow tracking-widest"
      >
        LUXURY LIVING
      </h3>
      <h1 class="text-4xl font-Gilda text-white my-4">
        Residences, Mansions & Penthouses
      </h1>
      <p class="text-slate-400 w-9/12">
        You gain access to an exclusive portfolio that
        embody sophistication, elegance, and unparalleled
        craftsmanship.
      </p>
    </div>
    <div class="gallery flex justify-between">
      <img
        class="w-[23%] leftImg"
        src="https://assets.website-files.com/64e88cc610ddff2adf2e9839/65150bdece3e02e0110262fb_About-1-p-500.jpg"
        alt=""
      /><img
        class="w-[23%]"
        src="https://assets.website-files.com/64e88cc610ddff2adf2e9839/65150bd9c0ce9b00a8ebf59e_About-2-p-500.jpg"
        alt=""
      /><img
        class="w-[23%]"
        src="https://assets.website-files.com/64e88cc610ddff2adf2e9839/65150bdabbb5eddf90b18cf0_About-3.jpg"
        alt=""
      /><img
        class="w-[23%] rightImg"
        src="https://assets.website-files.com/64e88cc610ddff2adf2e9839/65150bdeb28fb05332051171_About-4.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "LuxuryLiving",
};
</script>

<style scoped>
.leftImg {
  mask-image: linear-gradient(
    to right,
    transparent,
    rgba(17, 30, 66, 0.8)
  );
}

.rightImg {
  mask-image: linear-gradient(
    to right,
    rgba(17, 27, 55, 0.9),
    transparent 100%
  );
}
</style>
