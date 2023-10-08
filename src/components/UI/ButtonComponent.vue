<template>
  <button
    dir="ltr"
    class="rounded-sm bg-blue-950 mt-4 px-5 border-solid border-orange-200 border-x border-y py-3 w-2/8"
  >
    <span class="pr-1">{{ BtnTxt }} </span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="2em"
      viewBox="0 0 448 512"
      class="inline"
    >
      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        fill="currentColor"
        class="text-orange-300"
        d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
      />
    </svg>
  </button>
</template>
<script>
export default {
  name: "ButtonComponent",
  props: ["BtnTxt"],
};
</script>
<style scoped>
button svg {
  font-size: xx-small;
  animation: btnsAnimate 1.5s infinite;
}

.carousel button[ref="prevBtn"] svg {
  animation: prevAnimation 1.5s infinite !important;
}
/* path { */
/* color: aliceblue;
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
