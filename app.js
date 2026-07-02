// const prev = document.querySelector("#prev");
// const next = document.querySelector("#next");


// const state = {
//   menuOpen: false,
//   isAutoScrolling: false
// };

// const menuBtn = document.querySelector(".menuBtn");
// const mobileMenu = document.querySelector(".mobileMenu");

// menuBtn.addEventListener("click", (e) => {
//   e.stopPropagation();

//   state.menuOpen = !state.menuOpen;
//   mobileMenu.classList.toggle("active", state.menuOpen);
// });

// document.addEventListener("click", (e) => {
//   if (!state.menuOpen) return; // menu already closed

//   const isClickInsideMenu = mobileMenu.contains(e.target);
//   const isClickOnButton = menuBtn.contains(e.target);

//   if (!isClickInsideMenu && !isClickOnButton) {
//     closeMenu();
//   }
// });

// function closeMenu() {
//   state.menuOpen = false;
//   mobileMenu.classList.remove("active");
// }

// const safeZones = document.querySelectorAll(
//   ".mobileMenu, .menuBtn, .thumbnail"
// );

// document.addEventListener("click", (e) => {
//   if (!state.menuOpen) return;

//   let clickedInsideSafeZone = false;

//   safeZones.forEach(zone => {
//     if (zone.contains(e.target)) {
//       clickedInsideSafeZone = true;
//     }
//   });

//   if (!clickedInsideSafeZone) {
//     closeMenu();
//   }
// });

// function centerThumbnail() {
//   state.isAutoScrolling = true;

//   const container = document.querySelector(".thumbnail");
//   const activeThumb = thumbnails[itemActive];

//   const scrollPosition =
//     activeThumb.offsetLeft -
//     container.offsetWidth / 2 +
//     activeThumb.offsetWidth / 2;

//   container.scrollTo({
//     left: scrollPosition,
//     behavior: "smooth"
//   });

//   setTimeout(() => {
//     state.isAutoScrolling = false;
//   }, 400);
// }

// let countItem = items.length;
// let itemActive = 0;

// next.onclick = function () {
//   itemActive += 1;
//   if (itemActive >= countItem) {
//     itemActive = 0;
//   }
//   showSlider();
// };

// prev.onclick = function () {
//   itemActive -= 1;
//   console.log(countItem, "item active ", itemActive);
//   if (itemActive < 0) {
//     itemActive = countItem - 1;
//   }
//   showSlider();
// };

// let refreshInterval = setInterval(() => {
//   next.click();
// }, 3000);

// const showSlider = () => {
//   document.querySelector(".item.active")?.classList.remove("active");
//   document.querySelector(".thumbnail .item.active")?.classList.remove("active");

//   items[itemActive].classList.add("active");
//   thumbnails[itemActive].classList.add("active");

//   if (window.innerWidth <= 768) {
//     centerThumbnail();
//   }
// };

// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") closeMenu();
// });