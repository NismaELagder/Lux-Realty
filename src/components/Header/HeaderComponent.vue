<template>
  <div
    class="flex justify-between absolute w-full z-10 md:bg-transparent bg-blue-900 h-[13vh] md:h-[25vh]"
  >
    <LogoComponent />
    <NavbarComponent />
  </div>
</template>

<script>
import NavbarComponent from "./NavbarComponent.vue";
import LogoComponent from "./LogoComponent.vue";
export default {
  name: "HeaderComponent",
  components: { NavbarComponent, LogoComponent },
};
</script>

<style scoped></style>
