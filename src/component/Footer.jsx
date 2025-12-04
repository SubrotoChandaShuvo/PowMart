import React from "react";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <Link to="/">
          <p
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 pl-2
            text-3xl font-extrabold tracking-wide drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]
            animate-pulse"
          >
            PawMart
          </p>
        </Link>

        <p>
          PawMart connects pet lovers, breeders,
          <br />
          and shops in one trusted marketplace
          <br /> to adopt pets or buy essential pet products with ease.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <NavLink to="/" className="link link-hover">
          Home
        </NavLink>

        <a className="link link-hover">Pet Care in Winter</a>
        <a className="link link-hover">Winter pet clothing</a>
        <a className="link link-hover">Pets care veterinary clinic</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Care policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
