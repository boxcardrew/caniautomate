export const GuideCard = () => (
  <div className="guide-card">
    <span className="card-label">Featured</span>
    <h5>Alexa Theater Room</h5>
    <span className="rating">
      1.2k
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
    <p>Amazon Echo, Sengled Hub, Fire TV Stick, Logitech Harmony</p>
    <span className="total">$350</span>
    <style jsx>{`
      .guide-card {
        background: #fff;
        max-width: 483px;
        min-height: 135px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: 24px 3fr 1fr;
        grid-column-gap: 10px;
        padding: 10px 10px 10px 0;
        position: relative;
        border-radius: 5px;
        margin-bottom: 3.75em;
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

      .guide-card p {
        grid-column: 2/3;
        max-width: 80%;
        place-self: start start;
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
    `}</style>
  </div>
);
