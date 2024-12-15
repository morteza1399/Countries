<template>
  <div
    class="flex justify-between items-center dark:bg-[#2b3945] bg-white dark:text-white text-[#111517] py-5 sm:px-20 px-2 border-b-2 dark:border-[#202c37] border-[#fafafa] text-[12px]"
  >
    <h2 class="font-nunitoExtraBold">Where in the world?</h2>
    <div>
      <button @click="toggleTheme()">
        <font-awesome-icon class="mr-2" :icon="iconName" />
        {{ colorMode.preference }} Mode
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ThemeConstants } from "~/constants";

const iconName = computed(
  () =>
    `fa-regular ${
      colorMode.preference === "Dark"
        ? `fa-${ThemeConstants.MOON_ICON}`
        : `fa-${ThemeConstants.SUN_ICON}`
    }`
);

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "Dark";
  },
  set() {
    colorMode.preference = colorMode.value === "Dark" ? "Light" : "Dark";
  }
});

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.body.classList.add(ThemeConstants.DARK_THEME_CLASS);
  } else {
    document.body.classList.remove(ThemeConstants.DARK_THEME_CLASS);
  }
};

onMounted(() => {
  if (localStorage.getItem("nuxt-color-mode") === "Light") {
    document.body.classList.add(ThemeConstants.DARK_THEME_CLASS);
  }
});
</script>
