var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");


function opentab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbyGqesXraifMbtXcrjQkinDwFlvel0KG1WonnWncQuPQFdettTIRzYNSCZUOvdXlS30/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })




  // Animating the Role of FrontEnd Developer

  // Initialize the typing animation
  const typingTextEle = document.getElementById('animation');

  // Create an array of typing text
  const typingTexts = [
  'Web Developer  ',
  'Software Engineer  ',
  'Java Developer   ',
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
    typingTextEle.textContent = '';
      playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
  }, text.length * 200);
  }

  // Start the typing animation loop
  playTypingAnimation(typingTexts[0]);

  
