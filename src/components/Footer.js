import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="progress" style={{ height: "1px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "100%" }}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="alert alert-warning" role="alert">
        <p>
          Developed by
          <a className="alert-link" href="https://www.satyasandeep.in">
            {" "}
            Satya Sandeep
          </a>
        </p>
        <a
          className="alert-link"
          href="https://github.com/shivamangina/Todo-list-using-React"
        >
          View Code
        </a>
      </div>
    </div>
  );
}
