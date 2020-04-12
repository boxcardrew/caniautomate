import React, { useState, Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import queryString from 'query-string';



const Filter = ({ data, queryS, cat }) => {
  const router = useRouter()
  const {brand, price} = router

  const [filters, setFilters] = useState({ }) 
  const stringed = queryString.stringify(filters, {
    arrayFormat: 'comma'
  })
  useEffect(() => {
    window.onpopstate = () => {
      setFilters(
        location.search
      )
    }
    console.log(filters)
  }, [])
  
 

  if (!data) {
    console.log('loading')
  } else {
  var itemsjs = require('itemsjs')(data, {
    sortings: {
      name_asc: {
        field: 'Brand',
        order: 'asc'
      }
    },
    aggregations: {
      brand: {
        title: 'Brand',
        conjunction: false,
        size: 10
      },
      price: {
        title: 'Price',
        size: 10
      },
      rating: {
        title: 'Rating',
        size: 10
      }
    },
    searchableFields: ['Brand', 'Price']
  });

  var products = itemsjs.search({
    per_page: 1,
    sort: 'name_asc',

    filters: {
      Brand: ['Sengled']
    }
  })

  // console.log(JSON.stringify(products, null, 2));

  var top_tags = itemsjs.aggregation({
    name: 'brand',
    per_page: 10
  })
  // console.log(JSON.stringify(top_tags, null, 2))

  }
  
  const searchString = (arg) => {
    if (filters.length >= 0) {
      return newFilters
    } else {
      return filters
    }
  }


  // NEED TO ADD SHALLOW ROUTING????
  const handleCheckBox = (e) => {
    const newFilters = { 
      ...filters,
      [e.target.name] : e.target.value }
    setFilters({
      ...filters,
      [e.target.name] : e.target.value
    })
    router.push({
      pathname : `/products/${cat}`,
      query: newFilters,
    })
    queryS = stringed
  }

  
  
  
  const removeFilter = (valueName, valueKey) => e => {
    router.push({
      pathname: '/products',
      query: {},
    })
    setFilters('')
  }
  
  

  return (
  <div className="filter-list">
    {products ? 
    <>
    <div>
      <h3>Total Items {products.pagination.total}</h3>
    </div>
    </>
    : ''}
    {/* {filters ? <button onClick={removeFilter()}>{filters}</button> : <span></span> } */}
    {products ?
      Object.entries(products.data.aggregations).map(([key, value]) => (
          <div key={key}>
            <h5>{value.title}</h5>
            <ul>
              {
                Object.entries(value.buckets).map(([keyB, valueB]) => (
                  <li key={valueB.key}>
                    <div>
                      <label>
                        <input name={value.name} type="checkbox" checked="" value={valueB.key} onChange={handleCheckBox} />
                        {valueB.key} ({valueB.doc_count})
                      </label>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        )
      ) : ''
    }
  

    {/* <ul>
      <li><label className="container">
          <input type="checkbox" checked="checked" />Bluetooth
          <span className="checkmark"></span>
        </label></li>
      <li><label className="container">
          <input type="checkbox" checked="checked" />Wifi
          <span className="checkmark"></span>
        </label></li>
    </ul>
    <div className='break'></div>
    <ul>
      <li>
        <label className="container">
          <input type="checkbox" checked="checked" />Alexa
          <span className="checkmark"></span>
        </label>
      </li>
      <li><label className="container">
          <input type="checkbox" checked="checked" />Google
          <span className="checkmark"></span>
        </label></li>
      <li><label className="container">
          <input type="checkbox" checked="checked" />Apple HomeKit
          <span className="checkmark"></span>
        </label></li>
    </ul>
    <div className='break'></div>
    <ul>
      <li><label className="container">
          <input type="checkbox" checked="checked" />Zigbee
          <span className="checkmark"></span>
        </label></li>
      <li><label className="container">
          <input type="checkbox" checked="checked" />Zigbee
          <span className="checkmark"></span>
        </label></li>
      <li><label className="container">
          <input type="checkbox" checked="checked" />Zigbee
          <span className="checkmark"></span>
        </label></li>
    </ul>
    <div className='break'></div>
    <ul>
      <li>
        <label className="container">
          <input type="checkbox" checked="checked" />Alexa
          <span className="checkmark"></span>
        </label>
      </li>
      <li><label className="container">
          <input type="checkbox" checked="checked" />Google
          <span className="checkmark"></span>
        </label></li>
      <li><label className="container">
          <input type="checkbox" checked="checked" />Apple HomeKit
          <span className="checkmark"></span>
        </label></li>
    </ul>
    <ul>
      <li><label className="container">
          <input type="checkbox" checked="checked" />Bluetooth
          <span className="checkmark"></span>
        </label></li>
      <li><label className="container">
          <input type="checkbox" checked="checked" />Wifi
          <span className="checkmark"></span>
        </label></li>
    </ul>
    <div className='break'></div>
    <ul>
      <li>
        <label className="container">
          <input type="checkbox" checked="checked" />Alexa
          <span className="checkmark"></span>
        </label>
      </li>
      <li><label className="container">
          <input type="checkbox" checked="checked" />Google
          <span className="checkmark"></span>
        </label></li>
      <li><label className="container">
          <input type="checkbox" checked="checked" />Apple HomeKit
          <span className="checkmark"></span>
        </label></li>
    </ul>
    <div className='break'></div>
    <ul>
      <li><label className="container">
          <input type="checkbox" checked="checked" />Zigbee
          <span className="checkmark"></span>
        </label></li>
      <li><label className="container">
          <input type="checkbox" checked="checked" />Zigbee
          <span className="checkmark"></span>
        </label></li>
      <li><label className="container">
          <input type="checkbox" checked="checked" />Zigbee
          <span className="checkmark"></span>
        </label></li>
    </ul>
    <div className='break'></div>
    <ul>
      <li>
        <label className="container">
          <input type="checkbox" checked="checked" />Alexa
          <span className="checkmark"></span>
        </label>
      </li>
      <li><label className="container">
          <input type="checkbox" checked="checked" />Google
          <span className="checkmark"></span>
        </label></li>
      <li><label className="container">
          <input type="checkbox" checked="checked" />Apple HomeKit
          <span className="checkmark"></span>
        </label></li>
    </ul>
    <div className='break'></div>
    <ul>
      <li>
        <label className="container">
          <input type="checkbox" checked="checked" />Alexa
          <span className="checkmark"></span>
        </label>
      </li>
      <li><label className="container">
          <input type="checkbox" checked="checked" />Google
          <span className="checkmark"></span>
        </label></li>
      <li><label className="container">
          <input type="checkbox" checked="checked" />Apple HomeKit
          <span className="checkmark"></span>
        </label></li>
    </ul>  */}

    <style jsx>
      {`
        .break {
          width: 60%;
          background: #000;
          height: 0.5px;
          content: '';
          margin-top: 10px;
          margin-bottom: 10px;
          margin-left: 10px;
        }
        .filter-list {
          padding-top: 60px;
          grid-area: sidebar;
          position: fixed;
          top: 140px;
          width: 280px;
          padding-left: 4.5em;
          padding-bottom: 220px;
          height: 100%;
          background: #fff;
          overflow-y: scroll;
          box-shadow: 0px 3px 6px #00000029;
        }
        .filter-list::-webkit-scrollbar {
          width: 4px;
        }
        ul {
          list-style: none;
        }
        ul li {
          padding: 5px 0;
        }
      `}
    </style>
  </div>
  )
      }

export default Filter;