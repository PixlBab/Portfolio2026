document.querySelectorAll(".compare").forEach(function(compareBox) {
  var before = compareBox.querySelector(".before");
  var after = compareBox.querySelector(".before .after");
  var input = compareBox.querySelector(".compare-ip");

  before.style.backgroundImage = "url(\"" + compareBox.dataset.before + "\")";
  after.style.backgroundImage = "url(\"" + compareBox.dataset.after + "\")";

  function updateWidth(e) {
    after.style.width = (+e.target.value) + "px";
  }

  input.addEventListener("input", updateWidth);
  input.addEventListener("change", updateWidth);
});
