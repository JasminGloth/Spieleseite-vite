import * as tools from "./tools";
import {
  pageKampfPR3,
  attachPageKampfPR3Events,
} from "./pages/Port Royale 3/PageKampfPR3";
import {
  PageHandelPR3,
  attachPageHandelEvents,
} from "./pages/Port Royale 3/PageHandelPR3";
import { PageAbout, PageAboutPR3 } from "./pages/Port Royale 3/PageAboutPR3";
import { Page404 } from "./pages/Page404";
import { PageHandelP4 } from "./pages/Patrizier 4/PageHandelP4";

const PR3pageNames = ["Handel (PR3)", "Kampf (PR3)", "About"];
const P4pageNames = ["Handel (P4)"];

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = () => {
  switch (currentPageIdCode) {
    case "kampf(pr3)":
      return pageKampfPR3();
    case "handel(pr3)":
      return PageHandelPR3();
    case "about":
      return PageAboutPR3();
    case "handel(p4)":
      return PageHandelP4();
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
  attachPageKampfPR3Events();
  attachPageHandelEvents();
};
