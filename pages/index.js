
import { useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import useOnScreen from '../libs/useOnScreen'

const brands = [
  { src: '/brands/alexa.png', alt: 'amazon alexa'},
  { src: '/brands/ecobee.png', alt: 'ecobee'},
  { src: '/brands/google.png', alt: 'google home'},
  { src: '/brands/hue.png', alt: 'Philps hue'},
  { src: '/brands/logitech.png', alt: 'Logitech'},
  { src: '/brands/nest.png', alt: 'Lutron'},
  { src: '/brands/lutron.png', alt: 'Nest'},
  { src: '/brands/ring.png', alt: 'ring'},
  { src: '/brands/sengled.png', alt: 'sengled'},
  { src: '/brands/smartthings.png', alt: 'smart things'},
  { src: '/brands/sonos.png', alt: 'sonos speakers'},
  { src: '/brands/wyze.png', alt: 'tp-link'},
  { src: '/brands/wemo.png', alt: 'wemo'},
  { src: '/brands/tplink.png', alt: 'wyze cam'},
]

const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  return isMounted
}

const Home = () => {
  const isMounted = useIsMounted();
  const brandRef = useRef(); 
  if (isMounted) {
    const scroll = document.getElementById('scrollable')
    setInterval(() => {
      if (scroll.scrollLeft !== scroll.scrollWidth) {
        scroll.scrollTo(scroll.scrollLeft + 1, 0);
      }
    }, 75)
  } 

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <div className="main">
          <section className="hero">
              <h1 className="title">
                Find out what you can Automate
              </h1>
              <h4 className="subtitle">
                You can find light bulbs, switches, vacuums, sprinklers, cameras, and more.
              </h4>
              <Link href='/build' ><a className='btn'>Build Now</a></Link>
          </section>
          <section className="explore">
            <div className="explore-heading">
              <h3 className="subtitle">Explore compatible products for your home</h3>
              <p>We only show you products that work with your Smart Home</p>
              <Link href="/products" ><a className='btn light'>Explore Now</a></Link>           
            </div>
            <div className="explore-right">
              <img src="/home@2x.png" ></img>
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
              <div className="guide-card">
                <span className="card-label">Featured</span>
                <h5>Alexa Theater Room</h5>
                <span className="rating">
                  1.2k
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </span>
                <p>Amazon Echo, Sengled Hub, Fire TV Stick, Logitech Harmony</p>
                <span className="total">$350</span>
              </div>
              <div className="guide-card">
                <span className="card-label">Featured</span>
                <h5>Alexa Theater Room</h5>
                <span className="rating">
                  1.2k
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </span>
                <p>Amazon Echo, Sengled Hub, Fire TV Stick, Logitech Harmony</p>
                <span className="total">$350</span>
              </div>
            </div>
            <div className="guides-right">
              <h3 className="subtitle">Find a build guide that can show you the way</h3>
              <p>Everything from quick start guides to fully automated homes, and everything between.</p>
              <Link href="/products" ><a className='btn'>Find Guides</a></Link>           
            </div>
          </section>
        </div>
      </Layout>

      <style jsx>{`

        :global(body) {
          line-height: 1.65;  
        }
        :global(*) {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
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
          font-size: 1rem;
          padding: 10px 20px;
          background: #4173c0;
          color: white;
          font-weight: bold;
          text-decoration: none;
          border-radius: 5px;
          background: #4173c0;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        }
        .btn.light {
          background: transparent;
          color: #4173c0;
          border: 1px solid #4173c0; 
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
          font-weight: 400;
          margin-bottom: 1em;
          max-width: 650px;
          text-align: center;
        }
        @media only screen and (max-width: 851px) {
          .subtitle {
            font-size: 1.15rem;
            max-width: 80%; 
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
        }
        .guide-card {
          max-width: 483px;
          min-height: 135px;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
          display: grid;
          grid-template-rows: auto auto;
          grid-template-columns: 24px 3fr 1fr;
          grid-column-gap: 10px;
          padding: 10px 10px 10px 0;
          position: relative;
          border-radius: 5px;
          margin-bottom: 3.75em;
        }
        .guide-card::before {
          content: '';
          width: 24px;
          background: rgba(65, 115, 192, 30%);
          position: absolute;
          height: 100%;
          border-radius: 5px 0 0 5px;
          
        }
        .card-label {
          grid-row: span 2;
          transform: rotate(270deg);
          place-self: end center;
          margin-bottom: 1em;
          color: rgba(65, 115, 192, 70%);
          font-weight: 700;
          font-size: small;
        }
        
        .guide-card p {
          grid-column: 2/3;
          max-width: 80%;
          place-self: start start;
          margin-bottom: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical; 
          overflow: hidden;
        }
        .rating {
          line-height: 1.5;
          color: rgba(65, 115, 192, 30%);
          place-self: start end;
        }
        .rating svg {
          fill: rgba(65, 115, 192, 30%);
          vertical-align: top;
        }
        .total {
          grid-column: 3;
          place-self: end;
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
  )
}


export default Home
