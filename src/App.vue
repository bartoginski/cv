<template>
  <div class="h-screen dark:bg-black">
    <ModeBtn />
    <main
      class="
        flex flex-col
        items-center
        max-w-6xl
        m-auto
        py-5
        text-black
        dark:text-white
      "
    >
      <Avatar />
      siemano
      <SocialIconsVue />
    </main>
  </div>
</template>

<script>
import ModeBtn from "./components/ModeBtn.vue";
import Avatar from "./components/Avatar.vue";
import SocialIconsVue from "./components/SocialIcons.vue";

export default {
  name: "App",
  components: { ModeBtn, Avatar, SocialIconsVue },
  data() {
    return {
    };
  },
};
</script>

<style></style>
