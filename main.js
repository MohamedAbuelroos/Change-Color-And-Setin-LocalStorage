let lis = document.querySelectorAll("ul li");
let div = document.querySelector(".experiment");

lis.forEach(function (li) {
  li.addEventListener("click", function () {
    //remove class active from all lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    //Add active Class To clicked element
    li.classList.add("active");
    // Add clicked color to local storage
    window.localStorage.setItem("color", li.dataset.color);
    //change div background Color
    div.style.backgroundColor = li.dataset.color;
  });
});



if (window.localStorage.getItem("color")) {
    // if there is color in lacal storage
    div.style.backgroundColor = window.localStorage.getItem("color");
    //remove class active from all lis again
    lis.forEach((li) => {
      li.classList.remove("active");
    });
     //Add active Class to the ellement from local storage
    document
      .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
      .classList.add("active");
  }