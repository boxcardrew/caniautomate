import Nav from "./nav"
import { loadGetInitialProps } from "next/dist/next-server/lib/utils"


const Layout = props => (
  <div>
    <Nav />
    {props.children}

  <style jsx>{`

    :global(body) {
      background: #EDF1F7;  
    }
    :global(*) {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }


  `}</style>
</div>
);

export default Layout;