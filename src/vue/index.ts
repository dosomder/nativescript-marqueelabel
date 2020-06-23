import { NSMarqueeLabel } from "../nsmarqueelabel";

const MarqueeLabelPlugin = {
  install(Vue) {
    Vue.registerElement("MarqueeLabel", () => NSMarqueeLabel);
  },
};

export default MarqueeLabelPlugin;
