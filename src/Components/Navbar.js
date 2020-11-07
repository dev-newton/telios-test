import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-sm navi-bar remove-hor-padding App">
      <Link class="navbar-brand text-white remove-hor-padding" to="/">
        Zetta Hotels
      </Link>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item ">
          <Link
            class="nav-link text-white text-uppercase margin-right-nav-27"
            href="#"
          >
            Home
          </Link>
        </li>

        <li class="nav-item dropdown margin-right-nav-27">
          <Link
            class="nav-link dropdown-toggle text-white text-uppercase"
            href="#"
            id="navbardrop"
            data-toggle="dropdown"
          >
            Rooms
          </Link>
          <div class="dropdown-menu">
            <Link class="dropdown-item" href="#">
              Link 1
            </Link>
            <Link class="dropdown-item" href="#">
              Link 2
            </Link>
            <Link class="dropdown-item" href="#">
              Link 3
            </Link>
          </div>
        </li>

        <li class="nav-item margin-right-nav-27">
          <Link class="nav-link text-white text-uppercase" href="#">
            Restaurant
          </Link>
        </li>

        <li class="nav-item margin-right-nav-27">
          <Link class="nav-link text-white text-uppercase" to="/about-us">
            About us
          </Link>
        </li>

        <li class="nav-item margin-right-nav-27">
          <Link class="nav-link text-white text-uppercase" href="#">
            Blog
          </Link>
        </li>

        <li class="nav-item margin-right-nav-27">
          <Link class="nav-link text-white text-uppercase" href="#">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
