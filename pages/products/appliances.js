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
  getInitialQueryParams,
} from "../../components/build-context";
import { Skeleton } from "../../components/SkeletonCard";
import { Card } from "../../components/Card";

export default function Products() {
  const buildParams = getQueryParams();

  const [isCompatibilityMode, setCompatibilityMode] = useState(true);

  let endpoint = isCompatibilityMode
    ? `/api/explore?category=appliances`
    : `/api/explore?category=appliances`;

  const { router } = useRouter();
  const { query } = useRouter();
  const { brand, price, rating } = query;
  let parsedQuery = URL;
  let cat = "appliances";
  let queryS = queryString.stringify(query, {
    arrayFormat: "comma",
  });
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
    Router.push("/build").then(() => window.scrollTo(0, 0));
  };

  /* Cookies Options, available server side */
  useEffect(() => {
    setListCookie(list);
  }, [list]);

  /*Get Products */
  const { data } = useSWR(endpoint, fetcher);

  const buttonTitle = "Appliances";

  const compatibilityMode = () => {
    setCompatibilityMode(!isCompatibilityMode);
    window.scrollTo(0, 0);
  };

  return (
    <Layout>
      <div className="main">
        <Categroy button={buttonTitle} />
        <Filter
          data={data}
          router={query}
          queryS={queryS}
          cat={cat}
          compatMode={compatibilityMode}
          isCompatibilityMode={isCompatibilityMode}
        />
        <div className="hero">
          {isCompatibilityMode ? (
            <span>
              {" "}
              Currently showing products that work with work with your build. To
              see all products turn{" "}
              <button
                className="compat-button"
                onClick={() => setCompatibilityMode(false)}
              >
                off
              </button>{" "}
              Compatibility Mode.{" "}
            </span>
          ) : (
            <span>
              {" "}
              Currently showing all products. To only see compatibile products,
              turn{" "}
              <button
                className="compat-button"
                onClick={() => setCompatibilityMode(true)}
              >
                on
              </button>{" "}
              Compatibility Mode.{" "}
            </span>
          )}{" "}
        </div>
        <div className="row">
          {data ? (
            data.map((item) => (
              <Card item={item} addFunc={addProduct} key={item.productId} />
            ))
          ) : (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          )}
        </div>

        <style jsx>{`
          .main {
            display: grid;
            grid-template-rows: 80px 80px 1fr;
            grid-template-columns: 300px 1fr;
            grid-template-areas:
              "filter filter"
              "sidebar header"
              "sidebar products"
              "footer footer";
          }
          .hero {
            width: 100%;
            color: #333;
            grid-area: header;
            display: grid;
            align-items: center;
            padding-left: 3.5rem;
            font-weight: 700;
          }
          @media only screen and (max-width: 1150px) {
            .main {
              grid-template-rows: 60px 80px 1fr;
              grid-template-columns: 1fr;
              grid-template-areas:
                "filter filter"
                "sidebar sidebar"
                "products products"
                "footer footer";
            }
            .hero {
              display: none;
            }
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
            max-width: 660px;
            width: 90%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-left: auto;
            margin-right: auto;
            justify-content: space-around;
            margin-bottom: 200px;
          }
          .row::after {
            content: "";
            flex: 0 1 calc(40%);
            margin: 0.5rem;
            max-width: 200px;
          }
          .compat-button {
            display: inline;
            background: #fdff32;
            border: none;
            color: #000;
            font-weight: inherit;
            font-size: inherit;
            padding: 2px;
          }
          @media only screen and (min-width: 720px) {
            .row {
              justify-content: flex-start;
            }
          }
          @media only screen and (min-width: 1151px) {
            .row {
              margin: 0em 3em 20em 3em;
              max-width: 100%;
              justify-content: flex-start;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
}
