import { useState } from "react";
import Link from "next/link";
import ActiveLink from "../libs/ActiveLink";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  // const [isShown, setIsShown] = useState(false);
  // const displayCats = (e) => {
  //   const item = document.getElementById("expanded");
  //   item.classList.toggle("active");
  //   let pressed = item.getAttribute("aria-pressed") === true;

  //   item.setAttribute("aria-pressed", !pressed);
  //   setIsShown(!isShown);
  // };
  // const handleKeyPress = function (event) {
  //   // Check to see if space or enter were pressed
  //   if (
  //     event.key === " " ||
  //     event.key === "Enter" ||
  //     event.key === "Spacebar"
  //   ) {
  //     // "Spacebar" for IE11 support
  //     // Prevent the default action to stop scrolling when space is pressed
  //     event.preventDefault();
  //     displayCats(event.target);
  //   }
  // };

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const openStyle = menuIsOpen
    ? { opacity: "1" }
    : { opacity: "0", visibility: "hidden" };

  const links = [
    { path: "/build", label: "Build", icon: "/buildx2.png" },
    { path: "/guides", label: "Guides", icon: "/guidesx2.png" },
  ];

  const categories = [
    {
      path: "/products/hubs",
      label: `Hubs & Bridges`,
      icon: "/icons/bx-cog.svg",
      featured: true,
    },
    {
      path: "/products/lighting",
      label: "Lighting & Switches",
      icon: "/icons/bx-bulb.svg",
      featured: true,
    },
    {
      path: "/products/locks",
      label: "Locks & Security",
      icon: "/icons/bx-lock-alt.svg",
      featured: true,
    },
    {
      path: "/products/cameras",
      label: "Cameras & Doorbells",
      icon: "/icons/bx-cctv.svg",
      featured: true,
    },
    {
      path: "/products/plugs",
      label: "Plugs & Outlets",
      icon: "/icons/bx-plug.svg",
      featured: true,
    },
    {
      path: "/products/speakers",
      label: "Speakers & Displays",
      icon: "/icons/bx-speaker.svg",
      featured: true,
    },
    {
      path: "/products/thermostats",
      label: "Thermostats",
      icon: "",
      featured: false,
    },
    {
      path: "/products/network-wifi",
      label: "Network & Wifi",
      icon: "",
      featured: false,
    },
    {
      path: "/products/appliances",
      label: "Appliances",
      icon: "",
      featured: false,
    },
    { path: "/products/outdoor", label: "Outdoor", icon: "", featured: false },
    { path: "/products/other", label: "Other", icon: "", featured: false },
  ];

  const isProductsRoute = router.pathname.split("/")[1] === "products";
  console.log(router.pathname);

  return (
    <nav className="menu">
      <div id="large-nav" style={{ margin: "0 20px" }}>
        <ul className="nav-items">
          <li className="logo">
            <Link href="/">
              <a>
                <img src="/Light-Logo-2x.png" alt="Can I Automate Logo" />
              </a>
            </Link>
          </li>
          <nav className="nav-links">
            <div className="nav-left">
              <ul className="nav-list">
                {links.map(({ path, label, icon }) => (
                  <ActiveLink activeClassName="active" href={path} key={label}>
                    <li key={path}>
                      <a className="">
                        <img src={icon} width="36px" height="36px" />
                        <span className="label">{label}</span>
                      </a>
                    </li>
                  </ActiveLink>
                ))}
                <li className="nav-item-hover">
                  <Link href="/products/hubs">
                    <a className="hover-link">
                      <img src="/explorex2.png" width="36px" height="36px" />
                      <span className="label">Explore</span>
                    </a>
                  </Link>
                  <div className="hover-menu">
                    <ul className="featured-list">
                      {categories
                        .filter((cat) => cat.featured)
                        .map(({ path, label, icon }) => (
                          <Link href={path}>
                            <a>
                              <li className="featured-item">
                                {icon && (
                                  <img src={icon} width="28px" height="28px" />
                                )}
                                <span>
                                  {label.split("&")[0]}
                                  <br />
                                  {"&"}
                                  {label.split("&")[1]}
                                </span>
                              </li>
                            </a>
                          </Link>
                        ))}
                    </ul>
                    <ul className="list">
                      {categories
                        .filter((cat) => !cat.featured)
                        .map(({ path, label, icon }) => (
                          <Link href={path}>
                            <a>
                              <li className="item">{label}</li>
                            </a>
                          </Link>
                        ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="nav-right">{/*Log In, Profile, Etc. */}</div>
          </nav>
        </ul>
      </div>

      <div id="small-nav">
        <ul>
          <Link href="/">
            <li>
              <div className="mobile-logo">
                <img src="/mobile-logo.png" alt="Can I Automate Logo" />
              </div>
            </li>
          </Link>

          <li>
            <button
              className="hamburger"
              onClick={() => setMenuIsOpen(!menuIsOpen)}
              aria-label="Menu"
            >
              { menuIsOpen ?<img src="/close.svg" height="30" width="30" alt="menu" />
              :
              <img src="/hamburger.svg" height="30" width="30" alt="menu" />}
            </button>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" style={openStyle}>
        <ul>
          <li className="search-mobile">
            <input
              type="text"
              placeholder="Search"
              aria-label="Search Products"
            />
          </li>
          <li>
            <Link href="/build">
              <a>Build</a>
            </Link>
          </li>
          <li>
            <Link href="/guides">
              <a>Guides</a>
            </Link>
          </li>
          <li>
            <Link href="/products/hubs">
              <a>Explore</a>
            </Link>
            {/* <ul className="mobile-submenu">
              {categories
                .map(({ path, label, icon }) => (
                  <Link href={path}>
                    <a>
                      <li className="item">{label}</li>
                    </a>
                  </Link>
                ))}
            </ul> */}
          </li>
        </ul>
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
        }
        .menu {
          position: sticky;
          top: 0;
          text-align: center;
          width: 100%;
          height: 100px;
          background: #fff;
          z-index: 3;
          padding-top: 15px;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

        }
        #small-nav {
          display: none;
        }
        .nav-item-hover:hover .hover-menu { 
          visibility: visible;
          opacity: 1;
        }
        .nav-item-hover:focus-within .hover-menu {
          visibility: visible;
          opacity: 1;
        }
        .hover-menu {
          opacity: 0;
          position: absolute;
          visibility: hidden;
          background: #FFFFFF;
          box-shadow: 0px 10px 70px rgba(0, 0, 0, 0.15);
          border-radius: 8px;
          transition: 150ms visibility 150ms linear, 150ms opacity 150ms linear;
          display: flex;
        }
        .hover-menu ul {
          list-style: none;
        }
        .featured-list {
         display: flex;
         padding: 1rem;
         flex-wrap: wrap;
         max-width: 350px;
         gap: 1em;
        }
        .featured-list a {
          flex-basis: 18ch;
        }
        .featured-list li {
          display: flex;
          gap: 1em;
          align-items: center;
          padding: 1em .5em;
          transition: all 200ms linear;
        }
        .featured-list li:hover {
          background: #F9FAFC;
          color: #4173c0;
          border-radius: 8px;
        }

        .featured-list span {
          max-width: 10ch;
          font-size: .8rem;
          font-weight: 700;
          display: inline-block;
          text-align: start;          
        }

        .list {
          background: #F9FAFC;
          color: rgba(30, 27, 27, 0.86);
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: .75em;
          font-size: .8rem;
          font-weight: 600;
          text-align: start;
          padding: 0 1em; 
        }


        .logo {
          grid-area: logo;
          position: relative;
        }
        .nav-links {
          grid-area: nav;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-start {
          margin-left: 40px;
        }
        .nav-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        }
        .nav-left li > a {
          width: 105px;
          height: 82px;
          margin: 0 20px;
        }
        .nav-left .active {
          
          height: 82px;
          
          margin: 0 20px;
        }
        .nav-left li:hover, .nav-left li:focus {
          
        }
        .nav-left li a:hover {
          color: #4173c0;
        }
        #expanded {
          cursor: pointer;
        }

        #expanded span::after {
          content: '';
          background: url('/arrow-down.svg');
          width: 24px;
          height: 24px;
          position: absolute;
          bottom: 10px;
        }

        .logo::after {
          content: '';
          height: 80px;
          width: 2px;
          background: #70707030;
          position: absolute;
          right: 0;
          top: 0;
        }
        .right {
          display: inline-block;
        }
        .logo img {
          width: 120px;
          height: auto;
        }
        .nav-items {
          display: grid;
          grid-template-rows: auto;
          grid-template-columns: 262px 1fr;
          grid-template-areas: 
            'logo nav';
          list-style: none;
        }
        nav > ul {
          padding: 4px 0px 4px 0px;
        }
        li {
          padding: 6px 8px;
        }
        .label {
          margin-top: 6px;
          font-size: 16px;
          display: block;
          font-weight: 700;
        }
        a {
          color: #000;
          text-decoration: none;
          font-size: 13px;
          display: inline-block;
        }
        .nav-right {
          display: flex;
          align-items: center;
        }
        .search {
          margin-right: 1em;
        }
        @media only screen and (max-width: 1150px) {
         
        } 
        .search input {
          padding: 15px 40px;
          border: none;
          box-shadow: 0px 3px 6px #00000029;
          border-radius: 12px;
        }
        .search span {
          position: relative;
          top: 7px;
          left: 40px;
        }
        .search input::placeholder {
          color: #70707081;
        }

        @media only screen and (max-width: 1150px) {
          #large-nav {
            display: none;
          }
          #small-nav {
            display: block;
          }
          #small-nav  ul {
            list-style: none;
            display: flex;
            justify-content: space-between;
            
          }
          #small-nav  {
            display: block;
            padding: 4px 6px;
            
          }
          .mobile-logo > img {
            width: 30px;
            height: auto;
          }
          .mobile-menu {
            text-align: left;
          }
          .mobile-menu a {
            font-size: 1.5rem;
            color: rgba(0, 0, 0, .7);
            padding-left: .25em;
          }
          .mobile-submenu {
            list-style: none;
            
            
            display: block;
          }
          .mobile-submenu a {
            display: block;
            margin: 1em 0;
            font-size: 1.25rem;
            color: rgba(0, 0, 0, .9);
          }
          .menu {
            height: 60px;
            padding: 8px;
          }
          .hamburger {
            background: none;
            border: none;
            padding: 5px 5px 5px 5px;
          }

          .search-mobile {
            flex-grow: 2;
          }
          .search-mobile > input {
            width: 95%;
            padding: 8px 15px 8px 40px;
            border: none;
            font-size: 1.5rem;
            border-radius: 8px;
            position: relative;
            background: #f6f6f6 url("/search-24px.svg") center left 8px no-repeat;
          }
          .mobile-menu {
            background: #fff;
            top: 60px;
            position: absolute;
            height: calc(100vh - 60px);
            width: 100vw;
            transition: 250ms linear;
            left: 0;
          }
          .mobile-menu > ul {
            list-style: none;
            height: 100vh;
            padding-top: 43px;
          }
          .mobile-menu > ul > li:first-of-type {
            margin-top: 1em;
          }
          .mobile-menu > ul > li {
            margin: 1.5em;
            font-weight: 700;
          }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
