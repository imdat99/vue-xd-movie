<script lang="ts" setup>
import { Header } from "@/components";
import { ref, watch, onBeforeMount } from "vue";
import { Theme } from "@/utils/types";
import { storageKey, defaultTheme } from "@/utils/constant";
import Footer from "./components/footer/Footer.vue";

const theme = ref<Theme>(defaultTheme);

onBeforeMount(() => {
  theme.value = (localStorage.getItem(storageKey) as Theme) || defaultTheme;
});

watch(theme, () => {
  const root = window.document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme.value);
});
const handleToggletheme = () => {
  if (theme.value === "dark") {
    theme.value = "light";
  } else {
    theme.value = "dark";
  }
  localStorage.setItem(storageKey, theme.value);
};
</script>
<template>
  <div class="flex min-h-screen flex-col bg-background">
    <Header :theme="theme" @toggletheme="handleToggletheme" />
    <div class="flex-1 bg-background">
      <div class="max-w-[1400px] mx-auto px-4 md:px-8">
        <RouterView />
      </div>
    </div>
    <Footer />
  </div>
</template>
