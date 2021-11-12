<template>
  <div class="flex justify-end p-4">
    <div @click="toggleMode" v-if="isLightMode">
      <button class="text-black cursor-pointer">
        Turn dark <span class="text-fire">mode</span>
      </button>
    </div>
    <button @click="toggleMode" v-else>
      <span class="text-white cursor-pointer"
        >Turn light <span class="text-fire">mode</span></span
      >
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLightMode: true,
    };
  },
  methods: {
    toggleMode() {
      const html = document.querySelector("html");

      this.isLightMode
        ? html.classList.add("dark")
        : html.classList.remove("dark");
      this.isLightMode = !this.isLightMode;
    },
  },
};
</script>

<style lang="scss" scoped></style>
