<template>
  <div
    class="flex justify-between bg-white py-5 sm:px-20 px-2 border-b-2 border-[#fafafa]"
  >
    <h2 class="font-nunitoExtraBold">Where in the world?</h2>
    <div>
      <button @click="toggleTheme()">
        <font-awesome-icon class="mr-2" :icon="iconName" />
        {{ currentTheme }} Mode
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { ThemeConstants } from "../constants/index";

const currentTheme = ref<string>("Dark");

const isDarkTheme = computed(() => currentTheme.value === "Dark");

const iconName = computed(
  () =>
    `fa-regular ${
      isDarkTheme.value
        ? `fa-${ThemeConstants.SUN_ICON}`
        : `fa-${ThemeConstants.MOON_ICON}`
    }`
);

const toggleTheme = () => {
  const parentClassList =
    document.body.firstElementChild?.firstElementChild?.classList;

  const isDark = parentClassList?.toggle(ThemeConstants.DARK_THEME_CLASS);
  currentTheme.value = isDark ? "Dark" : "Light";
  localStorage.setItem(
    ThemeConstants.LOCAL_STORAGE_THEME_KEY,
    currentTheme.value
  );
};
</script>
