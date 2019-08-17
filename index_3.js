

const about = `<div class="fix-me-about"><h1>About Me</h1></div>
          <p>Recently graduated from Le Wagon coding bootcamp in Berlin, I'm a junior developer with a focus on back-end development, web apps, and software development. I love using MVC and schema visualisation to get the behind-the-scenes magic of a project running, and I'm particularly fond of Ruby on Rails, the framework I've learned to use for the majority of my projects.</p>
          <p>As a former literature major and English teacher in France for many years, I also love reading source code and finding out how the libraries I use actually work. Research has always been one of my greatest passions, and I bring this enthusiasm to coding. I always need to be challenged to learn more!</p>
          <p>In a workplace environment, I prize good communication and empathetic listening. I will always take the time to explain what I'm doing, and I don't hesitate to ask questions so that the work I do can truly meet the needs of my team or my particular client.</p>
          `
const contact = `<div class="fix-me-contact"><h1>Contact Me:</h1></div>
          <p>sbalsom@protonmail.com</p>
          <p>+33 7 69 45 47 53</p>`

const cards = `<div class="cards-container">

  <div class="display-card">
    <div class="card-image-1"></div>
    <div class="card-text">
      <p>Backend support to manage your database, build a functioning web application, debug and improve the software architecture and features of your online app</p>
    </div>
  </div>
  <div class="display-card">
    <div class="card-image-2"></div>
    <div class="card-text">
      <p>Styling for your website to attract customers and give them the best possible experience interacting with your product or service online</p>
    </div>
  </div>
  <div class="display-card">
    <div class="card-image-3"></div>
    <div class="card-text">
      <p>Branding, logos, and design suited to your needs</p>
    </div>
</div>`

const aboutPanel = document.querySelector(".cd-panel-about")
const contactPanel = document.querySelector(".cd-panel-contact")
const aboutButton = document.querySelector(".toggle-button-about")
const contactButton = document.querySelector(".toggle-button-contact")
const closeButton = document.querySelector(".cd-panel__close")
const portButton = document.querySelector(".portfolio-button-before")
const siteContent = document.querySelector(".inner-content")
const contentAbout = document.getElementById("about-content")
const contentContact = document.getElementById("contact-content")
console.log(portButton);

aboutButton.addEventListener("click", (event) => {
  contentAbout.innerHTML = ''
  console.log(event);
  event.preventDefault;
  contactPanel.classList.remove("cd-panel--is-visible");
  aboutPanel.classList.toggle("cd-panel--is-visible");
  contentAbout.insertAdjacentHTML('beforeend', about)
});

contactButton.addEventListener("click", (event) => {
  contentContact.innerHTML = ''
  console.log(event);
  event.preventDefault;
  aboutPanel.classList.remove("cd-panel--is-visible");
  contactPanel.classList.toggle("cd-panel--is-visible");
  contentContact.insertAdjacentHTML('beforeend', contact)
});

portButton.addEventListener("click", (event) => {
  aboutPanel.classList.remove("cd-panel--is-visible");
  contactPanel.classList.remove("cd-panel--is-visible");
  console.log(event);
  event.preventDefault;
  const before = siteContent.innerHTML;
  console.log(event.currentTarget);
  siteContent.innerHTML = '';
  siteContent.insertAdjacentHTML('beforeend', cards);
  event.currentTarget.classList.remove('portfolio-button-before');
  event.currentTarget.classList.add('portfolio-button-return');
  const returnButton = document.querySelector(".portfolio-button-return");
  returnButton.addEventListener("click", (event) => {
    console.log(event);
    siteContent.innerHTML = before
    event.currentTarget.classList.remove('portfolio-button-return');
    event.currentTarget.classList.add('portfolio-button-before');
  });
});
