<template>
  <div class="flex pt-8 pb-32">
    <div class="w-1/2 ml-4 img h-[70vh]"></div>
    <div class="w-1/2">
      <h3
        class="font-Barlow tracking-widest text-orange-300 text-sm"
      >
        CONTACT US
      </h3>
      <h2 class="font-Gilda text-3xl text-white my-4">
        Stay in touch
      </h2>
      <p class="text-lg font-Barlow pr-24 text-slate-400">
        We encourage you to reach out to our dedicated team
        for any inquiries, personalized assistance, or to
        schedule a consultation.
      </p>
      <form @submit.prevent="submitHandler">
        <input
          type="text"
          name="fullName"
          @blur="blurHandler"
          minlength="3"
          v-model="fullName"
          placeholder="Full Name"
          class="block w-5/6 py-2 my-8 bg-transparent text-slate-400 placeholder:text-slate-400 border-b border-orange-400 border-opacity-40"
        />
        <p v-if="nameError" class="text-red-500">
          Name should contain at least 3 letters
        </p>
        <input
          @blur="blurHandler"
          name="email"
          type="email"
          v-model="email"
          placeholder="email address"
          class="block w-5/6 py-2 my-8 bg-transparent text-slate-400 placeholder:text-slate-400 border-b border-orange-400 border-opacity-40"
        />
        <p v-if="emailError" class="text-red-500">
          Email is not valid
        </p>
        <textarea
          name="message"
          @blur="blurHandler"
          v-model="message"
          cols="30"
          rows="5"
          minlength="15"
          placeholder="Your Message"
          class="block w-5/6 py-2 my-8 bg-transparent placeholder:text-slate-400 text-slate-400 border-b border-orange-400 border-opacity-40"
        ></textarea>
        <p v-if="messageError" class="text-red-500">
          Message is not valid
        </p>
        <button
          type="submit"
          class="bg-orange-300 text-[#111B37] px-4 py-3 text-sm font-Barlow font-bold"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import router from "@/router";

export default {
  name: "ContactForm",
  setup() {
    const fullName = ref("");
    const email = ref("");
    const message = ref("");
    const nameError = ref("");
    const emailError = ref("");
    const messageError = ref("");
    function blurHandler(e) {
      e.target.name == "fullName" &&
      e.target.value.length < 3
        ? (nameError.value =
            "Full Name should be at least three characters")
        : (nameError.value = "");

      e.target.name == "email" && !e.target.validity
        ? (emailError.value = "Invalid Email")
        : (emailError.value = "");

      e.target.name == "message" &&
      e.target.value.length < 15
        ? (messageError.value =
            "Message should be at least 15 characters long")
        : (messageError.value = "");
    }

    function submitHandler() {
      fetch("https://lux-realty-db.onrender.com/messages", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          "Full name": fullName.value,
          email: email.value,
          message: message.value,
        }),
      }).then(() => router.push({ name: "home" }));
    }

    return {
      fullName,
      email,
      message,
      submitHandler,
      emailError,
      nameError,
      messageError,
      blurHandler,
    };
  },
};
</script>

<style scoped>
.img {
  background: linear-gradient(
      0deg,
      rgba(17, 27, 55, 1) 0%,
      rgba(0, 0, 0, 0) 50%,
      rgba(17, 27, 55, 1) 100%
    ),
    linear-gradient(
      360deg,
      rgba(17, 27, 55, 1) 0%,
      transparent 50%
    ),
    url("https://assets.website-files.com/64e88cc610ddff2adf2e9839/64e8d1333a4d7a1d88c53953_a-modern-living-room-with-a-large-window.jpg");
  background-size: 90% 100%;
  background-repeat: no-repeat;
}

input:invalid,
textarea:invalid {
  border: solid red;
}

input::selection,
textarea::selection {
  background: #fff !important;
}

input:focus,
textarea:focus {
  border: none;
}
</style>
