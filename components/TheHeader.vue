<template>
  <div
    class="flex justify-between items-center bg-[#2b3945] text-white py-5 sm:px-20 px-2 border-b-2 border-[#202c37] text-[12px]"
  >
    <!-- border-[#fafafa]  dark:bg-white dark:text-[#111517]-->
    <h2 class="font-nunitoExtraBold">Where in the world?</h2>
    <div>
      <button @click="toggleTheme()">
        <font-awesome-icon class="mr-2" :icon="iconName" />
        {{ ttt }} Mode
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { ref, computed } from "vue";
import { ThemeConstants } from "~/constants";

const currentTheme = ref<string>("Light");

let  ttt = ref<string>("");

const isDarkTheme = computed(() => currentTheme.value === "Dark");

const iconName = computed(
  () =>
    `fa-regular ${
      isDarkTheme.value
        ? `fa-${ThemeConstants.MOON_ICON}`
        : `fa-${ThemeConstants.SUN_ICON}`
    }`
);

// const test = computed(() => {
//   // if (process.client) {
//     if (localStorage.getItem(ThemeConstants.LOCAL_STORAGE_THEME_KEY) !== null) {
//       currentTheme.value =
//         localStorage.getItem(ThemeConstants.LOCAL_STORAGE_THEME_KEY) || "Light";
//       return currentTheme.value;
//     }
//   // }
//   // return "Light";
// });

const toggleTheme = () => {
  const parentClassList = document.body.classList;

  let isDark = parentClassList.contains("dark");
  // parentClassList?.toggle(ThemeConstants.DARK_THEME_CLASS);
  if (isDark) {
    parentClassList.remove("dark");
  } else {
    parentClassList.add("dark");
  }
  currentTheme.value = isDark ? "Light" : "Dark";
  localStorage.setItem(
    ThemeConstants.LOCAL_STORAGE_THEME_KEY,
    currentTheme.value
  );
};

onBeforeMount(() => {
  if (process.client) {
    if (localStorage.getItem(ThemeConstants.LOCAL_STORAGE_THEME_KEY) !== null) {
      currentTheme.value = localStorage.getItem(
        ThemeConstants.LOCAL_STORAGE_THEME_KEY
      )!;
    }
    toggleTheme()
    ttt.value = localStorage.getItem(
        ThemeConstants.LOCAL_STORAGE_THEME_KEY
      )!;
  }
});
</script>
