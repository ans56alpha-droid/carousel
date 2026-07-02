//    menu logic
const mobileMenu = document.querySelector("header .mobileMenu");
const menuBtn = document.querySelectorAll(".menuBtn");

menuBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    mobileMenu.classList.toggle("active");
    e.stopPropagation();
  });
});

//    ---------

// hero section toggle background logic

const items = document.querySelectorAll(".slider .list .item");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const thumbnails = document.querySelectorAll(".thumbnail .item");

let countItem = items.length;
let itemActive = 0;

next.onclick = function () {
  itemActive += 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};

prev.onclick = function () {
  itemActive -= 1;
  console.log(countItem, "item active ", itemActive);
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
};

let refreshInterval = setInterval(() => {
  next.click();
}, 3000);

const showSlider = () => {
  // remove item active old
  let oldeItemActive = document.querySelector(".slider .list .item.active");
  let oldthumbnailActive = document.querySelector(".thumbnail .item.active");

  oldeItemActive.classList.remove("active");
  oldthumbnailActive.classList.remove("active"); 

  // add new item active

  items[itemActive].classList.add("active");
  thumbnails[itemActive].classList.add("active");

  //  clear auto time run slider
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000);

  centerThumbnail()
};

// setInterval(() => {
//   itemActive += 1;
//   if (itemActive >= countItem) {
//     itemActive = 0;
//   }
//   showSlider();
// }, 2000);

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", (e) => {
    e.stopPropagation();
    itemActive = index;
    showSlider();
  });
});

document.addEventListener("click", (e) => {
    if (isAutoScrolling) return;
  // console.log(e)
  // console.log(e.target)
  if (!mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove("active");
  }
});

let isAutoScrolling = false;

function centerThumbnail() {
    isAutoScrolling = true;

    const container = document.querySelector(".thumbnail");
    const activeThumb = thumbnails[itemActive];

    const containerWidth = container.offsetWidth;
    const thumbLeft = activeThumb.offsetLeft;
    const thumbWidth = activeThumb.offsetWidth;

    const scrollPosition = thumbLeft - (containerWidth / 2) + (thumbWidth / 2);

    container.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
    });

    setTimeout(() => {
        isAutoScrolling = false;
    }, 400);
}