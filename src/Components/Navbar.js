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
          <a
            class="nav-link text-white text-uppercase margin-right-nav-27"
            href="#"
          >
            Home
          </a>
        </li>

        <li class="nav-item dropdown margin-right-nav-27">
          <a
            class="nav-link dropdown-toggle text-white text-uppercase"
            href="#"
            id="navbardrop"
            data-toggle="dropdown"
          >
            Rooms
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">
              Link 1
            </a>
            <a class="dropdown-item" href="#">
              Link 2
            </a>
            <a class="dropdown-item" href="#">
              Link 3
            </a>
          </div>
        </li>

        <li class="nav-item margin-right-nav-27">
          <a class="nav-link text-white text-uppercase" href="#">
            Restaurant
          </a>
        </li>

        <li class="nav-item margin-right-nav-27">
          <a class="nav-link text-white text-uppercase" href="#">
            About us
          </a>
        </li>

        <li class="nav-item margin-right-nav-27">
          <a class="nav-link text-white text-uppercase" href="#">
            Blog
          </a>
        </li>

        <li class="nav-item margin-right-nav-27">
          <a class="nav-link text-white text-uppercase" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
