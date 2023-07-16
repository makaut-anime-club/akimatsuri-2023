import React from "react";
import {FaInstagramSquare as Instagram} from "react-icons/fa"
import {BsDiscord as Discord} from "react-icons/bs"
import {BiHome as HomeIcon} from "react-icons/bi"
import {BsInfoCircle as AboutIcon} from "react-icons/bs"
import {BsCalendarEvent as EventsIcon} from "react-icons/bs"
import {BsShop as StallsIcon} from "react-icons/bs"
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://lh3.googleusercontent.com/a/AAcHTtdbald_ZCkvT2lRRQndb2KlgRdvqqH1gwknJspqxUFC2g=s96-c-rg-br100"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top"
          />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/"><HomeIcon className="icon-sp" size={20}/> Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about"><AboutIcon className="icon-sp" size={20}/> About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events"><EventsIcon className="icon-sp" size={20}/> Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stalls"><StallsIcon className="icon-sp" size={20}/> Stalls</Link>
            </li>

          </ul>
          <form className="d-flex justify-content-end" role="link">
            <a href="https://www.instagram.com/makaut_animeclub" style={{marginRight:'2rem'}}><Instagram size={42}/></a>
            <a href="https://discord.gg/F4GyEkFTxN" style={{marginRight:'2rem'}}><Discord size={42}/></a>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
