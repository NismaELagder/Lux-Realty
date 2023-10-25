<template>
  <div
    class="md:p-32 pb-16 flex justify-between flex-col md:flex-row bg-[#161B2B]"
  >
    <div
      class="logo md:w-1/3 w-11/12 mx-auto md:mx-0 py-4 md:py-0"
    >
      <div class="flex">
        <img
          src="https://assets.website-files.com/64e88cc610ddff2adf2e9839/64ead6074443d94759bfd7fa_Logo.png"
          alt="Logo"
          class="w-[50px] mb-2"
        />
        <div class="pl-4 flex flex-col">
          <h1
            class="text-orange-200 text-2xl font-Gilda tracking-tight"
          >
            LUXREALTY
          </h1>
          <h6
            class="text-slate-300 text-xs tracking-widest"
          >
            PROPERTIES
          </h6>
        </div>
      </div>
      <p
        class="md:text-lg text-sm text-slate-500 w-2/3 md:w-5/6 mb-4 text-Barlow"
      >
        Our portfolio includes exquisite properties nestled
        in prime locations renowned for their desirability.
      </p>
      <div class="flex justify-between w-1/3">
        <router-link to="" class="mb-4"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.2em"
            viewBox="0 0 512 512"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              fill="currentColor"
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
            /></svg
        ></router-link>
        <router-link to="" class="mb-4"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.2em"
            viewBox="0 0 448 512"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              fill="currentColor"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            /></svg
        ></router-link>
        <router-link to="" class="mb-4"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.2em"
            viewBox="0 0 448 512"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              fill="currentColor"
              d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"
            /></svg
        ></router-link>
        <router-link to="" class="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.2em"
            viewBox="0 0 576 512"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              fill="currentColor"
              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            />
          </svg>
        </router-link>
      </div>
    </div>
    <div
      class="addresses flex justify-between md:w-7/12 w-11/12 mx-auto md:mx-0"
    >
      <address class="md:w-auto">
        <h3 class="md:text-2xl text-bold text-white pb-3">
          Explore
        </h3>
        <ul>
          <li
            class="text-white font-Barlow md:text-base text-sm"
          >
            <router-link to="">Listings</router-link>
          </li>
          <li
            class="text-white font-Barlow md:text-base text-sm"
          >
            <router-link to="">Agents</router-link>
          </li>
          <li
            class="text-white font-Barlow md:text-base text-sm"
          >
            <router-link to="">About</router-link>
          </li>
          <li
            class="text-white font-Barlow md:text-base text-sm"
          >
            <router-link to="">Contact</router-link>
          </li>
          <li
            class="text-white font-Barlow md:text-base text-sm"
          >
            <router-link to="">Blog</router-link>
          </li>
        </ul>
      </address>
      <address class="md:w-auto">
        <h3 class="md:text-2xl text-bold text-white pb-3">
          Utilities
        </h3>
        <ul>
          <li
            class="text-white font-Barlow md:text-base text-sm"
          >
            <router-link to="">Design Source</router-link>
          </li>

          <li
            class="text-white font-Barlow md:text-base text-sm"
          >
            <router-link to="">Instructions</router-link>
          </li>
          <li
            class="text-white font-Barlow md:text-base text-sm"
          >
            <router-link to="">Licenses</router-link>
          </li>
          <li class="text-white font-Barlow">
            <router-link to="">Password</router-link>
          </li>
          <li class="text-white font-Barlow">
            <router-link to="">404</router-link>
          </li>
        </ul>
      </address>
      <address class="w-1/3">
        <h3 class="md:text-2xl text-bold text-white pb-3">
          Contact
        </h3>
        <ul>
          <li
            class="text-slate-500 font-Barlow md:text-base text-sm"
          >
            XYZ Times faSquare, New York, 10036, United
            States
          </li>
          <li
            class="text-white font-Barlow md:text-base text-sm"
          >
            <router-link to=""
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                class="inline pr-2"
              >
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  fill="currentColor"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
              +123 456789</router-link
            >
          </li>
          <li
            class="text-white font-Barlow md:text-base text-sm"
          >
            <router-link to="">
              <svg
                class="inline pr-2"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  fill="currentColor"
                  d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                />
              </svg>
              hello@luxrealty.com</router-link
            >
          </li>
        </ul>
      </address>
    </div>
  </div>
  <p class="text-white text-center bg-[#111521] py-3">
    &copy; 2023 LuxRealty. All Rights Reserved. <br />
    Developed By: Nisma Elagder
  </p>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style></style>
