<script setup lang="ts">
import { Button } from "@/components/ui/button";
import useAppQl from "@/provider/appQuery";
import { useHomeTitle } from "@/store/home-movie";
import { HomeQuery } from "@/utils/query";
import { HomePageTitle } from "@/utils/types";
import { inject, onMounted, toRefs } from "vue";
import Carousel from "./Carousel.vue";

const queryClient: any = inject("appQl");
const { loading } = toRefs(useAppQl(HomeQuery));
const store = useHomeTitle();

onMounted(() => {
  if (!store.recommendedTitles.nodes.length) {
    queryClient()[HomeQuery.operationName]((r: { data: HomePageTitle }) => {
      store.addHomeTitle(r.data);
    });
  }
});
</script>
<template>
  <span v-if="loading">Loading...</span>
  <template v-if="!loading">
    <Carousel :carouselItem="store.recommendedTitles.nodes" />
    <Button @click="">Click Me</Button>
  </template>
  <!-- <img
    v-for="item in store.recommendedTitles.nodes"
    :key="item.id"
    :src="'https://image.tmdb.org/t/p/original/' + item.tmdbBackdrop"
    :alt="item.nameVi"
  /> -->
  <!-- <span v-if="!loading">{{ store.$state }}</span> -->
</template>
