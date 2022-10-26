// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener("click", documentActions)

const menuBlocks = document.querySelectorAll(".sub-menu-catalog__block")

if (menuBlocks.length > 0) {
  menuBlocks.forEach((menuBlock) => {
    const menuBlockItems = menuBlock.querySelectorAll(".sub-menu-catalog__category").length;
    menuBlock.classList.add(`sub-menu-catalog__block_${menuBlockItems}`)
  })
}

function documentActions(event) {
  const targetItem = event.target;
  if (targetItem.closest("[data-parent]")) {
    const subMenuId = targetItem.dataset.parent ? targetItem.dataset.parent : null;
    const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);

    if (subMenu) {
      const activeLink = document.querySelector("._sub-menu-active");
      const activeMenuBlock = document.querySelector("._sub-menu-open");

      // const activeBlock = document.querySelector("._sub-menu-open");

      if (activeLink && activeLink !== targetItem) {
        activeLink.classList.remove("_sub-menu-active");
        activeMenuBlock.classList.remove("_sub-menu-open");
        document.documentElement.classList.remove("sub-menu-open")
      }

      document.documentElement.classList.toggle("sub-menu-open");
      targetItem.classList.toggle("_sub-menu-active");
      subMenu.classList.toggle("_sub-menu-open");

    } else {
      console.log('Ой ой ой нет такого под меню');
    }

    event.preventDefault();
  }
  if (targetItem.closest(".menu-top-header__link_catalog")) {
    document.documentElement.classList.add("catalog-open");
    event.preventDefault();
  }
  if (targetItem.closest(".menu-catalog__back")) {
    document.documentElement.classList.remove("catalog-open");

    document.querySelector("._sub-menu-active") ? document.querySelector("._sub-menu-active").classList.remove("_sub-menu-active") : null;
    document.querySelector("._sub-menu-open") ? document.querySelector("._sub-menu-open").classList.remove("_sub-menu-active") : null;
    event.preventDefault();
  }
  if (targetItem.closest(".sub-menu-catalog__back")) {
    document.documentElement.classList.remove("sub-menu-open")

    document.querySelector("._sub-menu-active") ? document.querySelector("._sub-menu-active").classList.remove("_sub-menu-active") : null;
    document.querySelector("._sub-menu-open") ? document.querySelector("._sub-menu-open").classList.remove("_sub-menu-open") : null
    document.querySelector("._sub-menu-open") ? document.querySelector("._sub-menu-open").classList.remove("_sub-menu-active") : null;
    event.preventDefault();
  }
}