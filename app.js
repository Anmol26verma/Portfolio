var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

const sidemenu = document.getElementById("sidemenu");
const menuIcon = document.querySelector(".menu-icon");

function openmenu() {
  sidemenu.style.right = "0";

  // Delay to ensure this click doesn't immediately trigger the outside close
  setTimeout(() => {
    document.addEventListener("click", handleOutsideClick);
  }, 0);
}

function closemenu() {
  sidemenu.style.right = "-200px";
  document.removeEventListener("click", handleOutsideClick);
}

function handleOutsideClick(event) {
  const clickedInsideMenu = sidemenu.contains(event.target);
  const clickedMenuIcon = menuIcon.contains(event.target);

  if (!clickedInsideMenu && !clickedMenuIcon) {
    closemenu();
  }
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyGqesXraifMbtXcrjQkinDwFlvel0KG1WonnWncQuPQFdettTIRzYNSCZUOvdXlS30/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// Animating the Role of FrontEnd Developer

// Initialize the typing animation
const typingTextEle = document.getElementById("animation");

// Create an array of typing text
const typingTexts = [
  "Web Developer  ",
  "Software Engineer  ",
  "Java Developer   ",
];

// Create a function to display the typing animation for a given text
function playTypingAnimation(text) {
  // Loop through each character and add it to the element
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingTextEle.textContent += text[i];
    }, i * 200); // Increase the delay to slow down the typing animation
  }

  // Once the animation is complete, reset the text and start over
  setTimeout(() => {
    typingTextEle.textContent = "";
    playTypingAnimation(
      typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]
    );
  }, text.length * 200);
}

// Start the typing animation loop
playTypingAnimation(typingTexts[0]);

window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Function to add or remove the 'active' class based on section in view
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observerOptions = {
  threshold: 0.5, // 50% of the section should be visible to be considered 'in view'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Remove 'active' from all nav links
      navLinks.forEach((link) => link.classList.remove("active"));
      // Add 'active' to the current section's nav link
      const activeLink = document.querySelector(
        `a[href="#${entry.target.id}"]`
      );
      activeLink.classList.add("active");
    }
  });
}, observerOptions);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});

// Scroll event listener for background color change
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

document.getElementById("logo").addEventListener("click", function () {
  window.scrollTo({
    top: 0, // Scroll to the top of the page
    behavior: "smooth", // Smooth scrolling
  });
});
