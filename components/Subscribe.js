import React, { useRef, useState } from "react";
import fetch from "isomorphic-unfetch";

function Subscribe() {
  const inputEl = useRef(null);

  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/emailSubscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setMessage(error);

      return;
    }

    inputEl.current.value = "";
    setMessage("Thanks! We will keep you updated!");
  };

  return (
    <div className="subscribe">
      <div className="sub-heading">
        <h3>We're adding new features all the time</h3>
        <p>Join us in building a smart home, smarter</p>
      </div>
      <div className="sub-form">
        <form onSubmit={subscribe}>
          <label htmlFor="email-input" aria-label="Newsletter Sign Up"></label>
          <input
            id="email-input"
            className="subscribe-input"
            name="email"
            placeholder="Enter your Email Address"
            ref={inputEl}
            type="email"
          />
          <button type="submit" className="btn">
            Subscribe
          </button>
          <div className="message">
            {message ? message : `Quality emails. No spam.`}
          </div>
        </form>
      </div>
      <style jsx>{`
        form {
          
        }

        .subscribe {
          display: flex;
          align-items: center;
          max-width: 90%;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 4rem;
          background: #4173c0;
          padding: 5rem 0;
          border-radius: 5px;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
          justify-content: space-around;
          flex-wrap: wrap;
          color: #fff;
        }
        .sub-heading {
          flex-grow: 0;
          flex-basis: 40ch;
        }
        .sub-form {
          flex-grow: 0;
          margin-top: 8px;
        }
        
        .message {
          margin-bottom: 1rem;
        }
        .subscribe-input {
          width: 300px;
          max-width: 100%;
          font-size: 1rem;
          padding: 1rem 1rem;
          margin-bottom: 0.5rem;
          margin-right: 0.5rem;
          border: none;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
          border-radius: 6px;
        }
        .btn {
          padding: 1rem;
          font-size: 1rem;
          padding: 1rem;
          color: #4173c0;
          font-weight: bold;
          text-decoration: none;
          border-radius: 6px;
          background: #fff;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
          transition: 500ms;
          border: none;
          cursor: pointer;
          transition: all 200ms linear;
          margin-bottom: .5rem;
        }
        .btn:hover,
        .btn:focus {
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.35);
          background: #f0f0f0;
          color: #4173c0;
        }
        
        @media (max-width: 1050px) {
          h3 {
            font-size: 2.25rem;
            margin-bottom: .5rem;
          }
          form {
            text-align: center;
          }
          .subscribe {
            display: flex;
            padding: 3rem 0;
          }
          .sub-heading, .sub-form {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .subscribe-input, .btn {
            width: 90%;
            margin-right: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Subscribe;
