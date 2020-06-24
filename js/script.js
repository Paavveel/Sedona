var searchShow = document.querySelector(".search-body");
var search = document.querySelector(".search-caption");
var Form = searchShow.querySelector(".search-form");
var dateIn = searchShow.querySelector(".search-date-in");
var dateOut = searchShow.querySelector(".search-date-out");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("in");
} catch (err) {
  isStorageSupport = false;
}

search.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchShow.classList.add("search-body-show");

  if (storage) {
    dateIn.value = storage;
    dateOut.focus();
  } else {
    dateOut.value.focus();
  }
});

Form.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value) {
    evt.preventDefault();
    searchShow.classList.remove("search-error");
    searchShow.offsetWidth = searchShow.offsetWidth;
    searchShow.classList.add("search-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("in", dateIn.value);
    }
  }
});
