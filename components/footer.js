import Link from "next/link"


  const socialLinks = [
    {img: '/social/facebook.svg', alt: "facebook", href: "https://facebook.com/caniautomate" },
    {img: '/social/twitter.svg', alt: "twitter", href: "https://twitter.com/caniautomate" },
    {img: '/social/instagram.svg', alt: "instagram", href: "https://instagram.com/caniautomate" },
  ]

  const browseLinks = [
    {href: '/build', text: 'Build', cat: 'browse'},
    {href: '/guides', text: 'Guides', cat: 'browse'},
    {href: '/products/lighting', text: 'Explore Products', cat: 'browse'},
  ]

  const infoLinks = [
    {href: '/information#affiliate', text: 'Affiliate Disclosure', cat: 'info'},
    {href: '/information#privacy', text: 'Privacy Policy', cat: 'info'},
    {href: '/information#advertise', text: 'Advertise With Us', cat: 'info'},
    {href: '/information#donotsell', text: 'Do Not Sell My Personal Information', cat: 'info'},
  ]

  const aboutLinks = [
    {href: '/about#about', text: 'About', cat: 'about'},
    {href: '/about#contact', text: 'Contact', cat: 'about'},
  ]


const Footer = () => {


return (
  <footer>
    <div className="container">
      <div className="items">
        <div className="logo">
          <img src="/Dark-Logo.png" width="120px" height="66px" loading="lazy"/>
        </div>
        <ul className="social">
          {socialLinks.map(({ img, alt, href }) => (
            <li className="social-item" key={'social_' + alt}><a href={href}><img src={img} alt={alt} loading="lazy" /></a></li>
          ))}
        </ul>
        <span>Copyright 2020</span>
      </div>
      <div className="items">
        <h6>Browse</h6>
        <ul>
          {browseLinks.map(({ href, text }) => (
            <li key={'browse_' + text}><Link href={href}><a>{text}</a></Link></li>
          ))}
        </ul>
      </div>
      <div className="items">
        <h6>Information</h6>
        <ul>
          {infoLinks.map(({ href, text }) => (
            <li key={'info_' + text}><Link href={href}><a>{text}</a></Link></li>
          ))}
        </ul>
      </div>
      <div className="items">
        <h6>About Us</h6>
        <ul>
          {aboutLinks.map(({ href, text }) => (
            <li key={'about_' + text}><Link href={href}><a>{text}</a></Link></li>
          ))}
        </ul>
      </div>
    </div>

    <style jsx>{`

      footer {
        background: #4173C0;
        color: #fff;
        z-index: 1;
        position: relative;
      } 
      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 2em 4.5em; 
      } 
      ul {
        list-style: none;
      }
      a {
        color: #fff;
        text-decoration: none;
      }
      .items {
        min-width: 260px;
        margin-bottom: 2em;
      }
      .social-item {
        display: inline-block;
        margin: .25em 1em 1em 0;
      }
      .social-item img {
        width: 20px;
        height: auto;
      }
      .items h6, li {
        margin-bottom: 1em;
      }
      @media only screen and (max-width: 900px) {
        .container {
          display: block;
          padding: 2em 1em;
        }
        .logo {
          display: inline-block;
        }
      }
       
    `}</style>

  </footer>
)
    }

export default Footer;