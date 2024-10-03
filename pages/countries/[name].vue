<template>
  <div>
    <div class="flex my-10">
      <NuxtLink
        to="/"
        class="bg-white text-black font-bold py-2 px-8 rounded hover:bg-gray-100 transition-all"
      >
        <font-awesome-icon
          class="text-[#858585] mx-1"
          icon="fa-solid fa-arrow-left"
        />
        Back</NuxtLink
      >
    </div>
    <div class="flex gap-12">
      <div class="flex w-full">
        <img
          class="w-full h-full"
          :src="`${countryInfo.flag}`"
          :alt="`${countryInfo.name}`"
        />
      </div>
      <div class="flex flex-col w-full p-6">
        <h2 class="font-nunitoExtraBold my-6">{{ countryInfo.name }}</h2>
        <div class="flex justify-between my-1">
          <p class="w-full">
            <b class="font-nunitoMedium">Native Name: </b
            >{{ countryInfo.nativeName }}
          </p>
          <p class="w-full">
            <b class="font-nunitoMedium">Top Level Domain: </b
            >{{ topLevelDomain }}
          </p>
        </div>
        <div class="flex justify-between my-1">
          <p class="w-full">
            <b class="font-nunitoMedium">Population: </b
            >{{ countryInfo.population }}
          </p>
          <p class="w-full">
            <b class="font-nunitoMedium">Currencies: </b>{{ currencies }}
          </p>
        </div>
        <div class="flex justify-between my-1">
          <p class="w-full">
            <b class="font-nunitoMedium">Region: </b>{{ countryInfo.region }}
          </p>
          <p class="w-full">
            <b class="font-nunitoMedium">Languages: </b>{{ languages }}
          </p>
        </div>
        <div class="flex justify-between my-1">
          <p class="w-full">
            <b class="font-nunitoMedium">Sub Region: </b
            >{{ countryInfo.subregion }}
          </p>
        </div>
        <div class="flex justify-between my-1">
          <p class="w-full">
            <b class="font-nunitoMedium">Capital: </b>{{ countryInfo.capital }}
          </p>
        </div>
        <div
          v-show="borderCountries.length !== 0"
          class="flex justify-between mt-12"
        >
          <p class="w-full [&>*:nth-child(2)]:ml-3">
            <b class="font-nunitoMedium">Border Countries: </b>
            <NuxtLink
              :to="useGenerateLink(item)"
              class="inline-flex bg-white font-bold py-2 px-4 ml-0 my-3 mr-3 rounded hover:bg-gray-100 transition-all"
              v-for="(item, index) in borderCountries"
              :key="index"
            >
              {{ item.name }}
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const countryInfo = route.query;

const api = useApi();

const { data } = await api({
  method: "GET",
  url: "/country",
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

const abbrLongCountryNames = computed(() => {
  return data.map((item: any) => {
    return item.name.includes("(")
      ? { ...item, name: item.name.split(" ")[0] }
      : { ...item, name: item.name };
  });
});

const borderCountries = computed(() => {
  return abbrLongCountryNames.value.filter((item: any) =>
    countryInfo.borders?.includes(item.alpha3Code)
  );
});

// const goBack = () => {
//   const { history } = useRouter().options;
//   return {
//     path: history.state.back as string,
//   };
// };
</script>
