<template>
  <div class="min-h-full bg-white dark:bg-black overflow-hidden px-10 md-px-0">
    <ModeBtn />
    <main
      class="
        flex flex-col
        items-center
        max-w-3xl
        m-auto
        py-5
        text-black
        dark:text-white
      "
    >
      <Avatar />
      <EngText v-if="isEnglish" />
      <PlText v-else />
      <SocialIconsVue />
    </main>
    <!-- floating button -->
    <div class="">
      <button
        class="
          fixed
          bottom-5
          right-5
          bg-fire
          text-white
          p-2
          rounded-lg
          w-10
          shake-slow
        "
        @click="isEnglish = !isEnglish"
      >
        {{ isEnglish ? "PL" : "EN" }}
      </button>
    </div>
  </div>
</template>

<script>
import ModeBtn from "./components/ModeBtn.vue";
import Avatar from "./components/Avatar.vue";
import EngText from "./components/EngText.vue";
import PlText from "./components/PlText.vue";
import SocialIconsVue from "./components/SocialIcons.vue";

export default {
  name: "App",
  components: { ModeBtn, Avatar, SocialIconsVue, EngText, PlText },
  data() {
    return {
      isEnglish: true,
    };
  },
};
</script>

<style>
* {
  font-family: "Barlow", sans-serif;
}
</style>
