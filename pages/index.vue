<template>
  <div class="z-0">
    <div class="flex justify-between text-[12px]">
      <div>
        <font-awesome-icon
          class="absolute my-4 mx-6 text-[#858585]"
          icon="fa-solid fa-search"
        />
        <input
          type="text"
          class="py-3 pl-14 w-96 outline-none rounded"
          placeholder="Search for a country..."
        />
      </div>
      <div>
        <button
          class="flex justify-between items-center bg-white p-3 w-40 rounded"
          @click="toggleDropdwon"
        >
          <span class="mr-3">{{ currentRegion }}</span>
          <font-awesome-icon
            class="text-[#858585]"
            icon="fa-solid fa-angle-down"
          />
        </button>
        <ul v-show="dropdown" class="bg-white mt-1 z-10">
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
    <div class="flex flex-wrap">
      <div v-for="(item, index) in data" :key="index">
        <div>
          <img :src="item.flags.png" alt="" />
          <h2>{{ item.name }}</h2>
          <p><b>Population:</b> {{ item.population }}</p>
          <p><b>Region:</b> {{ item.region }}</p>
          <p><b>Capital:</b> {{ item.capital }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const dropdown = ref<boolean>(false);
const regions: string[] = ["Africa", "America", "Asia", "Europe", "Oceania"];
const currentRegion = ref<string>("Filter by Region");

const api = useApi();

const { data } = await api({
  method: "GET",
  url: "/country",
});

const toggleDropdwon = () => {
  dropdown.value = !dropdown.value;
};

const changeRegion = (region: string) => {
  currentRegion.value = region;
  dropdown.value = false;
};
</script>
