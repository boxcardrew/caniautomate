import  { useState } from 'react'
import Link from 'next/link'
import ActiveLink from '../libs/ActiveLink'
import Catergory from './category'
import { useRouter } from 'next/router'




const Nav = () => {
  const router = useRouter();
  const [isShown, setIsShown] = useState(false);
  const displayCats = (e) => {
    const item = document.getElementById('expanded');
    item.classList.toggle('active');
    let pressed = (item.getAttribute('aria-pressed') === true);

    item.setAttribute('aria-pressed', !pressed);
    setIsShown(!isShown);
    };
  const handleKeyPress = function(event) {
        // Check to see if space or enter were pressed
    if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") { // "Spacebar" for IE11 support
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    displayCats(event.target);
    }
  }
  
  const links = [
    { path: '/build', label: 'Build', icon: '/buildx2.png' },
    { path: '/guides', label: 'Guides', icon: '/guidesx2.png' },
  ];
  const isProductsRoute = router.pathname.split('/')[1] === 'products';
  console.log(router.pathname)
  


  return (
    <nav className="menu">
      <div id="#large-nav" style={{ margin: '0 20px' }}>
          <ul className="nav-items">
            <li className="logo">
              <Link href='/'>
                <a><img src="/Light-Logo-2x.png" /></a>
              </Link>
            </li>
          <div className="nav-links">
            <div className="nav-left">
            {links.map(({ path, label, icon}) => (
              <ActiveLink activeClassName="active" href={path} key={label}>
                <a className="">
                  <li key={path}>
                    <img src={icon} width="40px" height="40px"/>
                    <span className="label">{label}</span>
                  </li>
                </a>
              </ActiveLink>
            ))}
            {isProductsRoute 
            ? <a id="expanded" className="active" role='button' aria-pressed="false" tabIndex="0">
                <li>
                  <img src="/explorex2.png" width="40px" height="40px"/>
                  <span className="label">Explore</span>
                </li>
              </a>
            : <a id="expanded" className="" onClick={displayCats} onKeyDown={handleKeyPress} role='button' aria-pressed="false" tabIndex="0">  
                <li>
                  <img src="/explorex2.png" width="40px" height="40px"/>
                  <span className="label">Explore</span>
                </li>
              </a>
            } 
            </div>
            <div className="nav-right">
              <li className="right">
                <form className="search">
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg></span>
                <input placeholder="Search for anything"></input>
                </form>
              </li>
              {/* <li className="right">
                <Link href="/">
                  <a>Alert</a>
                </Link>
              </li>
              <li className="right">
                <Link href="/">
                  <a>Profile</a>
                </Link>
              </li> */}
            </div>
            </div>
          </ul>
      </div>
      {(isShown) ? <Catergory /> : null}
      <nav id="small-nav">

      </nav>
      

      <style jsx>{`
        :global(body) {
          margin: 0;
        }
        .menu {
          position: sticky;
          top: 0;
          text-align: center;
          width: 100%;
          height: 110px;
          background: #fff;
          z-index: 2;
          padding-top: 15px;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

        }
        #small-nav {
          display: none;
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
        }
        .nav-left a {
          width: 105px;
          height: 82px;
          margin: 0 20px;
        }
        .nav-left .active {
          width: 105px;
          height: 82px;
          background: #EDF1F7;
          margin: 0 20px;
          box-shadow: 0px 3px 6px #00000029;
        }
        .nav-left a:hover {
          width: 105px;
          height: 82px;
          background: #EDF1F7;
          margin: 0 20px;
          box-shadow: 0px 3px 6px #00000029;
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
          color: #4173C0;
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
          .search input{
            display: none;
          }
          .search span {
            display: block;
          }
        } 
        .search input {
          padding: 15px 50px;
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
      `}</style>
    </nav>
  )
}

export default Nav
