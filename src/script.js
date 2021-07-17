console.log("Javascript loaded.");


// TODO: Refactor event handlers.

document.querySelectorAll(".linkedin")[0].addEventListener("click", () => {
  openLinkedIn()
});
document.querySelectorAll(".linkedin")[1].addEventListener("click", () => {
  openLinkedIn()
});

const openLinkedIn = () => {
  window.open("https://www.linkedin.com/in/andy-zhong-bb81ab2b/", "_blank");
};

document.querySelectorAll(".github")[0].addEventListener("click", () => {
  openGitHub()
});
document.querySelectorAll(".github")[1].addEventListener("click", () => {
  openGitHub()
});

const openGitHub = () => {
  window.open("https://github.com/andyjzhong", "_blank");
}

document.querySelectorAll(".twitter")[0].addEventListener("click", () => {
  openTwitter()
});
document.querySelectorAll(".twitter")[1].addEventListener("click", () => {
  openTwitter()
});

const openTwitter = () => {
  window.open("https://twitter.com/andyjzhong", "_blank");
}

// Download File

document.querySelector(".download-btn").addEventListener("click", () => {
  downloadResume()
});

const downloadResume = () => {
  console.log("Clicked download button.");
  window.open("../assets/newYorkSkyline.jpg", '_self');
}
