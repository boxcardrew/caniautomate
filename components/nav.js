import React from 'react'
import Link from 'next/link'
import ActiveLink from '../libs/ActiveLink'

const links = [
  { path: '/build', label: 'Build', icon: '/buildx2.png' },
  { path: '/guides', label: 'Guides', icon: '/guidesx2.png' },
  { path: '/products', label: 'Explore', icon: '/explorex2.png'}
]

const Nav = () => (
  <nav>
    <ul>
      <li className="logo">
        <Link href='/'>
          <a><img src="/cia-logox2.png" /></a>
        </Link>
      </li>
      <div className="nav-links">
        <div className=" nav-links nav-start">
        {links.map(({ path, label, icon }) => (
          <ActiveLink activeClassName="active" href={path}>
            <a className="">
              <li key={path}>
                <img src={icon} width="40px" height="40px"/>
                <span className="label">{label}</span>
              </li>
            </a>
          </ActiveLink>
        ))}
        </div>
        <div className="nav-links">
          <li className="right">
            <form className="search">
              <span><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg></span>
            <input placeholder="Search for anything"></input>
            </form>
          </li>
          <li className="right">
            <Link href="/">
              <a>Alert</a>
            </Link>
          </li>
          <li className="right">
            <Link href="/">
              <a>Profile</a>
            </Link>
          </li>
        </div>
      </div>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        position: sticky;
        top: 0;
        text-align: center;
        width: 100%;
        height: 120px;
        background: #fff;
        z-index: 2;
        padding-top: 15px;
        padding-left: 3.7em;
      }
      .logo {
        grid-area: logo;
        position: relative;
      }
      .nav-links {
        grid-area: nav;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
      .nav-start {
        margin-right: auto;
        margin-left: 40px;
      }
      .nav-start a {
        width: 105px;
        height: 82px;
        margin: 0 20px;
      }
      .nav-start .active {
        width: 105px;
        height: 82px;
        background: #EDF1F7;
        margin: 0 20px;
        box-shadow: 0px 3px 6px #00000029;
      }
      .nav-start a:hover {
        width: 105px;
        height: 82px;
        background: #EDF1F7;
        margin: 0 20px;
        box-shadow: 0px 3px 6px #00000029;
      }

      .logo::after {
        content: '';
        height: 90px;
        width: 2px;
        background: #70707070;
        position: absolute;
        right: -85px;
      }

      .logo img {
        width: 120px;
        height: auto;
      }
      ul {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 250px 1fr;
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
      ul > div {
        display: flex;
        padding-right: 3.7em;
      }
      a {
        color: #4173C0;
        text-decoration: none;
        font-size: 13px;
      }
      .logo {
        margin-right: auto;
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

export default Nav
