<template>
  <div>
    <div class="flex my-10">
      <NuxtLink to="/" class="bg-white text-black font-bold py-2 px-8 rounded">
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
          :src="`${data.flag}`"
          :alt="`${data.name}`"
        />
      </div>
      <div class="flex flex-col w-full p-6">
        <h2 class="font-nunitoExtraBold my-6">{{ data.name }}</h2>
        <div class="flex justify-between my-1">
          <p class="w-full">
            <b class="font-nunitoMedium">Native Name: </b>{{ data.nativeName }}
          </p>
          <p class="w-full">
            <b class="font-nunitoMedium">Top Level Domain: </b
            >{{ topLevelDomain }}
          </p>
        </div>
        <div class="flex justify-between my-1">
          <p class="w-full">
            <b class="font-nunitoMedium">Population: </b
            >{{ data.population }}
          </p>
          <p class="w-full">
            <b class="font-nunitoMedium">Currencies: </b>{{ currencies }}
          </p>
        </div>
        <div class="flex justify-between my-1">
          <p class="w-full">
            <b class="font-nunitoMedium">Region: </b>{{ data.region }}
          </p>
          <p class="w-full">
            <b class="font-nunitoMedium">Languages: </b>{{ languages }}
          </p>
        </div>
        <div class="flex justify-between my-1">
          <p class="w-full">
            <b class="font-nunitoMedium">Sub Region: </b>{{ data.subregion }}
          </p>
        </div>
        <div class="flex justify-between my-1">
          <p class="w-full">
            <b class="font-nunitoMedium">Capital: </b>{{ data.capital }}
          </p>
        </div>
        <div class="flex justify-between mt-12">
          <p class="w-full">
            <b class="font-nunitoMedium">Border Countries: </b>
            <button
              class="bg-white font-bold py-2 px-4 mx-3 rounded"
              v-for="(item, index) in data.borders"
              :key="index"
            >
              {{ item }}
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const data = route.query;

const topLevelDomain = computed(() => {
  return data.topLevelDomain?.toString();
});

const currencies = computed(() => {
  let parsedCurrencies = JSON.parse(data.currencies as string);
  parsedCurrencies = parsedCurrencies.map((item: any) => item.name);
  return parsedCurrencies.join();
});

const languages = computed<string>(() => {
  let parsedLanguages = JSON.parse(data.languages as string);
  parsedLanguages = parsedLanguages.map((item: any) => item.name);
  return parsedLanguages.join();
});
</script>
