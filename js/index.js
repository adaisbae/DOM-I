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

// NAVIGATION

const navItems = document.querySelectorAll('nav a');
// one way I added nav items text
navItems[0].textContent = 'Services';
navItems[1].textContent = 'Product';
navItems[2].textContent = 'Vision';
navItems[3].textContent = 'Features';
navItems[4].textContent = 'About';
navItems[5].textContent = 'Contact';

// 2nd way to add nav items text - why is the class name "undefined"? did not set the text
// navItems[0].setAttribute('nav-item-1', siteContent['nav'][0]);
// navItems[1].setAttribute('nav-item-2', sitecontent['nav'][1]);
// navItems[2].setAttribute('nav-item-3', siteContent['nav'][2]);
// navItems[3].setAttribute('nav-item-4', siteContent['nav'][3]);
// navItems[4].setAttribute('nav-item-5', siteContent['nav'][4]);
// navItems[5].setAttribute('nav-item-6', siteContent['nav'][5]);

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// TOP CONTENT - HEADER / BUTTON / LOGO

let topContent = document.querySelector('.cta-text h1');
topContent.textContent = 'DOM \n IS \n AWESOME \n';
topContent.setAttribute('white-space', 'pre');

let topContentButton = document.querySelector('.cta-text button');
topContentButton.textContent = 'Get Started';

let topContentImg = document.getElementById("cta-img");
topContentImg.setAttribute('src', siteContent["cta"]["img-src"])



