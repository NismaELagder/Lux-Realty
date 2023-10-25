<template>
  <div>
    <div
      class="flex flex-col items-center text-center w-4/5 md:w-1/2 m-auto my-8"
    >
      <h3
        class="tracking-widest font-Barlow mb-4 text-orange-200"
      >
        DISCOVER
      </h3>
      <h1
        class="md:text-5xl text-2xl font-Gilda text-white"
      >
        The World Of Luxury
      </h1>
      <img
        src="https://assets.website-files.com/64e88cc610ddff2adf2e9839/64ead6074443d94759bfd7fa_Logo.png"
        alt="logo"
        class="w-2/10 h-16 my-4"
      />
      <p class="md:text-3xl text-lg font-Gilda text-white">
        Our agency has access to an extensive network of
        luxury listings, ensuring that you have access to
        the finest properties in prime locations.
      </p>
    </div>

    <div
      class="discoverValues my-14 md:w-4/6 w-11/12 m-auto"
      v-if="data"
    >
      <div
        v-for="item in data"
        :key="item.id"
        class="flex mb-8"
      >
        <div class="nums w-1/6">
          <div class="text-white pb-3">
            <p
              class="md:p-5 py-5 bg-blue-950 rounded-t-full rounded-b-md md:w-1/2 w-2/3 md:text-base text-xs text-center border-orange-200 border-solid border"
            >
              {{ item["id"] }}
            </p>
          </div>
        </div>
        <div class="content w-5/6">
          <div
            class="img border-s-2 border-solid border-orange-200 pl-2 md:pl-12"
          >
            <img
              :src="item.src"
              alt=""
              data-aos="fade-up"
              data-aos-duration="2s"
              class="md:w-auto w-full"
            />
          </div>
          <div
            v-if="item['id'] % 2 == 0"
            class="flex my-8 flex-wrap"
          >
            <p
              class="text-md border-solid md:border-e-2 px-4 border-orange-200 text-slate-400 font-Barlow"
            >
              {{ item["desc"] }}
            </p>
            <h2
              class="text-3xl md:w-1/2 md:ps-6 ps-4 mt-3 text-white font-Gilda"
            >
              {{ item["title"] }}
            </h2>
          </div>
          <div
            v-else
            class="flex my-8 w-full md:w-auto flex-wrap"
          >
            <h2
              class="text-3xl w-1/3 px-6 text-white font-Gilda"
            >
              {{ item["title"] }}
            </h2>
            <p
              class="text-md border-solid border-s-2 px-4 mt-3 border-orange-200 text-slate-400 font-Barlow"
            >
              {{ item["desc"] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import AOS from "aos";
export default {
  name: "HomeDiscovery",
  setup() {
    const data = ref(null);
    onMounted(async () => {
      AOS.init();
      data.value = await fetch(
        "https://lux-realty-db.onrender.com/discover-section"
      )
        .then((data) => data.json())
        .then((data) => data)
        .catch((err) => err.message);
    });

    return { data };
  },
};
</script>
<style scoped>
.img img {
  max-height: 300px;
  width: 90%;
}
</style>
