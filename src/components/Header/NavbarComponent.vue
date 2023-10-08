<template>
  <!-- <div
    class="h-2/6 flex justify-between pr-32 items-center"
  > -->
  <nav
    class="flex justify-between pr-32 items-center w-1/2"
  >
    <router-link
      :to="{ name: 'home' }"
      class="hover:text-orange-300 text-xs font-Barlow"
      >HOME</router-link
    >
    <router-link
      :to="{ name: 'about' }"
      class="hover:text-orange-300 text-xs font-Barlow"
      >ABOUT US</router-link
    >
    <router-link
      :to="{ name: 'listings' }"
      class="hover:text-orange-300 text-xs font-Barlow"
      >LISTINGS</router-link
    >
    <router-link
      :to="{ name: 'agents' }"
      class="hover:text-orange-300 text-xs font-Barlow"
      >AGENTS</router-link
    >
    <router-link
      :to="{ name: 'blogs' }"
      class="hover:text-orange-300 text-xs font-Barlow"
      >BLOGS</router-link
    >
    <router-link
      :to="{ name: 'contact' }"
      class="hover:text-orange-300 text-xs font-Barlow"
      >CONTACT US</router-link
    >
    <button
      type="button"
      class="bg-blue-950 p-4 rounded-full hover:shadow-blue-900 shadow"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 576 512"
        class="text-sm"
      >
        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          fill="currentColor"
          class="text-orange-200"
          d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
        />
      </svg>
    </button>
  </nav>
  <!-- </div> -->
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>
