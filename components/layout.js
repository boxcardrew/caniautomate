import Nav from "./nav"
import Head from 'next/head';
import { loadGetInitialProps } from "next/dist/next-server/lib/utils"


const Layout = props => (
  <div>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap" rel="stylesheet" />
    </Head>
    <Nav />
    {props.children}

  <style jsx>{`

    :global(body) {  
      font-family: 'Roboto', sans-serif;
      line-height: 1.65;
      font-weight: 400;
      background-image: url(/Ellipse41.svg), url(/Ellipse42.svg);
      background-position: top left -250px, bottom -500px right;
      background-repeat: no-repeat;
      background-size: 1100px;
    }
    @media only screen and (max-width:1024px) {
      :global(body) {
        background-size: 85%, 55%;
        background-position: top left -250px, bottom 550px right -100px;
      }
    }
    :global(*) {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    :global(html) {font-size: 100%;} /*16px*/


    :global(p) {margin-bottom: 1.15rem;}

    :global(h1, h2, h3, h4, h5) {
      font-weight: 700;
      line-height: 1.15;
    }

    :global(h1) {font-size: 4.209rem;}

    :global(h2) {font-size: 3.157rem;}

    :global(h3) {font-size: 2.369rem;}

    :global(h4) {font-size: 1.777rem;}

    :global(h5) {font-size: 1.333rem;}

    :global(h6) {font-size: 1em;}

    :global(small), .text_small {font-size: 0.75em;}


  `}</style>
</div>
);

export default Layout;