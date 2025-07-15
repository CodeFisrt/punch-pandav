 function toggleMenu() {
    const panel = document.getElementById("menuPanel");
    const button = document.getElementById("toggleBtn");

    if (panel.style.display === "flex") {
      panel.style.display = "none";
      button.innerHTML = "&#xbb;"; 
    } else {
      panel.style.display = "flex";
      button.innerHTML = "&#x2715;"; 
    }
  }