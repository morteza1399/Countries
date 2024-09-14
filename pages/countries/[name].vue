<template>
  <div>
    <div class="flex my-10">
      <NuxtLink to="/" class="bg-white text-black font-bold py-2 px-4 rounded"
        >icon Back</NuxtLink
      >
    </div>
    <div class="flex gap-12">
      <div class="w-full py-6">
        <img :src="data.flag" alt="test" />
      </div>
      <div class="flex w-full p-6">
        <div class="flex flex-col">
          <h1 class="font-nunitoExtraBold">{{ data.name }}</h1>
          <p>
            <b class="font-nunitoExtraBold">Native Name: </b
            >{{ data.nativeName }}
          </p>
          <p>
            <b class="font-nunitoExtraBold">Population: </b
            >{{ data.population }}
          </p>
          <p><b class="font-nunitoExtraBold">Region: </b>{{ data.region }}</p>
          <p>
            <b class="font-nunitoExtraBold">Sub Region: </b>{{ data.subregion }}
          </p>
          <p><b class="font-nunitoExtraBold">Capital: </b>{{ data.capital }}</p>
          <p>
            <b class="font-nunitoExtraBold">Border Countries: </b
            >{{ data.borders }}
          </p>
        </div>
        <div class="flex flex-col">
          <p>
            <b class="font-nunitoExtraBold">Top Level Domain: </b
            >{{ topLevelDomain }}
          </p>
          <p>
            <b class="font-nunitoExtraBold">Currencies: </b>{{ currencies }}
          </p>
          <p><b class="font-nunitoExtraBold">Languages: </b>{{ languages }}</p>
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
