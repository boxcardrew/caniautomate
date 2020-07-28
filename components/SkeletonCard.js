export const Skeleton = () => (
  <>
  <div className="skeleton"></div>
    <style jsx>{`
      .skeleton {
        margin: 16px;
        width: 40%;
        height: 211px;
        transistion: all 1s;
        max-width: 310px;
        max-height: 363px;
      }
      @media only screen and (min-width: 768px) {
        .skeleton {
          height: 320px;
        }
      }
      @media only screen and (min-width: 1150px) {
        .skeleton {
          height: 350px;
        }
      }
      
      .skeleton:empty::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        background-image: linear-gradient(90deg, #fff, #f6f6f6, #fff);

        background-size: 200px 320px;

        background-position: -200%;
        background-repeat: no-repeat;

        animation: loading 1.5s infinite linear;
      }
      @keyframes loading {
        to {
          background-position: 250%;
        }
      }
    `}</style>
    </>
);
