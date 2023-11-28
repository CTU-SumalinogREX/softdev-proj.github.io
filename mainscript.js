//Download PDF form
document.getElementById("downloadLink").addEventListener("click", function (e) {
  e.preventDefault();
  var confirmed = window.confirm("Do you want to download this file?");
  if (confirmed) {
    var link = document.createElement("a");
    link.href = this.getAttribute("href");
    link.download = "Basic Parts of a Computer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
});

//Modal for Privacy Policy
var modal = document.getElementById("privacy-modal");
var link = document.getElementById("privacy-link");
var closeButton = document.getElementsByClassName("close-button")[0];
var acceptButton = document.getElementById("accept-button");

link.onclick = function (event) {
  event.preventDefault();
  modal.style.display = "block";
};

closeButton.onclick = function () {
  modal.style.display = "none";
};

acceptButton.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Runner Button
document
  .getElementById("donateButton")
  .addEventListener("mouseover", function () {
    this.style.position = "absolute";
    this.style.left = Math.random() * window.innerWidth + "px";
    this.style.top = Math.random() * window.innerHeight + "px";
  });

$(document).ready(function () {
  $(".card").click(function () {
    $(this).toggleClass("rotate");
  });
});

//Scroll Snapping
const snapElements = document.querySelectorAll(".snap");

// Add an event listener for scroll on each snap element
snapElements.forEach((element, index) => {
  element.addEventListener("scroll", () => {
    // Get the next snap element
    const nextElement = snapElements[index + 1];

    // If the next element exists and the current scroll position is past half of the current element
    if (nextElement && element.scrollTop > element.offsetHeight / 2) {
      // Scroll to the next element with smooth behavior
      nextElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
