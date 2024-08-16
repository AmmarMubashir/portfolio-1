var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenuu = document.getElementById("sidemenu");

// typing animation
var typed = new Typed(".typing", {
  strings: [" ", "Digital Marketer", "ML Engineer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

function opentab(tabname) {
  // Remove active-link class from all tab links
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }

  // Remove active-tab class from all tab contents
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active-tab");
  }

  // Add active-link class to the clicked tab link
  event.currentTarget.classList.add("active-link");

  // Add active-tab class to the corresponding tab content
  document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
  sidemenuu.style.right = "0";
}

function closemenu() {
  sidemenuu.style.right = "-200px";
}
