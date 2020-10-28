import Head from "next/head";
import Layout from "../../components/layout";
import { GuideCard } from "../../components/guideCard";
import data from "../../components/guides.json";
import { useEffect, useState } from "react";

// console.log(data.guides)

const Guides = () => {
  const haveGuides = true;
  const [guides, setGuides] = useState([data.guides]);
  const [query, setQuery] = useState();

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
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </form>
              </div>
              <section>
                {query ? (
                  <>
                  <div>

                    <h3>Search: {query}</h3>
                    <div className="cards">
                      {guides[0]
                        .filter(
                          (data) =>
                            data.description
                              .toLowerCase()
                              .includes(query.toLowerCase()) ||
                            data.tags
                              .join()
                              .toLowerCase()
                              .includes(query.toLowerCase())
                        )
                        .map((data) => (
                          <div className="card">
                            <GuideCard data={data} key={data.slug} label={""} />
                          </div>
                        ))}
                    </div>
                  </div>
                  </>
                ) : (
                  <></>
                )}
              </section>
              <section>
                <div>

                <h3>Featured Guides</h3>
                <div className="cards">
                  {guides ? (
                    guides[0]
                      .filter((data) => data.label.includes("Featured"))
                      .map((data) => (
                        <div className="card" key={data.slug}>
                          <GuideCard
                            data={data}
                            key={data.slug}
                            label={"Featured"}
                          />
                        </div>
                      ))
                  ) : (
                    <div className="card">
                      <GuideCard />
                    </div>
                  )}
                </div>
                </div>
              </section>
              <section>
                <div>
                <h3>Popular Guides</h3>
                <div className="cards">
                  {guides[0]
                    .filter((data) => data.label.includes("Popular"))
                    .map((data) => (
                      <div className="card" key={data.slug}>
                        <GuideCard
                          data={data}
                          key={data.slug}
                          label={"Popular"}
                        />
                      </div>
                    ))}
                </div>

                </div>
              </section>
              <section>
                <div>

                <h3>#Alexa</h3>
                <div className="cards">
                  {guides[0]
                    .filter((data) => data.tags.includes("Echo"))
                    .map((data) => (
                      <div className="card" key={data.slug}>
                        <GuideCard
                          data={data}
                          key={data.slug}
                          label={"Popular"}
                        />
                      </div>
                    ))}
                </div>
                </div>
              </section>
              <section>
                <div>

                <h3>#Philips Hue</h3>
                <div className="cards">
                  {guides[0]
                    .filter((data) => data.tags.includes("Philips Hue"))
                    .map((data) => (
                      <div className="card" key={data.slug}>
                        <GuideCard
                          data={data}
                          key={data.slug}
                          label={"Popular"}
                        />
                      </div>
                    ))}
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
        align-items: start;
        flex-direction: column;
        min-height: 90vh;
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
      section {
        display: flex;
        width: 100%;
        justify-content: center;
      }
        .search {
          display: flex;
          align-items: center;
          flex-direction: column;
          align-self: center;
          margin-bottom: 4rem;
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
          margin: 2rem .5rem;
          max-width: 1272px;
        }
        .cards::after {
          content: " ";
          min-width: 424px;
          max-width: 424px;
          height: 10px;
        }
        
        @media only screen and (max-width: 1150px) {
          
          .cards {
            justify-content: center;
          }
          
          .search-guides {
            width: 100%;
          }
        @media only screen and (min-width: 1150px) {
          .cards {
            justify-content: flex-start;
            
          }
        }
      `}</style>
    </div>
  );
};

export default Guides;
