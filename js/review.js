const siteContent = {
    "nav": {
      "nav-item-1": "Services",
      "nav-item-2": "Product",
      "nav-item-3": "Vision",
      "nav-item-4": "Features",
      "nav-item-5": "About",
      "nav-item-6": "Contact",
      "img-src": "img/logo.png"
    },
    "cta": {
      "h1": "DOM Is Awesome",
      "button": "Get Started",
      "img-src": "img/header-img.png"
    },
    "main-content": {
      "features-h4":"Features",
      "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "about-h4":"About",
      "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "middle-img-src": "img/mid-page-accent.jpg",
      "services-h4":"Services",
      "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "product-h4":"Product",
      "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "vision-h4":"Vision",
      "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
      "contact-h4" : "Contact",
      "address" : "123 Way 456 Street Somewhere, USA",
      "phone" : "1 (888) 888-8888",
      "email" : "sales@greatidea.io",
    },
    "footer": {
      "copyright" : "Copyright Great Idea! 2018"
    },
  };
  
  // Example: Update the img src for the logo
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"])



  let navItems = document.querySelectorAll('nav a');
  navItems[0].textContent = 'Services';
  navItems[1].textContent = 'Product';
  navItems[2].textContent = 'Vision';
  navItems[3].textContent = 'Features';
  navItems[4].textContent = 'About';
  navItems[5].textContent = 'Contact';

  //changed nav items to green
  navItems.forEach(nav => nav.style.color = 'green');

  //appendChild
  let skills = document.createElement('a');
  let navText = document.createTextNode('Skills')
  skills.appendChild(navText)
  document.querySelector('nav').appendChild(skills)

  //prepend
  let name = document.createElement('a')
  let nameText = document.createTextNode('Melissa')
  name.appendChild(nameText)
document.querySelector('nav').prepend(name)

let ctaText = document.querySelector('.cta-text h1')
ctaText.innerHTML = 'DOM<br>Is<br>Awesome<br>';

let ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = 'Get Started';

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

let mainHeaders = document.querySelectorAll('.text-content h4')
mainHeaders[0].textContent = siteContent['main-content']['features-h4'];
mainHeaders[1].textContent = siteContent['main-content']['about-h4'];
mainHeaders[2].textContent = siteContent['main-content']['services-h4'];
mainHeaders[3].textContent = siteContent['main-content']['product-h4'];
mainHeaders[4].textContent = siteContent['main-content']['vision-h4'];

let mainImg = document.getElementById('middle-img')
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let mainText = document.querySelectorAll('.text-content p');
mainText[0].textContent = siteContent['main-content']['features-content'];
mainText[1].textContent = siteContent['main-content']['about-content'];
mainText[2].textContent = siteContent['main-content']['services-content'];
mainText[3].textContent = siteContent['main-content']['product-content'];
mainText[4].textContent = siteContent['main-content']['vision-content'];

let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

let contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];

let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];