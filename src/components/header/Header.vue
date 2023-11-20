<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { AppIcon } from "@/components/ui/icon";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Theme } from "@/utils/types";
import NavBar from "./NavBar.vue";
import PageLogo from "./PageLogo.vue";

const props = defineProps<{ theme: Theme }>();
defineEmits(["toggletheme"]);
console.log(props.theme);
</script>
<template>
  <header
    class="sticky z-40 top-0 bg-background/80 backdrop-blur-md border-b border-border"
  >
    <div class="container flex justify-between h-14 items-center">
      <div class="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Button variant="ghost" size="icon">
              <v-icon name="BiLayoutSidebarInset" />
              <span class="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetClose>
              <SheetHeader>
                <SheetTitle class="mb-6"><PageLogo /></SheetTitle>
                <SheetDescription>
                  <NavBar class="flex flex-col space-y-4 text-left" />
                </SheetDescription>
              </SheetHeader>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>

      <div class="mr-4 hidden md:flex">
        <PageLogo />
        <NavBar class="flex items-center space-x-6 text-sm font-medium" />
      </div>
      <div class="flex items-center justify-end space-x-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost" size="icon">
                <v-icon name="BiSearchHeart" scale="1.25" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Tìm kiếm</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div class="flex items-center gap-x-1">
          <Button variant="ghost" size="icon" @click="$emit('toggletheme')">
            <AppIcon
              :name="theme === 'light' ? 'BiMoonStarsFill' : 'BiSunFill'"
              flip="horizontal"
            />
          </Button>
        </div>
      </div>
    </div>
  </header>
</template>
