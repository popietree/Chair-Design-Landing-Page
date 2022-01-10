"use strict";
// sellect all accordian icons
const icon = document.querySelectorAll(".accor__icon");

const hiddenBox = document.querySelectorAll(".hidden-box");
//selct all text
const text = document.querySelectorAll(".text");

const section = document.querySelectorAll(".section");
const btnPrevious = document.querySelector(".btn--previous");
const btnNext = document.querySelector(".btn--next");
const show = document.querySelector(".show");

const btnIconNext = document.querySelector(".previous");
const btnIconPrevious = document.querySelector(".next");
const page = document.querySelector(".pagination");
const anchchilds = show.querySelectorAll("page");
let html = "";

icon.forEach((i) =>
  // add event listener to each icon
  i.addEventListener("click", function (e) {
    //get the element to common parent
    const clicked = e.target.closest(".accor__icon ");
    console.log(clicked);
    //get the row number of the accoridan
    let curr = clicked.dataset.icon;
    console.log(curr);

    //ignore clciks in tabs container iwth Guard Clause
    //if clicked is null then null is false and !null is true
    if (!clicked) return;

    // section.forEach((s) => (s.style.color = "purple"));
    // //toggle the active on icons
    icon.forEach((i) => i.classList.toggle("accor__icon--active"));

    document.querySelector(`.section--${curr}`).classList.toggle("open");
  })
);

btnPrevious.addEventListener("mouseover", function () {
  btnIconPrevious.style.stroke = "white";
});

btnPrevious.addEventListener("mouseleave", function () {
  btnIconPrevious.style.stroke = "green";
});

btnNext.addEventListener("mouseover", function () {
  btnIconNext.style.stroke = "white";
});

btnNext.addEventListener("mouseleave", function () {
  btnIconNext.style.stroke = "green";
});

page.addEventListener("click", function (e) {
  // console.log(e.target);
  // console.log(e.target.closest("page"));
});

const numPages = 15;
const maxShown = 5;
let htmlArr = [];
let anchorEles = "";
const maxArr = Array.from({ length: maxShown }, (v, i) => (v = i + 1));

const moveNext = function (arr) {
  maxArr.forEach((e, i) => {
    maxArr[i] = maxArr[i] + 1;
  });
};

const movePrev = function (arr) {
  maxArr.forEach((ele, i, arr) => {
    arr[i] = arr[i] - 1;
  });
  return arr;
};

maxArr.forEach((ele, i, arr) => {
  console.log(ele);
  const html = `<a class = 'page' data-number = '${ele}'> ${ele} </a>`;
  htmlArr.push(html);
});

anchorEles = htmlArr.join(" ");
show.insertAdjacentHTML("afterbegin", `${anchorEles}`);

btnNext.insertAdjacentHTML(
  "beforebegin",
  `<a class = " page page-last"> ${numPages} </a>`
);

const pageLast = document.querySelector(".page-last");

const createAnc = function () {
  //fetch the new show from dom after removed the old anchors
  const show = document.querySelector(".show");
  // remove the show
  show.remove();
  // empty the html array
  let htmlArr = [];
  //create a new html with new anchors after new max array
  maxArr.forEach((ele, i, arr) => {
    const html = `<a class = 'page' data-number = '${ele}'> ${ele} </a>`;
    htmlArr.push(html);
  });
  //join the newly created array
  let anchorEles2 = htmlArr.join(" ");
  //add a new show
  btnPrevious.insertAdjacentHTML(
    "afterend",
    `<div class="show">${anchorEles2}</div>`
  );
};

btnNext.addEventListener("click", function () {
  btnIconNext.style.stroke = "white";

  //compare the max array value with postion 1 and max
  if (maxArr[0] < numPages - maxShown + 1) {
    moveNext(maxArr);
    createAnc(maxArr);
  }
  if (maxArr[0] === numPages - maxShown + 1) {
    if (!pageLast.parentNode) {
      return;
    } else {
      pageLast.parentNode.removeChild(pageLast);
    }
  }

  // maxArr[0] === numPages - maxShown + 1
  //   ? pageLast.parentNode.removeChild(pageLast)
  //   : "";
});

btnPrevious.addEventListener("click", function () {
  btnIconPrevious.style.stroke = "white";
  //compare the max array value with postion 1 and max
  if (maxArr[0] > 1) {
    movePrev(maxArr);
    createAnc(maxArr);
  }
  if (maxArr[0] === 10) {
    console.log("herer");

    btnNext.insertAdjacentHTML(
      "beforebegin",
      `<a class = " page page-last"> ${numPages} </a>`
    );
  }
});

//Adding the html number elements to array
// for (let i = 1; i <= numPages; i++) {
//   let max = numPages + 1;
//   console.log((max = max - i));

//   const html = `<a class = "page" data-number="${max}">${max}</a>`;
//   htmlArr.unshift(html);
//   // btnNext.insertAdjacentHTML("afterend", html);
// }
// console.log(htmlArr);

// .page[data-number="1"] {
//   font-size: 13px;

// showEle(htmlArr);

// function showEle(arr) {
//   const numEle = 5;
//   const sliceArr = arr.slice(0, numEle);
//   const revsArr = sliceArr.reverse();
//   console.log(revsArr);

//   // revsArr.forEach((html) => show.insertAdjacentHTML("afterbegin", html));

//   return;
// }

// // console.log(show);

//move or shift array to next
// function moveLeft(d = 1, arr) {
//   // for (let i = d; i < arr.length; i++) {
//   //   arr.unshift(arr.pop());
//   // }
//   return arr;
// }

// function moveRight(d = 1, arr) {
//   // for (let i = d; i < arr.length; i++) {
//   //   arr.push(arr.shift());
//   // }
//   return arr;
// }

// //show or hide funtion
// const hide = function () {
//   console.log("hide THIS", htmlArr[0]);
// };

// const show = function () {
//   console.log("show THIS", htmlArr[0]);
// };
