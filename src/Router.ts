import * as tools from "./tools";
import {
  pageKampfPR3,
  attachPageKampfPR3Events,
} from "./pages/Port Royale 3/PageKampfPR3";
import {
  PageBedarfsrechnerPR3,
  attachPageBedarfsrechnerPR3Events,
} from "./pages/Port Royale 3/PageBedarfsrechnerPR3";
import { PageAboutPR3 } from "./pages/Port Royale 3/PageAboutPR3";
import { Page404 } from "./pages/Page404";
import { PageBedarfsrechnerP4, attachPageBedarfsrechnerP4Events, } from "./pages/Patrizier 4/PageBedarfsrechnerP4";
import { PagePreislistePR3 } from "./pages/Port Royale 3/PagePreislistePR3";
import { PageSchiffePR3 } from "./pages/Port Royale 3/PageSchiffePR3";
import { PagePreislisteP4 } from "./pages/Patrizier 4/PagePreislisteP4";

const PR3pageNames = ["Preisliste (PR3)","Bedarfsrechner (PR3)", "Kampf (PR3)","Schiffe (PR3)", "About (PR3)"];
const P4pageNames = ["Preisliste (P4)","Bedarfsrechner (P4)"];

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = () => {
  switch (currentPageIdCode) {
    case "preisliste(pr3)":
      return PagePreislistePR3();
    case "bedarfsrechner(pr3)":
      return PageBedarfsrechnerPR3();
    case "kampf(pr3)":
      return pageKampfPR3();
    case "schiffe(pr3)":
      return PageSchiffePR3();
    case "about(pr3)":
      return PageAboutPR3();
    case "bedarfsrechner(p4)":
      return PageBedarfsrechnerP4();
    case "preisliste(p4)":
      return PagePreislisteP4();
    default:
      return Page404();
  }
};

const getPageIdCode = (pageName: string) => {
  pageName = tools.cleanCharactersToAscii(pageName);
  return pageName.toLowerCase();
};

export const getMenu = () => {
  const getMenuClass = (pageName: string) => {
    const pageIdCode = tools.cleanCharactersToAscii(pageName.toLowerCase());
    if (pageIdCode === currentPageIdCode) {
      return ` class="active"`;
    } else {
      return "";
    }
  };

  return /*html*/ `
	<nav class="menu">
      <ul>
        <li class="dropdown">
          <a href="#" class="dropbtn">Port Royale 3</a>
          <div class="dropdown-content">
            ${PR3pageNames.map(
              (pageName) =>
                `<a href="${getPageIdCode(pageName)}"${getMenuClass(
                  pageName
                )}>${pageName}</a>`
            ).join("")}
          </div>
        </li>
        <li class="dropdown">
          <a href="#" class="dropbtn">Patrizier 4</a>
          <div class="dropdown-content">
            ${P4pageNames.map(
              (pageName) =>
                `<a href="${getPageIdCode(pageName)}"${getMenuClass(
                  pageName
                )}>${pageName}</a>`
            ).join("")}
          </div>
        </li>
      </ul>
    </nav>
`;
};

function getSmartCurrentPageId() {
  let currentPageIdCode = tools.getCurrentPageIdCode();
  currentPageIdCode =
    currentPageIdCode === ""
      ? tools.cleanCharactersToAscii(PR3pageNames[0].toLowerCase())
      : currentPageIdCode;
  return currentPageIdCode;
}

export const attachEvents = () => {
console.log(currentPageIdCode)
  switch (currentPageIdCode) {
    case "kampf(pr3)":
      attachPageKampfPR3Events();
      break;
    case "bedarfsrechner(pr3)":
      attachPageBedarfsrechnerPR3Events();
      break;
    case "bedarfsrechner(p4)":
      attachPageBedarfsrechnerP4Events();
      break;
  }
};
