<template>
  <div class="pt-32">
    <div class="text-center pb-24">
      <h3
        class="text-orange-200 tracking-widest text-md mb-4"
      >
        TESTIMONIALS
      </h3>
      <h1
        class="text-white text-5xl font-Gilda tracking-tight"
      >
        Client Experiences
      </h1>
    </div>
    <div
      class="clients flex justify-between md:w-4/6 w-11/12 m-auto flex-col md:flex-row"
    >
      <div
        class="md:w-1/4 w-full flex md:flex-col justify-between"
        @click.stop
      >
        <div
          v-for="(client, i) in clients"
          :key="i"
          @click="reviewHandler($event)"
          :review="client?.review"
          @click.stop="reviewHandler($event)"
          class="flex items-center bg-blue-950 md:py-6 px-12 mb-4 md:m-auto w-[33%] md:w-auto"
        >
          <img
            :src="client?.img"
            alt=""
            class="rounded-full w-1/3 md:w-1/4 mr-4"
          />
          <p
            class="md:text-base text-[11px] tracking-wider w-1/2 text-orange-200"
          >
            {{ client?.name }}
          </p>
        </div>
      </div>
      <div
        class="pt-12 pb-16 md:pb-0 px-16 bg-blue-950 md:w-2/3 w-full"
      >
        <div class="flex justify-between items-end h-1/3">
          <span>
            <img
              src="https://assets.website-files.com/64e88cc610ddff2adf2e9839/64e88cc610ddff2adf2e9845_star.png"
              alt=""
              class="w-[16px] inline"
              v-for="item in 5"
              :key="item"
          /></span>
          <img
            src="https://assets.website-files.com/64e88cc610ddff2adf2e9839/64e88cc610ddff2adf2e9838_quote.png"
            alt=""
            class="w-1/4 opacity-25"
          />
        </div>
        <p class="pt-12 text-slate-300 text-lg">
          {{ review }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "ClientExperience",
  setup() {
    const clients = ref([]);
    const review = ref("");
    onMounted(() => {
      fetch("https://lux-realty-db.onrender.com/Clients")
        .then((data) => data.json())
        .then((data) => {
          clients.value = data;
          review.value = clients.value[0].review;
        });
    });

    function reviewHandler(e) {
      review.value = e.target.attributes.review.value;
    }
    return { clients, reviewHandler, review };
  },
};
</script>

<style></style>
