window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function onCV() {
  const clickBtn = (document.querySelector("#downloadBtn").innerHTML =
    "cv.html");
  console.log("Its clicked....");
}
