<template>
  <div class="bg-[#1C2745]">
    <HeaderComponent> </HeaderComponent>
    <router-view />
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "./components/Header/HeaderComponent.vue";
import FooterComponent from "./components/Footer/FooterComponent.vue";
export default {
  name: "App",
  components: { HeaderComponent, FooterComponent },
};
</script>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #f2f4f7;
  }
}
</style>
