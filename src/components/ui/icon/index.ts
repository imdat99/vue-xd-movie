import { OhVueIcon } from "oh-vue-icons";
import { defineComponent, h, computed } from "vue";
import { addIcons } from "oh-vue-icons";
import {
  RiMovieFill,
  BiLayoutSidebarInset,
  BiMoonStarsFill,
  BiSearchHeart,
  BiSunFill,
  MdNavigatenextTwotone,
  MdPlayarrowSharp,
  MdKeyboardarrowleftTwotone,
} from "oh-vue-icons/icons";
(() => {
  addIcons(
    RiMovieFill,
    BiLayoutSidebarInset,
    BiMoonStarsFill,
    BiSearchHeart,
    BiSunFill,
    MdPlayarrowSharp,
    MdNavigatenextTwotone,
    MdKeyboardarrowleftTwotone
  );
})();
export const AppIcon = defineComponent({
  props: OhVueIcon,
  setup(props) {
    const iconName = computed(() =>
      String(props.name)
        .replace(/[A-Z0-9]/g, (letter) => `-${letter.toLowerCase()}`)
        .replace("-", "")
    );
    return () =>
      h(OhVueIcon, {
        scale: "1.5",
        ...props,
        name: iconName.value,
      });
  },
});
