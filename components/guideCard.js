import Link from "next/link";

export const GuideCard = ({ data, label }) => (
  <div key={data.slug}>
    <Link href={`/guides/${data.slug}`}>
      <a>
        <div className="guide-card">
          {/* <span className="card-label">{(Array.isArray(data.label)) ? data.label.slice(0, 1): data.label }</span> */}
          <span className="card-label">{label}</span>
          <h5>{data.title}</h5>
          <span className="rating">
            {data.stars}
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
          <p>{data.tags.join(", ")}</p>
          <span className="total">${data.total}</span>
        </div>
      </a>
    </Link>
    <style jsx>{`
      a {
        text-decoration: none;
        color: inherit;
      }
      .guide-card {
        background: #fff;
        width: calc(100vw - 5rem);
        max-width: 400px;
        min-height: 120px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: 24px 3fr 1fr;
        grid-column-gap: 10px;
        padding: 10px 10px 10px 0;
        position: relative;
        border-radius: 5px;
        margin-bottom: 3.75em;
        margin-right: 1.5em;
        transition: 250ms all;
      }
      .guide-card:hover, a .guide-card:focus {
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26);
       
      }
      .guide-card::before {
        content: "";
        width: 24px;
        background: rgba(65, 115, 192, 30%);
        position: absolute;
        height: 100%;
        border-radius: 5px 0 0 5px;
      }
      .card-label {
        grid-row: span 2;
        transform: rotate(270deg);
        place-self: end center;
        margin-bottom: 1em;
        color: rgba(65, 115, 192, 70%);
        font-weight: 700;
        font-size: small;
      }
      .guide-card h5 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        height: 4ch;
        font-size: 1rem;
      }
      .guide-card p {
        grid-column: 2/3;
        max-width: 80%;
        place-self: end start;
        margin-bottom: 0;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .rating {
        line-height: 1.5;
        color: rgba(65, 115, 192, 30%);
        place-self: start end;
      }
      .rating svg {
        fill: rgba(65, 115, 192, 30%);
        vertical-align: top;
      }
      .total {
        grid-column: 3;
        place-self: end;
      }
      @media only screen and (min-width: 1024px) {
        .guide-card {
          min-width: 380px;
          max-width: 400px;
          min-height: 130px;
        }
        .guide-card h5 {
          font-size: 1.25rem;
        }
      }
    `}</style>
  </div>
);
