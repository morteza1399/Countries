<template>
  <div class="dark:text-white text-black">
    <div class="flex my-10">
      <NuxtLink
        @click="$router.back()"
        class="font-bold mx-6 sm:mx-0 py-2 px-8 rounded cursor-pointer dark:bg-[#2b3945] dark:text-white dark:hover:bg-transparent bg-white text-black hover:bg-gray-100 transition-all"
      >
        <font-awesome-icon
          class="dark:text-white text-[#858585] mx-1"
          icon="fa-solid fa-arrow-left"
        />Back
      </NuxtLink>
    </div>
    <div class="flex flex-col sm:flex-row sm:gap-12">
      <div class="flex w-full">
        <img
          class="w-[90%] m-auto sm:w-full sm:h-full"
          :src="`${countryInfo.flag}`"
          :alt="`${countryInfo.name}`"
        />
      </div>
      <div class="flex flex-col w-full p-6">
        <h2 class="font-nunitoExtraBold my-6">{{ countryInfo.name }}</h2>
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-0">
          <div class="flex flex-col w-full">
            <p v-for="(item, index) in filteredCountryInfo" class="w-full my-1">
              <b class="font-nunitoMedium">{{ `${index}:` }}</b>
              {{ item }}
            </p>
          </div>
          <div class="flex flex-col w-full">
            <p class="w-full my-1">
              <b class="font-nunitoMedium">Top Level Domain:</b>
              {{ topLevelDomain }}
            </p>
            <p class="w-full my-1">
              <b class="font-nunitoMedium">Currencies:</b>
              {{ currencies }}
            </p>
            <p class="w-full my-1">
              <b class="font-nunitoMedium">Languages:</b>
              {{ languages }}
            </p>
          </div>
        </div>
        <div v-show="borderCountries.length !== 0" class="flex justify-between mt-12">
          <p class="w-full sm:[&>*:nth-child(3)]:ml-3">
            <b class="font-nunitoMedium">Border Countries:</b>
            <br class="sm:hidden" />
            <NuxtLink
              :to="useGenerateLink(item)"
              class="inline-flex dark:bg-[#2b3945] dark:hover:bg-transparent bg-white hover:bg-gray-100 font-bold py-2 px-4 ml-0 my-3 mr-3 rounded transition-all"
              v-for="(item, index) in borderCountries"
              :key="index"
            >{{ item.name }}</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const countryInfo = route.query;

const data = await useCountryApi();

const allowedKeys = [
  "nativeName",
  "population",
  "region",
  "subregion",
  "capital"
];

const filteredCountryInfo = computed(() => {
  return Object.keys(countryInfo)
    .filter(key => allowedKeys.includes(key))
    .reduce((o, k) => {
      return {
        ...o,
        [k === "nativeName"
          ? k.charAt(0).toUpperCase() +
            k
              .slice(1)
              .split("eN")
              .join("e N")
          : k === "subregion"
          ? k.charAt(0).toUpperCase() +
            k
              .slice(1)
              .split("br")
              .join("b R")
          : k.charAt(0).toUpperCase() + k.slice(1)]: countryInfo[k]
      };
    }, {});
});

const topLevelDomain = computed(() => {
  return countryInfo.topLevelDomain?.toString();
});

const currencies = computed(() => {
  let parsedCurrencies = JSON.parse(countryInfo.currencies as string);
  parsedCurrencies = parsedCurrencies.map((item: any) => item.name);
  return parsedCurrencies.join();
});

const languages = computed<string>(() => {
  let parsedLanguages = JSON.parse(countryInfo.languages as string);
  parsedLanguages = parsedLanguages.map((item: any) => item.name);
  return parsedLanguages.join();
});

const abbrLongCountryNames = computed(() =>
  data.map(({ name, ...rest }: any) => ({
    ...rest,
    name: name.includes("(") ? name.split(" ")[0] : name
  }))
);

const borderCountries = computed(() => {
  return abbrLongCountryNames.value.filter((item: any) =>
    countryInfo.borders?.includes(item.alpha3Code)
  );
});
</script>
