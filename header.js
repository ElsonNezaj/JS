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

  // GLOBAL VARS
  let menuButtonStateDesktop = false; // CHANGE TO FALSE WHEN FINISHED
  let menuButtonStateMobile = true;

  const state = {
    get menuButtonStateDesktop() {
      return menuButtonStateDesktop;
    },
    set menuButtonStateDesktop(value) {
      menuButtonStateDesktop = value;
    },
  };

  // Create the navbar container
  BlackHeader();
  GreenHeader({
    desktopState: state,
    mobileState: menuButtonStateMobile,
  });
  DesktopNavigation({ desktopState: state });
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
              padding: 0px 10%;
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

function GreenHeader({ desktopState, mobileState }) {
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
  logoImg.style.width = "7.86rem";

  logo.appendChild(logoImg);
  navbar.appendChild(logo);

  // Create the navigation links container
  const navLinks = document.createElement("ul");
  navLinks.className = "nav-links";

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
  const menuButtonDesktop = document.createElement("div");
  menuButtonDesktop.addEventListener("click", () => {
    desktopState.menuButtonStateDesktop = !desktopState.menuButtonStateDesktop;
    // Update class dynamically
    menuButtonDesktop.className = desktopState.menuButtonStateDesktop
      ? "selectedMenuButtonDesktop"
      : "menuButtonDesktop";
    // Update SVG dynamically
    menuButtonDesktop.innerHTML = desktopState.menuButtonStateDesktop
      ? `<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>`
      : `<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 12H14V13H2zM2 9H14V10H2zM2 6H14V7H2zM2 3H14V4H2z"></path></svg>`;
  });

  menuButtonDesktop.className = "menuButtonDesktop";
  menuButtonDesktop.innerHTML = `<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 12H14V13H2zM2 9H14V10H2zM2 6H14V7H2zM2 3H14V4H2z"></path></svg>`;

  // MOBILE  MENU BUTTON
  const menuButtonMobile = document.createElement("div");
  menuButtonMobile.addEventListener("click", () => {
    mobileState = !mobileState;
    // Update class dynamically
    menuButtonMobile.className = mobileState
      ? "selectedMenuButtonMobile"
      : "menuButtonMobile";
    // Update SVG dynamically
    menuButtonMobile.innerHTML = mobileState
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
          z-index:1;
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
        svg {
          color: rgb(2, 81, 82);
          stroke: rgb(2, 81, 82);
        }
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
        svg {
          color : rgb(2, 81, 82);
          stroke: rgb(2, 81, 82);
        }
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

function DesktopNavigation({ desktopState }) {
  let desktopNav = document.querySelector(".desktopNavigationContainer");

  if (!desktopNav) {
    desktopNav = document.createElement("div");
    desktopNav.className = "desktopNavigationContainer";
    document.body.appendChild(desktopNav);
  }

  const updateNavigation = () => {
    if (desktopState.menuButtonStateDesktop) {
      desktopNav.className = "desktopNavigationContainer";
    } else {
      desktopNav.className = "hideNavbar";
    }
  };

  // USE THIS CODE FOR OTHER CONDITIONAL RENDERING
  Object.defineProperty(desktopState, "menuButtonStateDesktop", {
    set(newValue) {
      this._menuButtonStateDesktop = newValue;
      updateNavigation();
    },
    get() {
      return this._menuButtonStateDesktop;
    },
  });

  updateNavigation();

  // NAV HEADER
  const navContainer = document.createElement("div");
  navContainer.className = "navList";
  const navTitle = document.createElement("div");
  navTitle.className = "navTitle";
  navTitle.innerHTML = "<p>Navigation</p>";
  navContainer.appendChild(navTitle);
  // NAV HEADER

  // ROUTES CONTAINER
  const routesContainer = document.createElement("div");
  routesContainer.className = "routesContainer";
  const mainRoutes = document.createElement("ul");
  mainRoutes.className = "mainRoutesContainer";
  let subRoutes = [];

  navItems.map((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const arrow = document.createElement("span");
    arrow.innerHTML = `<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="18" height="18" viewBox="0 0 32 32" aria-hidden="true"><path d="M22 16L12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z"></path></svg>`;
    a.href = item.href;
    a.innerHTML = item.text;

    li.appendChild(a);
    li.appendChild(arrow);

    li.addEventListener("mouseenter", () => {
      if (item.dropdown) {
        subRoutes = item.dropdown;
      } else {
        subRoutes = [];
      }
    });

    mainRoutes.appendChild(li);
  });

  routesContainer.appendChild(mainRoutes);
  // ROUTES CONTAINER

  navContainer.appendChild(routesContainer);
  desktopNav.appendChild(navContainer);

  const style = document.createElement("style");
  style.id = "desktopNavStyles"; // Give an ID to prevent duplicates
  style.textContent = `
        @keyframes showNavbar {
          0% {
            height: 0px;
            opacity: 0;
          }
        
          100% {
           height: calc(100vh - 104px - 5rem);
           opacity: 1;
          }
        }

          @keyframes hideNav {        
          0% {
           height: calc(100vh - 104px - 5rem);
           opacity: 1;
          }
          100% {
            height: 0px;
            opacity: 0;
            visibility:hidden;
          }
        }

      .desktopNavigationContainer {
        width: 100vw;
        position: absolute;
        left: 0;
        top: 104px;
        background-color: rgb(2, 81, 82);
        animation-name: showNavbar;
        animation-duration: 0.5s;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        overflow:hidden;
        padding-top: 5rem;
        display: flex;
        flex-direction: column;
      }

      .navTitle{
        color:white;
        font-weight: 700;
        font-size:1.6rem;
        position:relative;
        width: 70%;
      }

      .navTitle p {
        margin: 0px;
      }

      .navTitle p::before{
        content: " ";
        width: calc(100% - 0.1875rem);
        height: 0.1875rem;
        background-color: transparent;
        position: absolute;
        left: 0px;
        bottom: -0.5rem;
        border-left: 0.1875rem solid transparent;
        border-bottom: 0.1875rem solid rgb(87, 229, 229);
      }

       .navTitle p::after{
        content: " ";
        width: calc(100% - 0.1875rem);
        height: 0.1875rem;
        background-color: transparent;
        position: absolute;
        left: 0px;
        bottom: -0.5rem;
        border-left: 0.1875rem solid transparent;
        border-bottom: 0.1875rem solid rgb(87, 229, 229);
      }

      .navList{ 
        width: 80%;
        margin: 0 auto;
        display:flex;
        flex-direction:column;
      }

      .hideNavbar {
        width: 100vw;
        position: absolute;
        left: 0;
        top: 104px;
        background-color: rgb(2, 81, 82);
        animation-name: hideNav;
        animation-duration: 0.5s;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        overflow:hidden;
      }

      .routesContainer{
        display:flex;
        gap: 10px;
      }

      .mainRoutesContainer{
        display:flex;
        flex-direction: column;
        gap:2rem;
        padding-top:15px;
        list-style:none;
        padding-left: 0px;
      }

      .mainRoutesContainer li {
        display:flex;
        align-items:center;
        gap: 10px;
        cursor:pointer;
      }

      .mainRoutesContainer li a {
        font-size: 1.25rem;
        text-decoration: none;
        color:white;
        font-weight: lighter;
      }

      .mainRoutesContainer li span {
        svg {
          color:white;
      }
    }
  }
`;
  document.head.appendChild(style);
}
