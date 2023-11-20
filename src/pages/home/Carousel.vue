<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { tmdbUrl } from "@/utils/constant";
import { MovieTitle } from "@/utils/types";
import { ref } from "vue";

const { carouselItem } = defineProps<{ carouselItem: MovieTitle[] }>();

const activeIndex = ref(0);
const handleSide = (type: "next" | "prev") => {
  if (type === "next") {
    activeIndex.value = (activeIndex.value + 1) % carouselItem.length;
  }
  if (type === "prev") {
    activeIndex.value =
      activeIndex.value - 1 >= 0
        ? activeIndex.value - 1
        : carouselItem.length - activeIndex.value - 1;
  }
};
const nextSlide = () => {
  handleSide("next");
};
const prevSlide = () => {
  handleSide("prev");
};
</script>
<template>
  <template v-if="carouselItem.length">
    <div class="relative w-full overflow-hidden" data-carousel="slide">
      <div
        class="duration-500 relative h-56 overflow-hidden md:h-[460px] bg-no-repeat bg-cover bg-slate-400 dark:bg-slate-700"
        :style="{
          'background-image': `url(${
            tmdbUrl + carouselItem[activeIndex || 0].tmdbBackdrop
          })`,
        }"
      >
        <div class="md:backdrop-blur-md w-full h-full"></div>
        <div
          v-for="(item, index) in carouselItem"
          class="duration-500 ease-in-out absolute inset-0 transition-transform transform bg-slate-500/20"
          :key="index"
          :class="
            cn(
              index ===
                (activeIndex - 1 >= 0
                  ? activeIndex - 1
                  : carouselItem.length - activeIndex - 1)
                ? '-translate-x-full z-10'
                : index === activeIndex
                ? 'translate-x-0 z-20'
                : index === (activeIndex + 1) % carouselItem.length
                ? 'translate-x-full z-10'
                : '-translate-x-full z-10 hidden'
            )
          "
          data-carousel-item
        >
          <div
            class="absolute left-1/4 -translate-x-2/3 -translate-y-1/2 top-1/2"
          >
            <img
              :src="tmdbUrl + item.tmdbPoster"
              class="md:block aspect-2/3 w-44 hidden rounded-sm"
              :alt="item.nameVi"
            />
          </div>
          <div class="absolute right-0 md:top-1/3 text-left w-10/12 md:w-2/3">
            <div class="w-fit text-white rounded-md">
              <h2 class="font-bold text-4xl drop-shadow-xl">
                {{ item.nameVi }}
              </h2>
              <h3 class="text-xl font-semibold drop-shadow-xl">
                {{ item.nameEn }}
              </h3>
            </div>
            <p class="w-fit space-x-2 mt-2">
              <span
                class="bg-gray-600/30 text-white w-fit py-1 px-3 rounded-lg text-xs"
                v-for="(g, index) in item.genres.map((item) => item.nameVi)"
                :key="index"
                >{{ g }}</span
              >
            </p>
            <RouterLink :to="'movie/' + item.id">
              <Button class="mt-3 rounded-sm">
                <v-icon
                  name="MdPlayarrowSharp"
                  animation="pulse"
                  color="red"
                />&nbsp;Xem ngay và lun
              </Button>
            </RouterLink>
          </div>
        </div>
      </div>
      <div
        class="absolute z-30 flex bottom-5 right-20 space-x-2 rtl:space-x-reverse"
      >
        <button
          @click="activeIndex = index"
          v-for="(_, index) in carouselItem"
          type="button"
          :disabled="index === activeIndex"
          :class="
            index === activeIndex
              ? 'bg-white  !w-4'
              : 'bg-white/50 hover:bg-white'
          "
          class="ease-linear duration-200 w-1 h-1 rounded-full"
          aria-current="true"
          :aria-label="'Slide ' + index"
          :data-carousel-slide-to="index"
        ></button>
      </div>
      <Button
        variant="link"
        size="icon"
        @click="prevSlide"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none opacity-60 hover:opacity-90"
      >
        <v-icon name="MdKeyboardarrowleftTwotone" scale="3" />
      </Button>

      <Button
        variant="link"
        size="icon"
        @click="nextSlide"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none opacity-60 hover:opacity-90"
      >
        <v-icon name="MdNavigatenextTwotone" scale="3" />
      </Button>
    </div>
  </template>
</template>
