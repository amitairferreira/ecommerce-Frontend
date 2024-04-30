import React from "react";
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <section className="row grid-container footer">
        <article id="article" className="col-4">
            <p id="title">Funiro.</p>

            <p>
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
        </article>

        <article className="col-2">
            <p className="linkTitle">Links</p>
            <a className="row" href="/home">Home</a>
            <a className="row" href="/shop">Shop</a>
            <a className="row" href="/#">About</a>
            <a className="row" href="/#">Contact</a>
        </article>
        <article className="col-2">
            <p className="linkTitle">Help</p>
            <a className="row" href="/#">Payment Options</a>
            <a className="row" href="/#">Returns</a>
            <a className="row" href="/#">Privacy Policies</a>
        </article>
        <article className="col-4">
            <p className="linkTitle">Newsletter</p>

            <div className="input-group">
                <input type="text" placeholder="Enter Your Email Address" />
                <button>SUBSCRIBE</button>
            </div>
        </article>
      </section>

      <section className="bandage-section padding-footer">
          <hr className="separator" /> 
          <p className="left">2024 furino. All rights reserved </p>
      </section>
    </footer>
  );
}