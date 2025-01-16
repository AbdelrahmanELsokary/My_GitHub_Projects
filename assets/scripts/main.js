let them = document.getElementById("them");
them.onclick = () => {
  if (document.body.classList.contains("dark-mode")) {
    them.src = "assets/icons/dark.webp";
    document.body.classList.remove("dark-mode");
  } else {
    document.body.classList.add("dark-mode");
    them.src = "assets/icons/light.webp";
  }
};
