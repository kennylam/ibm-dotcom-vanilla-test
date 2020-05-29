import content from "./data/content";
import { DotcomShell } from "@carbon/ibmdotcom-vanilla";
import "@carbon/ibmdotcom-styles/scss/components/dotcom-shell/_dotcom-shell.scss";
// import "./styles.scss";

const dotcomShellProps = {
  masthead: {
    navigation: "default",
    platform: {
      name: "IBM Cloud",
      url: "https://www.ibm.com/cloud",
    },
    searchProps: {
      hasSearch: true,
    },
    hasNavigation: true,
    hasProfile: true,
  },
  footer: {
    footerType: "tall",
  },
};

async function _loadDotcomShell() {
  const template = await DotcomShell.getDotcomShellWithData({
    content,
    ...dotcomShellProps,
  });
  const yourapp = document.getElementById("app");
  yourapp.innerHTML = template;
  DotcomShell.init(yourapp);
}

_loadDotcomShell();
