import React, { Children, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, Router } from "next/router";
import ActiveLink from "../libs/ActiveLink";

const links = [
  { path: "/products/lighting", title: "Lighting & Switches" },
  { path: "/products/hubs", title: "Hubs & Bridges", class: "" },
  { path: "/products/locks", title: "Locks & Security", class: "" },
  { path: "/products/thermostats", title: "Thermostats", class: "" },
  { path: "/products/cameras", title: "Cameras & Doorbells", class: "" },
  { path: "/products/plugs", title: "Plugs & Outlets", class: "" },
  { path: "/products/speakers", title: "Speakers", class: "" },
  { path: "/products/network-wifi", title: "Network & Wifi", class: "" },
  { path: "/products/appliances", title: "Appliances", class: "" },
  { path: "/products/outdoor", title: "Outdoor", class: "" },
  { path: "/products/others", title: "Others", class: "" },
];

const Category = ({ button }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      const target = document.getElementById("scrollable");

      target.addEventListener("wheel", (event) => {
        const toLeft = event.deltaY < 0 && target.scrollLeft > 0;
        const toRight =
          event.deltaY > 0 &&
          target.scrollLeft < target.scrollWidth - target.clientWidth;

        if (toLeft || toRight) {
          event.preventDefault();
          target.scrollLeft += event.deltaY;
        }
      });
    }
  }, []);

  const notActiveLink = links.filter((item) => item.path !== router.pathname);

  return (
    <div className="filter">
      <ul id="scrollable" className="list">
        {links.map(({ path, title }) => (
          <li key={path} className="item">
            <ActiveLink href={path} activeClassName="active">
              <a className="">{title}</a>
            </ActiveLink>
          </li>
        ))}
      </ul>
      <button className="select-css" onClick={() => setIsOpen(!isOpen)}>
        {button}
      </button>
      {isOpen ? (
        <div className="category-select">
          <ul>
            {notActiveLink.map(({ path, title }) => (
              <li key={path} className="mobile-item">
                <ActiveLink href={path} activeClassName="active">
                  <a className="">{title}</a>
                </ActiveLink>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <style jsx>
        {`
          .filter {
            grid-area: filter;
            position: fixed;
            top: 110px;
            left: 0;
            width: 100vw;
            height: 80px;
            background: transparent
              linear-gradient(90deg, #4173c0 0%, #5c9af8 100%) 0% 0% no-repeat;
            box-shadow: 0px 3px 6px #00000029;
            z-index: 2;
          }
          .select-css {
            display: none;
          }
          @media only screen and (max-width: 1150px) {
            .filter {
              grid-area: filter;
              top: 60px;
              background: #fff;
              height: 42px;
            }
            #scrollable {
              display: none;
            }
            .select-css {
              display: inline-block;
              margin-top: 8px;
              background: url("/arrow-down.svg") bottom right no-repeat;
              border: none;
              padding: 5px 25px 5px 10px;
              font-size: 1em;
              color: #5c9af8;
              font-weight: bold;
            }
            .category-select {
              display: block;
              background: #fff;
              color: #1976d2;
              width: 100%;
            }
            .category-select > ul {
              list-style: none;
            }
            .category-select > ul li {
              padding: 10px 0;
            }
            .category-select > ul li:first-of-type {
              padding-top: 20px;
            }
            .category-select > ul a {
              text-decoration: none;
              font-size: 1em;
              color: #1976d2;
              padding-left: 10px;
            }
            .category-select > ul > a {
              text-decoration: none;
            }
          }
          .list {
            display: flex;
            align-items: center;
            list-style: none;
            overflow-x: scroll;
            height: 100%;
            max-width: 1760px;
            margin-left: auto;
            margin-right: auto;
          }
          .list::-webkit-scrollbar {
            height: 0px;
          }

          .list li {
            display: inline-block;
            color: #fff;
            padding: 0 40px;
            white-space: nowrap;
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
            content: "";
            background: #f6f6f6;
            height: 4px;
            width: 110%;
            bottom: -10px;
            left: -4%;
          }
        `}
      </style>
    </div>
  );
};

export default Category;
