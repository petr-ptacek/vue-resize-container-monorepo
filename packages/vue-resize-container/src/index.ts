import {
  ResizeContainerSection as VueResizeContainerSection,
  IconExpand as VueIconExpand,
  IconCollapse as VueIconCollapse,
} from "./components";
import VueResizeContainer from "./VueResizeContainer.vue";

export * from "./types";

export { VueResizeContainer, VueResizeContainerSection, VueIconExpand, VueIconCollapse };

if (import.meta.env.PROD) {
  import("./assets/styles/main.css");
}
