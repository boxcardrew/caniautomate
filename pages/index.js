import { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import { getInitialQueryParams } from "../components/build-context";
import { GuideCard } from "../components/guideCard";

const brands = [
  { src: "/brands/alexa.png", alt: "amazon alexa" },
  { src: "/brands/ecobee.png", alt: "ecobee" },
  { src: "/brands/google.png", alt: "google home" },
  { src: "/brands/hue.png", alt: "Philps hue" },
  { src: "/brands/logitech.png", alt: "Logitech" },
  { src: "/brands/nest.png", alt: "Lutron" },
  { src: "/brands/lutron.png", alt: "Nest" },
  { src: "/brands/ring.png", alt: "ring" },
  { src: "/brands/sengled.png", alt: "sengled" },
  { src: "/brands/smartthings.png", alt: "smart things" },
  { src: "/brands/sonos.png", alt: "sonos speakers" },
  { src: "/brands/wyze.png", alt: "tp-link" },
  { src: "/brands/wemo.png", alt: "wemo" },
  { src: "/brands/tplink.png", alt: "wyze cam" },
];

const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted;
};

const Home = () => {
  const isMounted = useIsMounted();
  const brandRef = useRef();
  if (isMounted) {
    const scroll = document.getElementById("scrollable");
    setInterval(() => {
      if (scroll.scrollLeft !== scroll.scrollWidth) {
        scroll.scrollTo(scroll.scrollLeft + 1, 0);
      }
    }, 75);
  }
  if (isMounted) {
    getInitialQueryParams();
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="main">
          <section className="hero">
            <h1 className="title">The smart way to build your smart home.</h1>
            <h4 className="subtitle">
              Take the guess work out of finding light bulbs, sensors, cameras,
              switches, and more
            </h4>
            <Link href="/build">
              <a className="btn">Build Now</a>
            </Link>
          </section>
          <section className="explore">
            <div className="explore-heading">
              <h3 className="subtitle">
                <span className="blue">
                  Explore compatible products for your home
                </span>
              </h3>
              <p>
                Start with a smart speaker, hub, or a light bulb. We will show
                you products that work with your products, no more guessing.
              </p>
              <Link href="/products/hubs">
                <a className="btn light">Explore Now</a>
              </Link>
            </div>
            <div className="explore-right">
              <img src="/home@2x.png" alt="smart home"></img>
            </div>
          </section>
          <section className="brands">
            <div id="scrollable" className="brand-grid">
              {brands.map(({ src, alt }) => (
                <div className="image-container" key={alt}>
                  <img src={src} alt={alt} />
                </div>
              ))}
            </div>
          </section>
          <section className="guides">
            <div className="guides-heading">
              <GuideCard />
              <GuideCard />
            </div>
            <div className="guides-right">
              <h3 className="subtitle">
                Find a build guide that can show you the way
              </h3>
              <p>
                Everything from quick start guides to fully automated homes, and
                everything between.
              </p>
              <Link href="/guides">
                <a className="btn">Find Guides</a>
              </Link>
            </div>
          </section>
        </div>
      </Layout>

      <style jsx>{`

        :global(body) {
        
        }
        :global(*) {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .blue {
          color: #4173c0;
        }
        .main {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 5em;
        }
        @media only screen and (max-width: 1024px) {
          .main {
            padding: 0 1em;
          }
        }
        .btn {
          font-size: 1.25rem;
          padding: 10px 50px;
          background: #4173c0;
          color: white;
          font-weight: bold;
          text-decoration: none;
          border-radius: 5px;
          background: #4173c0;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
          transition: 500ms;
        }
        .btn:hover, .btn:focus {
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.35);
          background: #365F9E;
        }
        .btn.light {
          background: transparent;
          color: #4173c0;
          border: 1px solid #4173c0; 
        }
        @media only screen and (max-width: 851px) {
          .btn {
            font-size: 1.05rem;
            padding: 10px 40px;
          }
        }

        /* Hero Section */

        .hero {
          display: grid;
          place-items: center;
          margin-top: 10rem;
          margin-bottom: 17rem;
          
        }
        
        .title {
          font-size: calc(1.5rem + 2vw);
          font-weight: 900;
          text-align: center;
          color: #4173c0;
          padding-bottom: .5em;
        }

        @media only screen and (min-width: 1441px) {
          .title {
            font-size: 4.209rem;
          }
          .subtitle {
            font-size: 2.369rem;
          }
        }

        .hero .subtitle {
          font-size: calc(1.25rem + .75vw);
          font-weight: 600;
          margin-bottom: 1em;
          max-width: 70%;
          text-align: center;
        }
        @media only screen and (max-width: 851px) {
         .hero .subtitle {
            font-size: 1.25rem;
            max-width: 85%; 
          }
        }
        @media only screen and (max-width: 1024px) {
          .hero {
            margin-bottom: 10em;
            margin-top: 5em;
          }
        }



        /* Explore Section */

        .explore {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10em;
        }

        .explore-right {
          flex-grow: 1;
        }
        .explore-right img {
          width: 100%;
          height: auto;
          max-width: 700px;
        }
        .explore-heading {
          text-align: center;
          flex-grow: 1;
          padding-right: 5em;
        }
        .explore-heading .subtitle {
          margin-bottom: .5em;
          display: inline-block;
          max-width: 520px;
        }
        .explore-heading p {
          margin-bottom: 2em;
          max-width: 80%;
          margin-left: auto;
          margin-right: auto;
          font-size: 1.25rem;
          
        }

        @media screen and (max-width: 1024px) {
          .explore {
            flex-direction: column-reverse;
          }
          .explore-heading {
            padding-right: 0;
          }
          .explore-heading .subtitle {
            font-size: 1.5rem;
          }
          .explore-right {
            margin-bottom: 4em;
            max-width: 90%;
          }
        }



        /* Brands Section */
        .brands {
          width: 100vw;
          height: 100px;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -51vw;
          margin-right: -50vw;
          margin-bottom: 10em;
          overflow: hidden;
        }
        
        .brand-grid {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: auto;
          align-items: center;
          overflow-x: scroll;
          gap: 4em;
          padding-left: 10em;
          padding-right: 6em;
          padding-bottom: 24px;
        }
        /* Guide Section */

        .guides {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10em;
          
        }
        .guides-right {
          text-align: center;
          flex-grow: 1;
          margin-bottom: 3.75em;
          padding-left: 2em;
        }
        }
        .guides-heading {
          flex-grow: 1;
          
        }
        .guides-right .subtitle {
          margin-bottom: .5em;
          display: inline-block;
          max-width: 550px;
        }
        .guides-right p {
          margin: 0 auto 2em auto;
          max-width: 480px;
          font-size: 1.25rem;
        }

        @media screen and (max-width: 1024px) {
          .guides {
            flex-direction: column-reverse;
          }

          .guides-right .subtitle {
            font-size: 1.5rem;
          }
          .guides-right {
            margin-bottom: 4em;
            padding-left: 0;
          }
        }
        


        


      `}</style>
    </div>
  );
};

export default Home;
