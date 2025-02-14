document.addEventListener("DOMContentLoaded", function () {
  const fontFaceCSS = `
    @font-face {
      font-family: 'Gotham';
      src: url('https://www.newcleo.com/static/fonts/Gotham-Book.woff2') format('woff2');
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: 'Gotham';
      src: url('https://www.newcleo.com/static/fonts/Gotham-Bold.woff2') format('woff2');
      font-weight: 700;
      font-style: normal;
    }

    @font-face {
      font-family: 'Gotham';
      src: url('https://www.newcleo.com/static/fonts/Gotham-BoldItalic.woff2') format('woff2');
      font-weight: 700;
      font-style: italic;
    }

    @font-face {
      font-family: 'Gotham';
      src: url('https://www.newcleo.com/static/fonts/Gotham-BookItalic.woff2') format('woff2');
      font-weight: 400;
      font-style: italic;
    }

    @font-face {
      font-family: 'Gotham';
      src: url('https://www.newcleo.com/static/fonts/Gotham-Ultra.woff2') format('woff2');
      font-weight: 900;
      font-style: normal;
    }

    @font-face {
      font-family: 'Gotham';
      src: url('https://www.newcleo.com/static/fonts/Gotham-Medium.woff2') format('woff2');
      font-weight: 500;
      font-style: normal;
    }
  `;

  const fontFaceStyle = document.createElement("style");
  fontFaceStyle.textContent = fontFaceCSS;
  document.head.appendChild(fontFaceStyle);

  // Create the navbar container
  BlackHeader();
  GreenHeader();
});

function BlackHeader() {
  const container = document.createElement("div");
  container.className = "blackcontainer";

  const items = [
    {
      href: "/about-us/newcleo-group/",
      text: "newcleo Group",
    },
    {
      href: "/press-media/",
      text: "Press and media",
    },
    {
      href: "/supply-chain/",
      text: "Supply Chain",
    },
    {
      href: "https://www.newcleo.com/investors/",
      text: "Investors",
    },
    {
      href: "/contact-us/",
      text: "Contact us",
    },
  ];

  const navContainer = document.createElement("div");
  navContainer.className = "navContainer";

  container.appendChild(navContainer);

  items.map((item) => {
    const singleItem = document.createElement("a");
    singleItem.className = "singleItem";
    singleItem.href = item.href;
    singleItem.innerHTML = item.text;

    navContainer.appendChild(singleItem);
  });

  document.body.appendChild(container);

  const blackContainerStyles = document.createElement("style");
  blackContainerStyles.textContent = `
          .blackcontainer {
            height:40px;
            background-color:#333;
            padding: 0px 15%;
            @media(max-width: 1550px){
              padding: 10px 10%;
            }
            @media(max-width: 1250px){
              padding: 0px 10px;
            }
          }

          .navContainer {
            display:flex;
            height:100%;
            width:100%;
            align-items:center;
            justify-content:flex-end;
            gap:10px;
            position:relative;
            right:15px;
          }

          .singleItem {
            color:white !important;
            text-decoration: none !important;
            font-size:12px;
            font-weight:bold;
            padding:0px 10px;
            cursor:pointer;
            transition: all 0.5s;
            display:flex;
            align-items:center;
            height:100%;
          }

          .singleItem:hover{
            background-color:rgba(255, 255, 255, 0.15);
          }

      `;
  document.head.appendChild(blackContainerStyles);
}

