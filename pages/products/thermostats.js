import React, { useState, useEffect } from "react";
import Filter from "../../components/filter";
import Categroy from "../../components/category";
import fetcher from "../../libs/fetcher";
import useSWR from "swr";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import Router from "next/router";
import queryString from "query-string";
import {
  useListDispatch,
  setListCookie,
  useListState,
  getQueryParams,
} from "../../components/build-context";
import { Skeleton } from "../../components/SkeletonCard";
import { Card } from "../../components/Card";

let URL = `http://localhost:3000/api/explore?category=thermostats`;

export default function Products() {
  const buildParams = getQueryParams();

  console.log(buildParams);

  const [isCompatibilityMode, setCompatibilityMode] = useState(false);

  let endpoint = isCompatibilityMode
      ? `/api/explore?category=thermostats`
    : `/api/explore?category=thermostats`;

  console.log(endpoint);
  const { router } = useRouter();
  const { query } = useRouter();
  const { brand, price, rating } = query;
  let parsedQuery = URL;
  let cat = "thermostats";
  let queryS = queryString.stringify(query, {
    arrayFormat: "comma",
  });
  console.log(query);
  if (brand || price || rating) {
    endpoint = endpoint + "&" + queryS;
  }

  /*****List Context ******/
  const dispatch = useListDispatch();
  const { list } = useListState();

  const addProduct = (item) => {
    dispatch({
      type: "add",
      payload: item.productId,
    });
    Router.push("/build");
  };

  /* Cookies Options, available server side */
  useEffect(() => {
    setListCookie(list);
  }, [list]);

  /*Get Products */
  const { data } = useSWR(endpoint, fetcher);
  console.log(queryS);

  const buttonTitle = "Thermostats";

  return (
    <Layout>
      <div className="main">
        <Categroy button={buttonTitle} />
        <div className="hero"></div>
        <Filter data={data} router={query} queryS={queryS} cat={cat} />
        <div className="row">
          {data ? (
            data.map((item) => (
              <Card item={item} addFunc={addProduct} key={item.productId}/> 
            ))
          ) : (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          )}
        </div>
        <div className="footer">_____</div>

        <style jsx>{`
      .main {
        display: grid;
        grid-template-rows: 80px 1fr;
        grid-template-columns: 250px 1fr;
        grid-template-areas: 
          'filter filter'
          'sidebar products'
          'sidebar products'
          'footer footer'; 
      }
      @media only screen and (max-width: 1150px) {
        .main {
          grid-template-rows: 60px 1fr;  
          grid-template-columns: 1fr;
          grid-template-areas: 
          'filter filter'
          'products products'
          'products products'
          'footer footer';
        }
      }
      
      }
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
        max-width: 680px;
        width: 90%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-left: auto;
        margin-right: auto;
        justify-content: space-between;
        margin-bottom: 200px;
      }
      @media only screen and (min-width: 1151px) {
        .row {
          margin: 2em 3em 20em 3em;
          max-width: 100%;
          justify-content: flex-start;
        }
    }

    `}</style>
      </div>
    </Layout>
  );
}
