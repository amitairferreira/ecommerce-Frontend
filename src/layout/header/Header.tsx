import React from "react";
import logo from "../../assets/images/Meubel House_Logos-05.png";
import user from "../../assets/images/Vector (4).png";
import search from "../../assets/images/Vector.png";
import heart from "../../assets/images/akar-icons_heart.png";
import shop from "../../assets/images/ant-design_shopping-cart-outlined.png";
import "./Header.css";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/home">
                <img src={logo} alt="Logo" width="50" height="50" />
                <span className="text-color ms-2">Furniro</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/shop">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Contact</a>
                    </li>
                </ul>
                <div className="ms-auto">
                    <a className="right primary-color contents" href="/#">
                        <img className="login-user" src={user} alt="Icone User" />
                    </a>
                    <a className="icon-padding primary-color" href="/#">
                        <img src={search} alt="Icone Lupa" />
                    </a>
                    <a className="icon-padding primary-color" href="/#">
                        <img src={heart} alt="Icone Coração" />
                    </a>
                    <a className="icon-padding primary-color" href="/#">
                        <img src={shop} alt="Icone Carrinho" />
                    </a>
                </div>
            </div>
        </div>
      </nav>
    </header>
  );
}