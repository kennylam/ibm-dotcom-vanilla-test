import { DotcomShell } from "@carbon/ibmdotcom-vanilla";
import "./styles.scss";

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

const content = `
    <h1>Hello Vanilla!</h1>
    <div>
    We use Parcel to bundle this sandbox, you can find more info about Parcel
    <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
    </div>
`;

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
