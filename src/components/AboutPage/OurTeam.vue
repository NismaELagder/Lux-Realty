<template>
  <div class="text-center pt-32 pb-16 m-auto">
    <h1
      class="text-white text-5xl font-Gilda tracking-tight"
    >
      Meet Our Team
    </h1>
    <img
      src="https://assets.website-files.com/64e88cc610ddff2adf2e9839/64ead6074443d94759bfd7fa_Logo.png"
      alt=""
      class="w-[50px] mx-auto my-4"
    />
    <p class="text-white text-3xl font-Gilda w-5/12 m-auto">
      When it comes to the world of luxury real estate, our
      agents are unmatched in their expertise and commitment
      to delivering unparalleled results.
    </p>
  </div>
  <div
    class="flex justify-between w-8/12 mx-auto"
    v-if="IsMounted"
  >
    <TeamMember
      :member="item"
      v-for="item in team"
      :key="item?.name"
    />
  </div>
  <button
    :class="[
      hide ? 'hidden' : '',
      'bg-orange-200 text-blue-950 px-3 py-3 my-8 mx-auto max-w-2/12 block text-sm',
    ]"
  >
    VIEW ALL AGENTS
  </button>
</template>

<script>
import { ref, onMounted } from "vue";
import TeamMember from "./TeamMember.vue";

export default {
  name: "OurTeam",
  setup() {
    const team = ref([]);
    const IsMounted = ref(false);
    onMounted(() => {
      fetch("https://lux-realty-db.onrender.com/Team")
        .then((data) => data.json())
        .then((data) => {
          team.value = data;
          IsMounted.value = true;
        });
    });
    return { IsMounted, team };
  },
  components: { TeamMember },
  props: ["hide"],
};
</script>

<style></style>
