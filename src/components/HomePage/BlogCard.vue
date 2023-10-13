<template>
  <div class="w-[48%] bg-blue-950 mb-8">
    <div class="relative">
      <img :src="data['img']" alt="" />
      <p
        class="absolute right-4 top-3 bg-blue-950 tracking-widest text-orange-200 px-4 text-center p-2"
      >
        {{ data["purpose"] }}
      </p>
    </div>
    <div class="content p-8">
      <h1 class="text-2xl text-white font-Gilda">
        {{ data["title"] }}
      </h1>
      <p class="text-md text-slate-400">
        <!-- {{ data["summary"] }} -->
        {{ summary }}...
      </p>
      <p class="text-md my-6 text-slate-400">
        By {{ data["owner"] }}
      </p>
      <button
        class="text-white bg-darkBlue border-solid border-orange-200 border-[1px] px-7 py-4 text-sm font-Barlow rounded-md"
      >
        READ MORE
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "BLogCard",
  props: ["data"],
  setup(props) {
    const summary = computed(() =>
      props.data.summary.slice(0, 148)
    );

    return { summary };
  },
};
</script>

<style></style>
