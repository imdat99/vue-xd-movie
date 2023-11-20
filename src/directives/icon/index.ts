import type { App, DirectiveBinding } from "vue";

const iconDirective = (app: App<Element>) => {
  app.directive("app-icon", {
    mounted(el: Element, binding) {
      init(el, binding);
    },
    updated(el, binding) {
      init(el, binding);
    },
  });
};

function init(el: Element, binding: DirectiveBinding<Element | string>) {
  console.log(el, binding);
  // const position = binding.arg || "top";
  // const tooltipText = binding.value || "Tooltip text"
  // el.setAttribute("position", position);
  // el.setAttribute("tooltip", tooltipText as string);
}

export default iconDirective;