function GreenHeader() {
  const navbar = document.createElement("nav");
  navbar.className = "navbarContainer";

  // Create the logo
  const logo = document.createElement("div");
  logo.className = "logo";

  const logoImg = document.createElement("img");
  logoImg.src =
    "https://images.ctfassets.net/26ep875sz1dl/5tqbcXMxG54o08zYxhm3CT/0d9dd19f38a7fdd95bc2d8c1a9fd57c5/logo_white1__1_.svg";
  logoImg.alt = "newcleo Logo";
  logoImg.style.height = "40px";

  logo.appendChild(logoImg);
  navbar.appendChild(logo);

  // Create the navigation links container
  const navLinks = document.createElement("ul");
  navLinks.className = "nav-links";

  // Define the navigation items and their dropdowns
  const navItems = [
    {
      text: "PRODUCTS AND SERVICES",
      href: "/products-services/",
      dropdown: [
        {
          text: "Our services and skills",
          href: "/products-services/services-skills/",
        },
        {
          text: "Delivering our Gen-IV vision",
          href: "/products-services/delivering-our-gen-iv-vision/",
        },
      ],
    },
    {
      text: "OUR TECHNOLOGY",
      href: "/our-technology/",
      dropdown: [
        { text: "Reactors", href: "/our-technology/reactors/" },
        { text: "Fuel", href: "/our-technology/fuel/" },
      ],
    },
    {
      text: "ABOUT US",
      href: "/about-us/",
      dropdown: [
        { text: "<i>new</i>cleo Group", href: "/about-us/newcleo-group/" },
        { text: "Our leadership", href: "/about-us/our-leadership/" },
        {
          text: "Partnerships and memberships",
          href: "/about-us/partnerships-and-memberships/",
        },
        {
          text: "Our purpose, vision, mission, and values",
          href: "/about-us/purpose-vision-mission-values/",
        },
        { text: "Our ESG strategy", href: "/about-us/our-esg-strategy/" },
        { text: "Locations", href: "/about-us/locations/" },
      ],
    },
    {
      text: "NEWS & INSIGHTS",
      href: "/news-insights/",
      dropdown: null, // No dropdown for this item
    },
    {
      text: "JOIN OUR TEAM",
      href: "/join-our-team/",
      dropdown: [
        {
          text: "Working at <i>new</i>cleo",
          href: "/join-the-team/working-at-newcleo/",
        },
        {
          text: "Graduate opportunities & internships",
          href: "/join-the-team/graduate-opportunities/",
        },
        { text: "Current vacancies", href: "/join-the-team/current-vacancies" },
        {
          text: "Armed Forces Network",
          href: "/join-the-team/armed-forces-network",
        },
      ],
    },
  ];

  // Function to create a dropdown menu
  function createDropdown(items) {
    const dropdown = document.createElement("ul");
    dropdown.className = "dropdown";

    items.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.className = "dropdownLink";
      a.href = item.href;
      a.innerHTML = item.text;
      li.appendChild(a);
      dropdown.appendChild(li);
    });

    return dropdown;
  }

  // Add navigation items to the navbar
  navItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const arrow = document.createElement("span");
    li.className = "navLinkContainer";
    arrow.className = "arrow";
    arrow.innerHTML = `<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 32 32" aria-hidden="true" class="menu-arrow"><path d="M16 28L9 21 10.4 19.6 16 25.2 21.6 19.6 23 21z"></path></svg>`;
    a.href = item.href;
    a.innerHTML = item.text;
    a.className = "linkLabel";
    li.appendChild(a);
    if (item.dropdown) {
      li.appendChild(arrow);
    }

    if (item.dropdown) {
      const dropdown = createDropdown(item.dropdown);
      li.appendChild(dropdown);

      // Add hover event listeners
      li.addEventListener("mouseenter", () => {
        dropdown.style.display = "block";
      });

      li.addEventListener("mouseleave", () => {
        dropdown.style.display = "none";
      });
    }

    navLinks.appendChild(li);
  });

  // DESKTOP MENU BUTTON
  let menuButtonStateDesktop = false;
  const menuButtonDesktop = document.createElement("div");
  menuButtonDesktop.addEventListener("click", () => {
    menuButtonStateDesktop = !menuButtonStateDesktop;
    // Update class dynamically
    menuButtonDesktop.className = menuButtonStateDesktop
      ? "selectedMenuButtonDesktop"
      : "menuButtonDesktop";
    // Update SVG dynamically
    menuButtonDesktop.innerHTML = menuButtonStateDesktop
      ? `<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>`
      : `<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 12H14V13H2zM2 9H14V10H2zM2 6H14V7H2zM2 3H14V4H2z"></path></svg>`;
  });

  menuButtonDesktop.className = "menuButtonDesktop";
  menuButtonDesktop.innerHTML = `<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 12H14V13H2zM2 9H14V10H2zM2 6H14V7H2zM2 3H14V4H2z"></path></svg>`;

  // MOBILE  MENU BUTTON
  let menuButtonStateMobile = false;
  const menuButtonMobile = document.createElement("div");
  menuButtonMobile.addEventListener("click", () => {
    menuButtonStateMobile = !menuButtonStateMobile;
    // Update class dynamically
    menuButtonMobile.className = menuButtonStateMobile
      ? "selectedMenuButtonMobile"
      : "menuButtonMobile";
    // Update SVG dynamically
    menuButtonMobile.innerHTML = menuButtonStateMobile
      ? `<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>`
      : `<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 12H14V13H2zM2 9H14V10H2zM2 6H14V7H2zM2 3H14V4H2z"></path></svg>`;
  });
  menuButtonMobile.className = "menuButtonMobile";
  menuButtonMobile.innerHTML = `<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 12H14V13H2zM2 9H14V10H2zM2 6H14V7H2zM2 3H14V4H2z"></path></svg>`;

  navLinks.appendChild(menuButtonDesktop);
  navLinks.appendChild(menuButtonMobile);
  navbar.appendChild(navLinks);

  // Add the navbar to the body
  document.body.appendChild(navbar);

  // Add styles dynamically
  const style = document.createElement("style");
  style.textContent = `
      body {
        font-family: 'Gotham', Arial, sans-serif;
          margin: 0;
          padding: 0;
      }

      .navbarContainer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color:rgb(2, 81, 82);
          padding: 10px 15%;
          border-radius:0px;
          @media(max-width: 1550px){
            padding: 10px 10%;
          }
          @media(max-width: 1250px){
            padding: 10px 10px;
          }
      }

      .nav-links {
          list-style: none;
          display: flex;
          gap:25px;
          margin: 0;
          padding: 0;
           @media(max-width: 1250px){
            gap: 5px;
          }
      }

      .nav-links li {
          position: relative;
          display:flex;
          flex-direction: row;
          align-items:center;
          gap:5px;
          @media(max-width: 900px){
            display:none;
          }
      }

      .arrow {
          color: white;
          text-decoration: none;
          display: block;
          transition: all 0.3s;
      }

      .nav-links li a {
          color: white;
          text-decoration: none;
          display: block;
          transition: all 0.3s;
          font-size: 12px;
      }

      .arrow { 
        font-size: 12px;
        display:flex;
        align-items:center;
        color: white;
        text-decoration: none;
        transition: all 0.3s;
        position:relative;
        top:-5px;
      }

      .nav-links li:hover {
        .linkLabel {
          color:rgb(237, 108, 34);
        };
        .arrow {
            color:rgb(237, 108, 34);
            rotate: 180deg;
            top:5px;
        }
      }

      .dropdown {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #444;
          list-style: none;
          padding: 0;
          margin: 0;
          min-width: 200px;
      }

      .dropdown li {
      transition: all 0.2s;
      cusor:pointer;
        display:flex;
        justify-content:center;
      }

      .dropdown li a {
          width: 100%;
          padding: 10px;
          display: flex;
          justify-content:flex-start;
          font-size: 14px;
          border-bottom: solid 1px grey;
      }

      .dropdown li:hover {
        background-color: rgb(148, 148, 148) !important;
        color: rgb(198, 198, 198) !important;
      }

      .menuButtonDesktop{
        width:32px;
        height:32px;
        background-color:white;
        border-radius:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        @media(max-width: 900px){
          display:none;
        } 
      }

      .menuButtonMobile{
        width:32px;
        height:32px;
        background-color:white;
        border-radius:100%;
        display:none;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        @media(max-width: 900px){
          display:flex;
        } 
      }

      .selectedMenuButtonDesktop{
        width:32px;
        height:32px;
        background-color:rgba(255, 255, 255, 0.125);
        border-radius:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        svg {
          color:white;
        }

        @media(max-width: 900px){
          display:none;
        } 
      }

      .selectedMenuButtonMobile{
       width:32px;
        height:32px;
        background-color:rgba(255, 255, 255, 0.125);
        border-radius:100%;
        display:none;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        svg {
          color:white;
        }

        @media(max-width: 900px){
          display:flex;
        } 
      }
  `;

  document.head.appendChild(style);
}
