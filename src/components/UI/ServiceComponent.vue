<template>
  <div class="w-5/6 ml-24 flex justify-between" :dir="dir">
    <div class="imgs w-1/2 flex justify-between">
      <img :src="imgL" alt="" class="w-5/12 leftImg" />
      <img
        :src="imgR"
        alt=""
        class="w-6/12 rightImg"
        :style="imgLStyle"
      />
    </div>
    <div
      class="content w-1/2 ps-8 flex justify-center flex-col"
    >
      <!-- <h3 class="text-orange-200 mb-4 ps-8">ABOUT US</h3> -->
      <h3 class="text-orange-200 mb-4 ps-8">
        {{ SectionTitle }}
      </h3>

      <!-- <h1 class="text-white font-Gilda text-3xl mb-2">
        Luxury Houses with Quality Comfort
      </h1> -->
      <h1 class="text-white font-Gilda text-3xl mb-2">
        {{ Slogan }}
      </h1>
      <!-- <p class="text-slate-400 font-Barlow text-lg">
        Experience the epitome of luxury living with our
        exceptional collection of houses that offer
        unparalleled comfort.
      </p> -->
      <p class="text-slate-400 font-Barlow text-lg">
        {{ Caption }}
      </p>
      <ButtonComponent
        :BtnTxt="'LEARN MORE'"
        class="text-white w-1/3 px-0"
      />
    </div>
  </div>
</template>

<script>
import ButtonComponent from "./ButtonComponent.vue";
// import ref from "vue";
export default {
  name: "ServiceComponent",
  components: { ButtonComponent },
  props: [
    "Slogan",
    "Caption",
    "SectionTitle",
    "imgL",
    "imgR",
    "dir",
    "imgLStyle",
  ],
};
</script>

<style>
.imgs img {
  object-fit: cover;

  height: 80vh;
}

.leftImg {
  object-position: 100% 40%;
}

.rightImg {
  object-position: 40% 60%;
  mask-repeat: no-repeat;
  mask-image: linear-gradient(
    90deg,
    rgba(17, 27, 55, 0.8),
    transparent 100%
  );
}
</style>
<!-- src="https://assets.website-files.com/64e88cc610ddff2adf2e9839/64e88cc610ddff2adf2e9884_living-room-with-brown-wooden-table-and-chairs.jpg" -->
<!-- src="https://assets.website-files.com/64e88cc610ddff2adf2e9839/64e88cc610ddff2adf2e9884_living-room-with-brown-wooden-table-and-chairs-p-500.jpg" -->
