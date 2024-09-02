<template>
  <div>
    <div class="flex my-10">
      <NuxtLink to="/" class="bg-white text-black font-bold py-2 px-4 rounded"
        >icon Back</NuxtLink
      >
    </div>
    <div class="flex gap-12">
      <div class="w-full py-6">
        <img :src="data.flag" alt="" />
      </div>
      <div class="w-full p-6">
        <h1 class="font-nunitoExtraBold">{{ data.name }}</h1>
        <p>
          <b class="font-nunitoExtraBold">Native Name: </b>{{ data.nativeName }}
        </p>
        <p>
          <b class="font-nunitoExtraBold">Population: </b>{{ data.population }}
        </p>
        <p><b class="font-nunitoExtraBold">Region: </b>{{ data.region }}</p>
        <p>
          <b class="font-nunitoExtraBold">Sub Region: </b>{{ data.subregion }}
        </p>
        <p><b class="font-nunitoExtraBold">Capital: </b>{{ data.capital }}</p>
        <p>
          <b class="font-nunitoExtraBold">Top Level Domain: </b
          >{{ data.topLevelDomain }}
        </p>
        <p>
          <b class="font-nunitoExtraBold">Currencies: </b>{{ data.currencies }}
        </p>
        <p>
          <b class="font-nunitoExtraBold">Languages: </b>{{ data.languages }}
        </p>
        <p>
          <b class="font-nunitoExtraBold">Border Countries: </b
          >{{ data.borders }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const data = route.query;
</script>
