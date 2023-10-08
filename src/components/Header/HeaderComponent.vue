<template>
  <div class="flex justify-between absolute w-full z-10">
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

<style scoped>
div {
  height: 25vh;
}
</style>
