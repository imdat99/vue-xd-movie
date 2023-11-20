<script setup lang="ts">
import PageLogo from "../header/PageLogo.vue";
</script>
<template>
  <div class="w-full">
    <div class="max-w-[1400px] mx-auto px-4 pb-4 md:px-9">
      <div class="w-fit">
        <PageLogo />
      </div>
      <p class="font-bold text-foreground/60">
        Trang xem phim chất lượng có lẽ là cao =))
      </p>
      <p class="text-secondary-foreground/40 text-sm">
        Đăng ký <RouterLink to="/"><b> Premium </b></RouterLink>để tắt quảng cáo
        nha.
      </p>
    </div>
  </div>
</template>
