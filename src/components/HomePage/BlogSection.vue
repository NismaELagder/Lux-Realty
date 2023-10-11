<template>
  <div class="w-5/6 m-auto pt-32">
    <div class="head">
      <h3
        class="text-orange-200 tracking-widest text-md mb-4"
      >
        BLOG
      </h3>
      <h1
        class="text-white text-5xl font-Gilda tracking-tight"
      >
        OUR NEWS & INSIGHTS
      </h1>
    </div>
    <div
      v-if="IsMounted"
      class="flex justify-between py-16"
    >
      <BlogCard
        :data="item"
        v-for="item in data"
        :key="item['id']"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import BlogCard from "./BlogCard.vue";
export default {
  name: "BlogSection",
  components: { BlogCard },
  setup() {
    const data = ref([]);
    const IsMounted = ref(false);
    onMounted(() => {
      fetch("https://lux-realty-db.onrender.com/Insights")
        .then((data) => data.json())
        .then((result) => {
          data.value = result;
          IsMounted.value = true;
        });
    });

    return { data, IsMounted };
  },
};
</script>

<style></style>
