<template>
  <div class="flex">
    <img class="w-1/2" alt="" :src="data.img" />
    <div class="flex flex-col justify-center w-1/2 pl-16">
      <div
        id="id"
        class="flex items-center text-white mb-6"
      >
        <span class="pr-4">0{{ data.id }}</span>
        <hr class="border-solid border-white w-1/3" />
        <span class="pl-4">05</span>
      </div>
      <h1
        id="place"
        class="text-4xl bg-greyGradient bg-clip-text text-transparent tracking-wider mb-4"
      >
        {{ data.place }}
      </h1>
      <p
        id="props"
        class="tracking-widest text-sm text-white"
      >
        {{ data.properties }} PROPERTIES
      </p>
      <span
        class="flex w-1/2 items-center text-orange-200 mt-16"
        ><hr
          class="w-1/3 border-orange-200 border-solid pr-8"
        />
        <span class="pl-4">VIEW</span></span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "DestinationCard",
  props: ["data"],
};
</script>

<style></style>
