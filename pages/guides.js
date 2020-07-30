import Head from "next/head";
import Layout from "../components/layout";
import { GuideCard } from "../components/guideCard";

const Guides = () => {
  const haveGuides = false;
  return (
    <div>
      <Head>
        <title>Can I Automate - Guides</title>
      </Head>
      <Layout>
        <div className="main">
          {!haveGuides ? (
            <div className="coming-soon">
              <div>
              <h2>We're currently working on guides.</h2>
              <h4>Check back soon.</h4>
              </div>
            </div>
          ) : (
            <>
              <div className="search">
                <form onSubmit={() => alert("Search")}>
                  <input
                    type="text"
                    className="search-guides"
                    placeholder="Search Guides"
                  />
                </form>
              </div>
              <section>
                <h3>Featured Guides</h3>
                <div className="cards">
                  <div className="card">
                    <GuideCard />
                  </div>
                  <div className="card">
                    <GuideCard />
                  </div>
                  <div className="card">
                    <GuideCard />
                  </div>
                </div>
              </section>
              <section>
                <h3>Popular Guides</h3>
                <div className="cards">
                  <div className="card">
                    <GuideCard />
                  </div>
                  <div className="card">
                    <GuideCard />
                  </div>
                  <div className="card">
                    <GuideCard />
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </Layout>
      <style jsx>{`
      .main {
        max-width: 1300px;
        margin: 2rem auto;
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      .coming-soon {
        display: grid;
        height: 800px;
        width: 100%;
        place-items: center;
      }
      .coming-soon > div {
        text-align: center;
      }
      .coming-soon h2 {
        margin-bottom: 2rem;
      }
        .search {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .search-guides {
          width: 700px;
          padding: 1rem 3rem;
          border: none;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, .25);
          border-radius: 6px;
          background: url('/search-24px.svg') center left 1rem no-repeat;
        }
        h3 {
          margin-top: 2rem;
          padding-left: 1rem;
        }
        .cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          margin: 2rem 1rem;
        }
        .card {
          min-width: 300px;
          margin-right: 1rem;
          margin-left: 1rem;
          max-width: calc(420px - 2rem);
        }
        @media only screen and (max-width: 1150px) {
          .cards {
            justify-content: center;
          }
          .search-guides {
            width: 100%;
          }
        @media only screen and (min-width: 1150px) {
        }
      `}</style>
    </div>
  );
};

export default Guides;
