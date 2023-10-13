<template>
  <aside
    class="w-1/6 flex flex-col justify-start pt-12 pl-6 mr-4 bg-[#1C2745] text-white leading-8 sticky"
  >
    <h1 class="text-2xl font-Gilda">Locations</h1>
    <ul>
      <li class="font-Barlow">
        <router-link :to="{}">Tokyo</router-link>
      </li>
      <li class="font-Barlow">
        <router-link :to="{}">Paris</router-link>
      </li>
      <li class="font-Barlow">
        <router-link :to="{}">New York</router-link>
      </li>
      <li class="font-Barlow">
        <router-link :to="{}">London</router-link>
      </li>
      <li class="font-Barlow">
        <router-link :to="{}">Los Angeles</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {};
</script>

<style></style>
