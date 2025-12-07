import React from "react";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    // <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
    //   <aside>
    //     <Link to="/">
    //       <p
    //         class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 pl-2
    //         text-3xl font-extrabold tracking-wide drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]
    //         animate-pulse"
    //       >
    //         PawMart
    //       </p>
    //     </Link>

    //     <p>
    //       PawMart connects pet lovers, breeders,
    //       <br />
    //       and shops in one trusted marketplace
    //       <br /> to adopt pets or buy essential pet products with ease.
    //     </p>
    //   </aside>
    //   <nav>
    //     <h6 className="footer-title">Services</h6>
    //     <NavLink to="/" className="link link-hover">
    //       Home
    //     </NavLink>

    //     <a className="link link-hover">Pet Care in Winter</a>
    //     <a className="link link-hover">Winter pet clothing</a>
    //     <a className="link link-hover">Pets care veterinary clinic</a>
    //   </nav>
    //   <nav>
    //     <h6 className="footer-title">Company</h6>
    //     <a className="link link-hover">About us</a>
    //     <a className="link link-hover">Contact</a>
    //   </nav>
    //   <nav>
    //     <h6 className="footer-title">Legal</h6>
    //     <a className="link link-hover">Terms of use</a>
    //     <a className="link link-hover">Privacy policy</a>
    //     <a className="link link-hover">Care policy</a>
    //   </nav>
    // </footer>

        <footer className="bg-base-200 mt-12 border-t border-gray-300">
          <div className="container mx-auto px-6 py-10">
    
    
            <div className="flex flex-col md:flex-row md:justify-around md:items-start">
    
              {/* Brand */}
              <div className="mb-6 md:mb-0">
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                   text-3xl font-extrabold tracking-wide drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                  PawMart
                </h2>
                <p className="text-gray-600 mt-2 text-sm max-w-xs">
                  PawMart connects local pet owners and buyers for adoption and pet care products.<br/>
                  And it's the trusted platform for pet adoption, supplies, and joyful companionship.
                </p>
              </div>
    
              {/* Useful Links */}
              <div>
                <h3 className="font-bold text-lg mb-3 text-gray-700">Useful Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link className="hover:text-blue-500 transition" to="/">Home</Link>
                  </li>
                  <li>
                    <Link className="hover:text-blue-500 transition" to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link className="hover:text-blue-500 transition" to="/terms">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
    
            {/* Divider */}
            <div className="border-t border-gray-300 my-6"></div>
    
            {/* Bottom copyright */}
            <p className="text-center text-gray-600 text-sm">
              © {new Date().getFullYear()} PawMart — All Rights Reserved.
            </p>
          </div>
        </footer>
  );
};

export default Footer;
