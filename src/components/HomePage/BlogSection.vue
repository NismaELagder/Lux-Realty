<template>
  <div class="w-5/6 m-auto pt-32">
    <div class="head">
      <h3
        class="text-orange-200 tracking-widest text-sm mb-4"
      >
        BLOG
      </h3>
      <h1
        class="text-white text-4xl font-Gilda tracking-tight"
      >
        OUR NEWS & INSIGHTS
      </h1>
    </div>
    <div
      v-if="IsMounted"
      class="flex justify-between pt-16 pb-12"
    >
      <BlogCard
        :data="data[i]"
        v-for="(item, i) in dataLength"
        :key="i"
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
  props: ["length"],
  setup(props) {
    const data = ref([]);
    const IsMounted = ref(false);
    const dataLength = ref(2);

    onMounted(() => {
      fetch("https://lux-realty-db.onrender.com/Insights")
        .then((data) => data.json())
        .then((result) => {
          data.value = result;
          IsMounted.value = true;
          props.length == "full"
            ? ref(data.value.length)
            : ref(props.length);
          console.log(dataLength.value);
        });
    });

    // const dataLength = ref(
    //   props.length == "full"
    //     ? data.value.length
    //     : props.length
    // );

    return { data, IsMounted, dataLength };
  },
};
</script>

<style></style>
