<template>
  <div>
    <div class="text-center pt-32 pb-16">
      <h3
        class="text-orange-200 tracking-widest text-md mb-4"
      >
        BEYOND EXPECTATIONS
      </h3>
      <h1
        class="text-white text-5xl font-Gilda tracking-tight"
      >
        Our Values
      </h1>

      <UIDivider />
      <p
        class="text-white text-2xl font-Gilda w-1/2 m-auto"
      >
        At our luxury real estate agency, we hold four core
        values that define our approach to serving our
        esteemed clients
      </p>
    </div>
    <div class="expectations flex w-5/6 m-auto">
      <div class="img w-1/2">
        <img
          src="https://assets.website-files.com/64e88cc610ddff2adf2e9839/64e88cc610ddff2adf2e987d_brown-and-black-concrete-building.jpeg"
          alt=""
          class="w-10/12"
        />
      </div>
      <div
        class="values w-1/2 flex flex-wrap justify-between pt-16"
      >
        <div
          :key="value.title"
          v-for="(value, i) in values"
          :class="[
            i == 1 || i == 3 ? 'pt-16' : 'pt-0',
            'w-5/12',
            'h-fit',
          ]"
        >
          <h1 class="text-white text-2xl font-Gilda">
            {{ value.title }}
          </h1>
          <h3
            class="text-orange-200 tracking-widest text-md font-Barlow"
          >
            {{ value.slogan }}
          </h3>
          <p class="text-slate-400 pt-3 leading-7">
            {{ value.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UIDivider from "@/components/UI/DividerComponent.vue";
import { ref, onMounted } from "vue";
export default {
  name: "BeyondExpectations",
  components: { UIDivider },
  setup() {
    const values = ref([]);
    onMounted(() => {
      fetch(
        "https://lux-realty-db.onrender.com/Expectations"
      )
        .then((data) => data.json())
        .then((data) => (values.value = data));
    });
    return { values };
  },
};
</script>

<style></style>
