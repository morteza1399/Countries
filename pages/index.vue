<template>
  <div>
    <div class="flex sm:flex-row flex-col justify-between text-[12px]">
      <div class="m-auto sm:m-0">
        <font-awesome-icon
          class="absolute my-4 mx-6 dark:text-white text-[#858585]"
          icon="fa-solid fa-search"
        />
        <input
          type="text"
          class="py-3 pl-14 sm:w-96 w-[90vw] outline-none rounded dark:bg-[#2b3945] bg-white dark:text-white text-[#858585]"
          placeholder="Search for a country..."
          v-model="country"
          @input="searchCountry"
        />
      </div>
      <div class="mx-4 mt-7 mb-0 sm:m-0">
        <button
          class="flex justify-between items-center p-3 w-40 rounded dark:bg-[#2b3945] bg-white dark:text-white text-black"
          @click="toggleDropdwon"
        >
          <span class="mr-3">{{ currentRegion }}</span>
          <font-awesome-icon class="dark:text-white text-black" icon="fa-solid fa-angle-down" />
        </button>
        <ul
          v-show="dropdown"
          class="absolute w-40 mt-1 dark:bg-[#2b3945] bg-white dark:text-white text-black"
        >
          <li
            class="cursor-pointer px-3 py-2"
            v-for="(region, index) in regions"
            :key="index"
            @click.prevent="changeRegion(region)"
          >
            <a href="#">{{ region }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-wrap sm:gap-[3.45rem] my-8">
      <!-- [6.75rem] -->
      <NuxtLink
        :to="useGenerateLink(item)"
        class="dark:bg-[#2b3945] dark:text-white bg-white text-black rounded my-3 mx-auto sm:m-0"
        v-for="(item, index) in filteredByRegion"
        :key="index"
      >
        <img class="h-40 w-64 rounded-t" :src="item.flags.png" alt="flag" />
        <div class="flex flex-col justify-start justify-items-start w-64 h-40 p-2">
          <h3
            class="overflow-hidden text-clip whitespace-nowrap font-nunitoExtraBold my-2"
          >{{ item.name }}</h3>
          <p class="text-xs my-1">
            <b class="font-nunitoMedium">Population:</b>
            {{ item.population }}
          </p>
          <p class="text-xs my-1">
            <b class="font-nunitoMedium">Region:</b>
            {{ item.region }}
          </p>
          <p class="text-xs my-1">
            <b class="font-nunitoMedium">Capital:</b>
            {{ item.capital }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const dropdown = ref<boolean>(false);
const regions: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const currentRegion = ref<string>("Filter by Region");
const filteredByRegion = ref<any>([]);
const country = ref<string>("");

const data = await useCountryApi();

const filteredData = computed(() => {
  return data.filter((item: any) => item.region === currentRegion.value);
});

const toggleDropdwon = () => {
  dropdown.value = !dropdown.value;
};

const changeRegion = (region: string) => {
  currentRegion.value = region;

  filteredByRegion.value = regions.includes(currentRegion.value)
    ? filteredData.value
    : data;
  dropdown.value = false;
};

const searchCountry = () => {
  const normalizedCountryName: string = country.value.toLowerCase();

  let foundCountry = filteredByRegion.value.find(
    (item: any) => item.name.toLowerCase() === normalizedCountryName
  );

  if (!foundCountry) {
    filteredByRegion.value = regions.includes(currentRegion.value)
      ? filteredData.value
      : data;
  } else {
    filteredByRegion.value = [foundCountry];
  }
};

onMounted(() => {
  filteredByRegion.value = data;
});
</script>
