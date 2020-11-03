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
      <form onSubmit={subscribe}>
        <label htmlFor="email-input" style={{ display: "block" }}>
          <h4>{"Sign up for future updates."}</h4>
        </label>
        <input
          id="email-input"
          className="subscribe-input"
          name="email"
          placeholder="Enter your Email Address"
          ref={inputEl}
          type="email"
        />
        <div className="message">
          {message
            ? message
            : `We'll only send emails when there are new awesome features. No spam.`}
        </div>
        <button type="submit" className="btn">
          Subscribe
        </button>
      </form>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 90%;
        }

        .subscribe {
          display: flex;
          align-items: center;
          flex-direction: column;
          align-self: center;
          margin-bottom: 4rem;
          background: #EDF1F7;
          padding: 5rem 0;
          border-radius: 5px;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
          
        }
        @media (max-width: 1050px) {
          h4 {
          font-size: 1.25rem;
        }
        }
        label {
          padding-left: 10px;
          margin-bottom: .5rem;
        }
        .message {
          padding-left: 10px;
          margin-bottom: 1rem;
        }
        .subscribe-input {
          width: 700px;
          max-width: 100%;
          padding: 1rem 1rem;
          margin-bottom: 0.5rem;
          margin-right: 0.5rem;
          border: none;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
          border-radius: 6px;
        }
        .btn {
          height: 40px;
          font-size: 1.25rem;
          padding: 10px 50px;
          background: #4173c0;
          color: white;
          font-weight: bold;
          text-decoration: none;
          border-radius: 5px;
          background: #4173c0;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
          transition: 500ms;
          border: none;
          cursor: pointer;
          max-width: 200px;
        }
        .btn:hover,
        .btn:focus {
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.35);
          background: #365f9e;
        }
      `}</style>
    </div>
  );
}

export default Subscribe;
