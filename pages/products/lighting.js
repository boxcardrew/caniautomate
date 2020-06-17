import React, { useState } from "react";
import Link from "next/link";
import Filter from "../../components/filter";
import Categroy from "../../components/category";
import fetcher from "../../libs/fetcher";
import useSWR from "swr";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import queryString from "query-string";

const URL = `http://127.0.0.1:3000/api/explore?category=lighting`;

export default function Lighting({ initialData }) {
  const { query } = useRouter();
  const { brand, price, rating } = query;
  let parsedQuery = URL;
  let cat = 'lighting'
  let queryS = queryString.stringify(query, {
    arrayFormat: "comma",
  });
  console.log(query);
  if (brand || price || rating) {
    parsedQuery = parsedQuery + "&" + queryS;
  }

  const { data } = useSWR(parsedQuery, fetcher, { initialData });
  console.log(queryS);

  return (
    <Layout>
      <div className="main">
        <Categroy />
        <div className="hero"></div>
        <Filter data={data} router={query} queryS={queryS} cat={cat} />
        <div className="row">
          {data
            ? data.map((item) => (
                <div className="card">
                  <button className="add">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                  </button>
                  <picture>
                    <img src={item.image} alt={item.brand} width="182px" />
                  </picture>

                  <div className="card-info">
                    <h3>{item.item}</h3>
                    <div className="card-details">
                      <span className="rating">
                        {item.rating <= 1 && (
                          <span>
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
                        )}
                        {item.rating >= 2 && (
                          <span>
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
                        )}
                        {item.rating >= 3 && (
                          <span>
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
                        )}
                        {item.rating >= 4 && (
                          <span>
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
                        )}
                        {item.rating >= 5 && (
                          <span>
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
                        )}
                      </span>
                      <span className="price">
                        <sup style={{ fontSize: `.75em` }}>$ </sup>
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            : "loading..."}
        </div>
        <div className="footer">_____</div>

        <style jsx>{`
      .main {
        display: grid;
        grid-template-rows: 80px 1fr;
        grid-template-columns: 250px 1fr;
        grid-template-areas: 
          'filter filter'
          'sidebar header'
          'sidebar products'
          'footer footer' 
      }
      position: relative;
      .hero {
        width: 100%;
        color: #333;
        grid-area: header;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 40px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        grid-area: products;
        max-width: 100%;
        margin: 80px 30px 40px 60px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        min-width: 100vh;
      }
      .card {
        position: relative;
        margin: 20px;
        width: 27%;
        min-width: 290px;
        max-width: 310px;
        height: 401px;
        text-align: left;
        text-decoration: none;
        color: #fff;
        border-radius: 4px;
        box-shadow: 0px 3px 6px #00000029;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: none;
      }
      .card:hover {
        box-shadow: 0px 3px 6px #4173c050;
      }
      .card-info {
        background: transparent linear-gradient(90deg, #4173C0 0%, #5C9AF8 100%) 0% 0%;
        padding: 20px 20px 10px 20px;
        height: 27.3%;
        display: flex;
        flex-direction: column;
      }
      .add {
        position: absolute;
        top: 16px;
        right: 16px;
        z-index: 1;
        background: none;
        border: none;
        cursor: pointer;
      }
      .add svg {
        height: 40px;
        width: 40px;
        fill: #4173C0;
      }
      .card h3 {
        margin: 0;
        color: #fff;
        font-size: 16px;
        margin-bottom: auto;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
      .card picture {
        margin-top: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .card img {
        width: 226px;
        height: 226px;
        object-fit: contain;
      }
      .card-details {
        margin-top: 8px;
        display: flex;
        align-items: flex-end;
      }
      .rating {
        margin-right auto;
      }
      .rating span svg {
        fill: #E0C620;
      }
      .price {
        font-size: 25px;
        font-weight: 600;
      }

    `}</style>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  // const query = useRouter();
  const data = await fetcher(URL);
  return { props: { initialData: data } };
}
