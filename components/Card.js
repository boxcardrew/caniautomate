export const Card = ({ item, addFunc }) => (
  <div className="card" key={item.productId}>
    <button className="add" onClick={() => addFunc(item)}>
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
    <div className="img-container">
      <img src={item.image} alt={item.brand} loading="lazy" />
    </div>

    <div className="card-info">
      <h3>{item.brand}</h3>
      <p>{item.item}</p>
      <div className="card-details">
        <span className="rating">
          {item.rating >= 1 && (
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </span>
          )}
        </span>
        {/* <span className="price">
                        <sup style={{ fontSize: `.75em` }}>$ </sup>
                        {item.price}
                      </span> */}
      </div>
    </div>
    <style jsx>{`
      .card {
        position: relative;
        margin: 0.875em;
        width: 40%;
        max-width: 310px;
        max-height: 363px;
        text-align: left;
        text-decoration: none;
        color: #fff;
        border-radius: 4px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border: none;
      }
      .card:hover {
        box-shadow: 0px 3px 6px rgba(65,115,192,.25);
      }
      .card-info {
        color: #030303;
        padding: 4px 8px;
        align-self: flex-start;
        display: flex;
        flex-direction: column;
        height: 100px;
      }
      .add {
        position: absolute;
        bottom: 4px;
        right: 8px;
        z-index: 1;
        background: none;
        border: none;
        cursor: pointer;
      }
      .add svg {
        height: 25px;
        width: 25px;
        fill: #4173c0;
      }
      .card h3 {
        margin: 0;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 0;
      }
      .card p {
        margin: 0;
        padding: 0;
        max-width: 100%;
        font-size: 12px;
        font-weight: 300;
        color: #333;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .img-container {
        width: 240px;
        height: 240px;
        display: grid;
        place-items: center;
      }
      img {
        height: 8rem;
        width: 8rem;
        object-fit: contain;
      }
      @media only screen and (max-width: 1150px) {
        .img-container {
          width: 8rem;
          height: 8rem;
        }
      img {
        height: 6rem;
        width: 6rem;
        object-fit: contain;
      }
      }
      .card-details {
        margin-top: auto;
        display: flex;
        align-items: flex-end;
      }
      .rating {
        margin: 0;
      }
      .rating span svg {
        fill: #e0c620;
        height: 0.95em;
        width: 0.95em;
      }
      .price {
        font-size: 25px;
        font-weight: 600;
      }
      @media only screen and (min-width: 1151px) {
        .add svg {
          height: 35px;
          width: 35px;
          fill: #4173c0;
        }
        .rating span svg {
          height: 1.35em;
          width: 1.35em;
        }
      }
    `}</style>
  </div>
);
