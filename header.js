document.addEventListener("DOMContentLoaded", function () {
  // Create the navbar container
  const navbar = document.createElement("nav");
  navbar.className = "navbar";
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

  // Create the logo
  const logo = document.createElement("div");
  logo.className = "logo";

  const logoImg = document.createElement("img");
  logoImg.src =
    "https://images.ctfassets.net/26ep875sz1dl/5tqbcXMxG54o08zYxhm3CT/0d9dd19f38a7fdd95bc2d8c1a9fd57c5/logo_white1__1_.svg";
  logoImg.alt = "newcleo Logo";
  logoImg.style.height = "40px";
  logoImg.style.width = "7.6rem";

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

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color:rgb(2, 81, 82);
        padding: 10px 220px;
    }

    .nav-links {
        list-style: none;
        display: flex;
        gap:25px;
        margin: 0;
        padding: 0;
    }

    .nav-links li {
        position: relative;
        display:flex;
        flex-direction: row;
        align-items:center;
        gap:5px;
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
`;

  document.head.appendChild(style);
});
