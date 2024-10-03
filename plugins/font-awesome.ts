import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import {
  faSearch,
  faAngleDown,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(faMoon, faSun, faSearch, faAngleDown, faArrowLeft);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
