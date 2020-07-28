import Link from 'next/link'

const BuildSection = ({ title, category, data, remove }) => (
  <>
  <table>
    <caption>{title}</caption>
    <colgroup>
      <col className="col-img" />
      <col className="col-brand" />
      <col className="col-desc" />
      <col className="col-msrp" />
      <col className="col-price" />
      <col className="col-where" />
      <col className="col-buy" />
      <col className="col-remove" />
    </colgroup>
    <tbody>
      <tr className="tr_headers">
        <th>&nbsp;</th>
        <th>Brand</th>
        <th>Description</th>
        <th>MSRP</th>
        <th>Price</th>
        <th>Where</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
      </tr>
      {data
        .filter((item) => item.category === category)
        .map(({ brand, image, item, msrp, price, where, link, productId }) => (
          <tr className="tr_product" id="toggle">
            <td className="td_image">
              <img src={image} height="63px" width="auto" />
            </td>
            <td className="td_brand">{brand}</td>
            <td className="td_item">
              <h6>{brand}</h6>
              <span>{item}</span>
            </td>
            <td className="td_msrp">
              <h6>MSRP</h6> <sup>$</sup>
              {price}
            </td>
            <td className="td_price">
              <h6>Price</h6> <sup>$</sup>
              {price}
            </td>
            <td className="td_where">
              <h6>Where</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42.21 42.21"
                width="50px"
              >
                <path d="M15.658 15.542c-.366-.507-.965-.733-1.511-.733-.771 0-1.489.395-1.806 1.242-.366-.846-.878-1.242-1.695-1.242-.805 0-1.402.395-1.721 1.242h-.022v-.876a.245.245 0 0 0-.237-.224H7.448a.246.246 0 0 0-.252.241v6.704c.009.12.109.213.234.221h1.307a.247.247 0 0 0 .251-.242V18.32c0-.775-.038-1.848.9-1.848.928 0 .807 1.1.807 1.848v3.554c0 .129.104.232.236.242h1.304a.246.246 0 0 0 .252-.242V18.32c0-.381-.012-.947.121-1.285a.868.868 0 0 1 .781-.549c.379 0 .671.127.768.577.062.269.037.974.037 1.257v3.554c0 .129.105.232.235.242h1.305a.247.247 0 0 0 .251-.242l.002-4.23c0-.719.084-1.538-.329-2.102zM32.876 14.81c-1.89 0-2.938 1.623-2.938 3.709 0 2.074 1.035 3.738 2.938 3.738 1.828 0 2.987-1.622 2.987-3.667.005-2.116-1.047-3.78-2.987-3.78zm0 6.065c-1.024 0-1.013-1.749-1.013-2.568 0-.817.062-2.129 1.023-2.129.414 0 .709.182.854.649.172.536.196 1.212.196 1.778.004.86-.045 2.27-1.06 2.27zM23.3 20.891c-.238-.332-.49-.6-.49-1.211v-2.036c0-.861.059-1.653-.576-2.247-.501-.481-1.332-.65-1.967-.65-1.242 0-2.631.463-2.921 1.999-.031.164.087.25.194.274l1.266.136c.118-.005.205-.121.228-.239.107-.529.552-.784 1.05-.784.269 0 .574.099.731.34.185.268.16.636.16.946l-.001.166c-.757.087-1.747.142-2.456.454-.819.353-1.392 1.075-1.392 2.135 0 1.357.854 2.036 1.953 2.036.928 0 1.438-.219 2.154-.95.236.344.315.512.749.872a.275.275 0 0 0 .31-.03l.002.002c.261-.23.734-.645 1-.867.105-.087.09-.229.006-.346zm-2.326-1.975c0 .509.014.933-.245 1.385-.206.368-.537.593-.901.593-.503 0-.797-.381-.797-.946 0-1.113.998-1.315 1.943-1.315v.283zM41.868 15.599c-.367-.578-.942-.79-1.527-.791-.901 0-1.416.437-1.78 1.354h-.021v-1.025a.25.25 0 0 0-.234-.188h-1.211a.248.248 0 0 0-.252.219l.002 6.706c0 .129.103.234.236.244h1.299a.252.252 0 0 0 .256-.244v-3.608c0-.453.023-.86.209-1.27.145-.323.436-.536.756-.536.9 0 .814 1.073.814 1.806v3.641c.01.113.113.201.23.212h1.311a.255.255 0 0 0 .254-.212v-4.22c0-.649 0-1.55-.342-2.088zM29.081 20.302c-.75-.422-1.621-.546-2.449-.525l2.228-3.176c.205-.286.322-.465.322-.603v-.821a.238.238 0 0 0-.248-.243h-4.293a.235.235 0 0 0-.242.243v.959c0 .143.108.241.248.241h2.244l-2.578 3.696c-.156.237-.158.503-.158.659v.973c0 .14.159.301.307.219 1.461-.775 3.213-.698 4.533-.006.164.084.316-.08.316-.22v-1.024c-.015-.137-.06-.278-.23-.372zM28.251 22.729c-.267-.331-2.567-.616-3.97.369-.214.151-.179.36.062.332.789-.093 2.549-.304 2.861.096.313.401-.349 2.057-.646 2.795-.091.224.103.314.305.146 1.319-1.098 1.657-3.404 1.388-3.738z" />
                <path d="M25.831 24.117a22.032 22.032 0 0 1-8.457 1.729c-4.027 0-7.93-1.103-11.083-2.939-.275-.162-.48.121-.251.328 2.923 2.641 6.786 4.229 11.077 4.229 3.062 0 6.615-.963 9.069-2.771.405-.3.06-.75-.355-.576zM6.175 20.891c-.239-.332-.492-.6-.492-1.211v-2.036c0-.861.061-1.653-.574-2.247-.502-.481-1.332-.65-1.969-.65-1.242 0-2.628.463-2.921 1.999-.03.164.09.25.194.274l1.27.136c.116-.005.203-.121.226-.239.107-.529.553-.784 1.051-.784.268 0 .572.099.732.34.182.268.157.636.157.946v.168c-.756.088-1.746.143-2.456.455C.577 18.393 0 19.115 0 20.175c0 1.357.856 2.036 1.955 2.036.93 0 1.438-.219 2.154-.95.237.344.315.512.749.872a.274.274 0 0 0 .309-.03l.004.002c.26-.23.733-.645 1.001-.867.106-.09.088-.23.003-.347zm-2.326-1.975c0 .509.014.933-.244 1.385-.207.368-.536.593-.904.593-.501 0-.792-.381-.792-.946 0-1.113.997-1.315 1.94-1.315v.283z" />
              </svg>
            </td>
            <td className="td_buy">
              <a href={link} className="btn primary" target="_blank">
                Buy
              </a>
            </td>
            <td className="td_remove">
              <button
                className="btn secondary large"
                onClick={() => remove(productId)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    fill="#d9534f"
                  />
                </svg>
              </button>
              <button
                className="btn secondary"
                onClick={() => remove(productId)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      <tr className="tr_product">
      <Link href={`products/${category}`} >
        <td className="td_add" colSpan="10">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#4173c0"
              width="33px"
              height="33px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </span>
          <span>Add Item</span>
        </td>
      </Link>  
      </tr>
    </tbody>
  </table>

<style jsx>{`
:global(:root) {
  --shadow: 0px 3px 6px rgba(0,0,0,.16); 
}  
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
  
  /*-webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);*/
  box-shadow: var(--shadow); 
  border-radius: 4px;
  /*border: 1px solid rgba(0, 0, 0, 0.25);*/
}

.td_add svg,
span {
  vertical-align: middle;
}
.td_add span:last-of-type {
    padding-left: 8px;
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
  table caption {
    font-size: 24px;
    padding: 10px .5em;
  }
  td {
    padding: 0px;
  }
  tbody {
    display: block;
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
    background: rgba(0, 0, 0, 0.16);
    height: 2px;
    width: 95%;
    position: absolute;
    bottom: 0;
    left: 2.5%;
  }

  .tr_product:last-of-type::after {
    content: "";
    background: rgba(0, 0, 0, 0.16);
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
`}
</style>
</>

);

export default BuildSection;