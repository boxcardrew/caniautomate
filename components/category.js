import React, { Children } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import ActiveLink from '../libs/ActiveLink'



const links = [
  { path: '/products/lighting', title: 'Lighting & Switches', },
  { path: '/products/locks', title: 'Locks & Security', class: '' },
  { path: '/products/thermostats', title: 'Thermostats', class: '' },
  { path: '/products/cameras', title: 'Cameras & Doorbells', class: '' },
  { path: '/products/plugs', title: 'Plugs & Outlets', class: '' },
  { path: '/products/speakers', title: 'Speakers', class: '' },
  { path: '/products/network-wifi', title: 'Network & Wifi', class: '' },
  { path: '/products/appliances', title: 'Appliances', class: '' },
  { path: '/products/outdoor', title: 'Outdoor', class: '' },
  { path: '/products/others', title: 'Others', class: '' },
]

const Category = () => (
  <div className="filter">
    <ul className="list">
      {links.map(({ path, title, }) => (
        <li key={path} className="item">
          <ActiveLink href={path} activeClassName="active">
            <a className="">{title}</a>
          </ActiveLink>
        </li>
      ))}
    </ul>

    <style jsx>
      {`
        .filter {
          grid-area: filter;
          position: fixed;
          top: 110px;
          width: 100vw;
          height: 80px;
          background: transparent linear-gradient(90deg, #4173C0 0%, #5C9AF8 100%) 0% 0% no-repeat;
          box-shadow: 0px 3px 6px #00000029;
          z-index: 2;
        }
        .list {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style: none;
          overflow-x: scroll;
          height: 100%;
        }
        .list::-webkit-scrollbar {
          height: 0px;
        }
        
        .list li {
          display: inline-block;
          color: #fff;
          padding: 0 40px;
        }
        .item a {
          color: #ffffff87;
          text-decoration: none;
        }
        .item a:hover {
          color: #f6f6f6;
          text-decoration: none;
        }
        .item .active {
          font-weight: 600;
          position: relative;
          display: block;
          color: #f6f6f6;
        }
        .item .active::before {
          position: absolute;
          content: '';
          background: #f6f6f6;
          height: 4px;
          width: 110%;
          bottom: -20px;
          left: -4%;
        }

      `}
    </style>
  </div>
)

export default Category;