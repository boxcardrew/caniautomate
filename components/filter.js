import React, { useState, Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import queryString from "query-string";

const Filter = ({ data, queryS, cat, compatMode, isCompatibilityMode }) => {
  const router = useRouter();
  const { brand, price } = router;

  const [filters, setFilters] = useState({});
  const [isSelected, setIsSelected] = useState();
  const [loading, setLoading] = useState(true);

  const stringed = queryString.stringify(filters, {
    arrayFormat: "comma",
  });

  const [brandArray, setBrandArray] = useState({});
  const brands = [];
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    let rating = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    if (!data) return;
    data.forEach((item) => {
      if (item.rating > 0 && item.rating < 2) {
        rating[1] += 1;
      }
      if (item.rating >= 2 && item.rating < 3) {
        rating[2] += 1;
      }
      if (item.rating >= 3 && item.rating < 4) {
        rating[3] += 1;
      }
      if (item.rating >= 4 && item.rating < 5) {
        rating[4] += 1;
      }
      if (item.rating === 5) {
        rating[5] += 1;
      }
    });
    const sortedRating = {};
    Object.keys(rating).forEach((key) => (sortedRating[key] = rating[key]));
    setRatings(sortedRating);
  }, [data]);

  useEffect(() => {
    if (!data) return;
    data.forEach((item) => {
      brands[item.brand] = brands[item.brand] ? (brands[item.brand] += 1) : 1;
    });
    setBrandArray(brands);
  }, [data]);

  useEffect(() => {
    if (!data) return;
    if (!loading) return;
    const initialIsSelected = data.reduce((acc, d) => {
      acc[d.brand] = false;
      return acc;
    }, {});
    setIsSelected(initialIsSelected);
    setLoading(false);
  }, [data]);

  useEffect(() => {
    window.onpopstate = () => {
      setFilters(location.search);
    };
  }, []);

  if (!data) {
  } else {
    var itemsjs = require("itemsjs")(data, {
      sortings: {
        name_asc: {},
      },
      aggregations: {
        bulbShape: {
          title: "Bulb Shape",
          conjunction: false,
          size: 10,
        },
        color: {
          title: "Color",
          size: 10,
        },
        Dimmable: {
          title: "Dimmable",
          size: 10,
        },
        rating: {
          title: "Rating",
          size: 10,
        },
        hubRequired: {
          title: "Hub Required",
          size: 10,
        },
      },
      searchableFields: ["Brand", "Price"],
    });

    var products = itemsjs.search({
      per_page: 1,
      sort: "name_asc",

      filters: {
        Brand: ["Sengled"],
      },
    });

    // console.log(JSON.stringify(products, null, 2));

    // var top_tags = itemsjs.aggregation({
    //   name: "brand",
    //   per_page: 10,
    // });
    // console.log(JSON.stringify(top_tags, null, 2))
  }

  const searchString = (arg) => {
    if (filters.length >= 0) {
      return newFilters;
    } else {
      return filters;
    }
  };

  // NEED TO ADD SHALLOW ROUTING????
  const handleCheckBox = (e) => {
    const newFilters = {
      ...filters,
      [e.target.name]: e.target.value,
    };
    setIsSelected({ ...isSelected, [e.target.value]: true });
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
    router
      .push(
        {
          pathname: `/products/${cat}`,
          query: newFilters,
        },
        undefined,
        { shallow: true }
      )
      .then(() => window.scrollTo(0, 0));
    queryS = stringed;
    setIsOpen(!isOpen);
  };
  const handleRating = (e) => {
    const ratingString = e.target.name + ">" + e.target.value;
    let current = window.location;
    window.location = current + "?" + ratingString;
    router
      .push(
        {
          pathname: `/products/${cat}`,
        },
        undefined,
        { shallow: true }
      )
      .then(() => window.scrollTo(0, 0));
    queryS = stringed;
    setIsOpen(!isOpen);
  };

  const changeCompat = () => {
    setIsOpen(!isOpen);
    compatMode();
  };

  const [isOpen, setIsOpen] = useState(false);

  const removeFilter = (e) => {
    setIsSelected({ ...isSelected, [e.target.value]: false });

    delete filters[e.target.name];

    setFilters(filters);

    router
      .push(
        {
          pathname: `/products/${cat}`,
          query: filters,
        },
        undefined,
        { shallow: true }
      )
      .then(() => window.scrollTo(0, 0));

    setIsOpen(!isOpen);
  };

  const menuOpen = isOpen
    ? {
        visibillity: "visible",
        zIndex: "2",
        opacity: "1",
        transition: "all .25s",
      }
    : {
        visibillity: "hidden",
        zIndex: "0",
        opacity: "0",
        transition: "all .25s",
      };

  const filterOpen = isOpen ? "filter-list open" : "filter-list";

  return (
    <div className="sidebar">
      <div className="button-wrapper">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Filter"}
        </button>
        {/* <button>Sort</button> */}
      </div>
      <div className={filterOpen}>
        {products ? (
          <div>
            <div className="section compat">
              <h6>Total Items: {data.length}</h6>
            </div>
            <div className="break"></div>
            <div className="section compat">
              <h6>Compatibility</h6>
              <ul>
                <li>
                  <label>
                    <input
                      name="Compatibility Mode"
                      type="checkbox"
                      onChange={changeCompat}
                      checked={isCompatibilityMode}
                    />
                    <span className="checkbox"> </span>
                    Compatibility Mode
                  </label>
                </li>
              </ul>
            </div>
            <div className="break"></div>

            <div className="section">
              <h6>Brands</h6>
              <ul>
                {Object.entries(brandArray).map(([key, value]) => (
                  <li key={key}>
                    <label className="input">
                      <input
                        name="brand"
                        type="checkbox"
                        checked={isSelected[key]}
                        value={key}
                        onChange={
                          isSelected[key] ? removeFilter : handleCheckBox
                        }
                        autoComplete="off"
                      />
                      <span className="checkbox"> </span>
                      {key} ({value})
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="break"></div>
            <div className="section">
              <h6>Rating</h6>
              <ul>
                {Object.entries(ratings)
                  .reverse()
                  .map(([key, value]) => (
                    <li key={key}>
                      <label className="input">
                        <input
                          name="rating"
                          type="checkbox"
                          checked={Object.values(router.query).includes(key)}
                          value={key}
                          onChange={
                            isSelected[key] ? removeFilter : handleCheckBox
                          }
                          disabled={value < 1 ? true : false}
                        />
                        <span className="checkbox"> </span>
                        <Stars number={key} /> ({value})
                      </label>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ) : null}
        {/* {products ? (
          <>
            <div>
              <label>
                <input
                  name="Compatibility Mode"
                  type="checkbox"
                  onChange={changeCompat}
                  checked={isCompatibilityMode}
                />
                 <span className="checkbox"> </span>
                Compatibility Mode
              </label>
              <h6>Total Items {products.pagination.total}</h6>
            </div>
          </>
        ) : (
          ""
        )} */}
        {/* {filters ? <button onClick={removeFilter()}>{filters}</button> : <span></span> } */}
        {/* {products
          ? Object.entries(products.data.aggregations).map(([key, value]) => (
              <div key={key}>
                <h6>{value.title}</h6>
                <ul>
                  {Object.entries(value.buckets).map(([keyB, valueB]) => (
                    <li key={valueB.key}>
                      <div>
                        <label>
                          <input
                            name={value.name}
                            type="checkbox"
                            checked=""
                            value={valueB.key}
                            onChange={handleCheckBox}
                          />
                          {valueB.key} ({valueB.doc_count})
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          : ""} */}
      </div>

      <style jsx>
        {`
          h6 {
            margin-bottom: 0.5rem;
          }
          .sidebar {
            grid-area: sidebar;
          }
          input,
          .input {
            cursor: pointer;
          }
          .compat {
            padding: 5px;
          }
          .break {
            width: 80%;
            background: rgba(0, 0, 0, 0.26);
            height: 0.5px;
            content: "";
            margin-bottom: 2rem;
          }
          .filter-list {
            padding-top: 60px;
            grid-area: sidebar;
            top: 140px;
            width: 280px;
            padding-left: 4.5em;
            padding-bottom: 220px;
            min-height: 100%;
            background: #fff;
            overflow-y: scroll;
            box-shadow: 0px 3px 6px #00000029;
            visibillity: visible;
          }
          .button-wrapper {
            display: none;
          }
          .filter-list::-webkit-scrollbar {
            width: 4px;
          }
          .section {
            margin-bottom: 2rem;
          }
          ul {
            list-style: none;
          }
          ul li {
            padding: 0.5rem 0;
          }
          .input {
            position: relative;
          }
          input[type="checkbox"] {
            opacity: 0;
            position: absolute;
            top: 3px;
            left: 2px;
          }
          input[type="checkbox"]:focus {
            opacity: 1;
            background: #1976d2;
          }
          input[type="checkbox"] + .checkbox {
            display: inline-block;
            vertical-align: text-top;
            width: 1.05em;
            height: 1.05em;
            margin-right: 3px;
            margin-top: 1px;
          }
          input[type="checkbox"] + .checkbox {
            background: url(/checkbox.svg);
            background-size: 1.05em 1.05em;
          }
          input[type="checkbox"]:checked + .checkbox {
            background: url(/checkbox-checked.svg);
            background-size: 1.05em 1.05em;
          }

          @media only screen and (max-width: 1150px) {
            .filter-list {
              width: 100%;
              min-height: 100vh;
              box-shadow: initial;
              z-index: 2;
              position: relative;
              top: 0;
              overflow-y: initial;
              visibillity: hidden;
              z-index: 0;
              opacity: 0;
              transition: all 0.25s;
            }
            .filter-list.open {
              visibillity: visible;
              z-index: 2;
              opacity: 1;
              transition: all 0.25s;
            }
            .button-wrapper {
              display: flex;
              justify-content: center;
              width: 90%;
              max-width: 680px;
              margin: 0 auto;
            }
            button {
              background: #1976d2;
              color: #fff;
              font-weight: 700;
              flex: 1 1 auto;
              padding: 10px 16px;
              border: none;
              max-width: calc(100% - 2em);
              box-shadow: 0px 3px 6px #00000029;
            }
            .sidebar {
              grid-area: sidebar;
              padding-bottom: 1em;
              padding-top: 1em;
            }
          }
        `}
      </style>
    </div>
  );
};

const Stars = ({ number }) => (
  <span className="rating">
    {number >= 1 && (
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
    {number >= 2 && (
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
    {number >= 3 && (
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
    {number >= 4 && (
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
    {number >= 5 && (
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
    <style jsx>{`
      .rating svg {
        fill: #e0c620;
        vertical-align: middle;
        margin-bottom: 5px;
        height: 1.2rem;
        width: 1.2rem;
      }
    `}</style>
  </span>
);

export default Filter;
