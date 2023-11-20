<script setup lang="ts">
import { reactive } from "vue";
const props = defineProps<{ class?: string }>();
const menuList = reactive([
  {
    title: "Phim Hot",
    path: "/top",
  },
  {
    title: "Phim Lẻ",
    path: "/category/movie",
  },
  {
    title: "Phim Bộ",
    path: "/category/show",
  },
  {
    title: "Phim Mới",
    path: "/new",
  },
]);
</script>
<template>
  <nav :class="props.class">
    <RouterLink
      v-for="item in menuList"
      :key="item.path"
      :to="item.path"
      :active-class="'font-semibold !text-foreground'"
      class="transition-colors hover:text-foreground/80 text-foreground/60"
    >
      {{ item.title }}
    </RouterLink>
  </nav>
</template>
