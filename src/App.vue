<template>
  <div class="bg-blue-950">
    <HeaderComponent> </HeaderComponent>
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "./components/Header/HeaderComponent.vue";
export default {
  name: "App",
  components: { HeaderComponent },
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
