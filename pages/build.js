import React, { useEffect, useState } from "react";
import Layout from "./../components/layout";
import Head from "next/head";
import useSWR from "swr";
import fetcher from "../libs/fetcher";
import {
  useListState,
  useListDispatch,
  setListCookie,
  getQueryParams,
  setQueryParams,
} from "../components/build-context";
import BuildSection from "../components/BuildSection"

import { parseCookies } from "../libs/cookies";

const Build = () => {
  /*List Context*/
  const { list } = useListState();
  const dispatch = useListDispatch();

  const removeItem = (item) => {
    dispatch({
      type: "remove",
      payload: item,
    });
    console.log(item);
    setNewData(newData.filter((elem) => elem.productId !== item));
  };

  useEffect(() => {
    setListCookie(list);
  }, [list]);

  /**Get list **/
  const [newData, setNewData] = useState([]);
  const [hubList, setHubList] = useState([]);
  let URL = `/api/list?productId=${list}`;
  if (list.length === 0) {
    URL = ``;
  } else {
    URL = `/api/list?productId=${list}`;
  }

  const { data } = useSWR(URL, fetcher);

  useEffect(() => {
    if (data) {
      setNewData(data);
    }
  }, [data]);

  useEffect(() => {
    if (data)
      data.forEach((elem) => {
        setQueryParams(elem);
      });
  }, [data]);

  const uqp = getQueryParams();

  console.log(uqp);

  // useEffect(() => {
  //   let tempHub = [];
  //   newData.forEach(elem => {
  //     tempHub.push(elem.brand);
  //   })
  //   setHubList(tempHub)
  // }, [newData])

  // const hubList = () => {
  //   newData.forEach(elem => {
  //   hubs.push(elem.brand)
  //   })
  // }

  return (
    <div>
      <Head>
        <title>Can I Automate - Build</title>
      </Head>
      <Layout>
        {!newData ? (
          <div>loading</div>
        ) : (
          <div className="main">
            <div>
              <BuildSection title="Hubs & Bridges" category="hubs" data={newData.filter(item => item.category === 'hubs')} remove={removeItem} />
              <BuildSection title="Lighting" category="lighting" data={newData.filter(item => item.category === 'lighting')} remove={removeItem} />
              <BuildSection title="Plugs & Outlets" category="plugs" data={newData.filter(item => item.category === 'plugs')} remove={removeItem}  />
              <BuildSection title="Speakers & Displays" category="speakers" data={newData.filter(item => item.category === 'speakers')} remove={removeItem}  />
              <BuildSection title="Thermostats" category="thermostats" data={newData.filter(item => item.category === 'thermostats')} remove={removeItem}  />
              <BuildSection title="Cameras & Doorbells" category="cameras" data={newData.filter(item => item.category === 'cameras')} remove={removeItem} />
              <BuildSection title="Locks & Security" category="locks" data={newData.filter(item => item.category === 'locks')} remove={removeItem} />
              <BuildSection title="Network & Wifi" category="network-wifi" data={newData.filter(item => item.category === 'network-wifi')} remove={removeItem} />
            </div>
          </div>
        )}
      </Layout>

      <style jsx>{`
        :global(body) {
          background: #fff;
        }

        .main {
          color: #0d0d0d;
        }

        sup {
          font-size: x-small;
        }

        th {
          text-align: left;
          color: #0d0d0d50;
        }

        td {
          position: relative;
        }

        table {
          margin: 4em auto;
          font-size: 14px;
          background: #ffffff;
          border-collapse: collapse;
        }

        table caption {
          caption-side: top;
          text-align: left;
          padding: 10px 1em;
          font-size: 30px;
          font-weight: 700;
          color: #4173c0;
        }

        tbody {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
          border-radius: 4px;
        }

        .td_add svg,
        span {
          vertical-align: middle;
        }

        .td_where svg {
          vertical-align: middle;
          position: absolute;
        }
        .btn.primary {
          display: inline-block;
          border: 2px solid #4173c0;
          color: #f1f1f1;
          text-align: center;
          font-weight: 700;
          padding: 0px 20px;
          font-size: 15px;
          border-radius: 4px;
          background: #4173c0;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
          text-decoration: none;
        }

        .btn.secondary.large {
          display: inline-block;
          border: none;
          background: transparent;
          vertical-align: middle;
          cursor: pointer;
        }

        #remove-button {
          vertical-align: middle;
        }

        @media screen and (min-width: 851px) {
          table {
            width: 97%;
            max-width: 1300px;
            table-layout: fixed;
          }

          td,
          th {
            padding: 10px 15px;
          }

          .td_buy,
          td_remove {
            padding: 10px 10px;
          }
          .col-desc {
            width: 40%;
          }
          .col-img {
            width: 10%;
          }
          .col-brand,
          .col-msrp,
          .col-price,
          .col-where,
          .col-buy,
          .col-remove {
            width: 8.33%;
          }

          .td_buy {
            text-align: center;
          }
          tr:hover:not(:first-child) {
            background: #f1f1f1;
          }

          td h6 {
            display: none;
          }

          .td_where svg {
            top: 19px;
          }

          .td_image {
            width: 20px;
            padding-left: 20px;
          }

          .td_add {
            text-align: center;
            color: #4173c0;
            font-weight: 700;
            cursor: pointer;
          }
          .btn.secondary {
            display: none;
          }
          .td_item {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .td_remove {
            text-align: center;
          }
        }

        @media only screen and (max-width: 850px) {
          table {
            width: 90%;
            font-size: 16px;
            padding-left: 0;
            padding-right: 0;
          }

          td {
            padding: 0px;
          }
          table caption {
            font-size: 24px;
          }
          .tr_headers {
            display: none;
          }

          .td_brand {
            display: none;
          }

          .tr_product {
            position: relative;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-column-gap: 1em;
            grid-row-gap: 2em;
            align-items: center;
            padding: 20px 10px 20px 10px;
          }

          .tr_product::after {
            content: "";
            background: #00000020;
            height: 2px;
            width: 95%;
            position: absolute;
            bottom: 0;
            left: 2.5%;
          }

          .tr_product:last-of-type::after {
            content: "";
            background: #00000020;
            height: 0px;
            width: 95%;
            position: absolute;
            bottom: 0;
            left: 2.5%;
          }

          td h6 {
            margin: 0;
            display: block;
            font-size: 0.975em;
            font-weight: 700;
          }
          .td_image {
            grid-column: 1 / 2;
            place-self: center;
            width: initial;
          }

          .td_item {
            grid-column: 2 / 5;
          }

          .td_item span {
            display: inline-block;
            max-width: 370px;
          }

          .td_msrp {
            grid-column: 1 / 2;
            place-self: center;
          }

          .td_price {
            grid-column: 2 / 4;
            place-self: center;
          }

          .td_price h6,
          .td_msrp h6 {
            text-align: center;
            color: #0d0d0d50;
          }

          .td_where {
            grid-column: 4 / 5;
            place-self: start;
          }
          .td_where h6 {
            color: #0d0d0d50;
          }
          .td_where svg {
            top: 19px;
          }

          .td_buy {
            grid-column: 1 / span 2;
            place-self: center;
          }

          .td_remove {
            grid-column: 3 / span 2;
            place-self: center;
          }

          .btn {
            width: 33vw;
            padding: 6px;
            font-weight: bold;
            font-size: 15px;
            border-radius: 4px;
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
          }

          .btn:hover {
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.36);
          }

          .btn.primary {
            background: #4173c0;
            border: 1px solid #4173c0;
            color: #fff;
            transition: 0.5s;
            height: 33px;
            padding-top: 3px;
          }

          .btn.secondary {
            display: inline;
            background: transparent;
            border: 2px solid #a9b7cc;
            color: #a9b7cc;
            transition: 0.5s;
          }

          .btn.secondary:hover {
            background: transparent;
            border: 2px solid #d9534f;
            color: #d9534f;
          }

          .td_add {
            grid-column: 1 / span 4;
            cursor: pointer;
          }

          .td_add span {
            color: #4173c0;
            font-weight: bold;
          }
          .btn.secondary.large {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};



// Build.getInitialProps = ({ req }) => {
//   const cookies = parseCookies(req);

//   return {
//     initialListValue: cookies.list
//   }
// }

export default Build;
