import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  const [color, setColor] = useState({
    fg: "white",
    bg: "transparent",
  });
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setColor({
          bg: "white",
          fg: "black",
        });
      } else {
        setColor({
          bg: "transparent",
          fg: "white",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleRef = useRef();
  function myFunction() {
    if (toggleRef.current) {
      toggleRef.current.classList.toggle("change");
    }
  }
  return (
    <>
      <nav
        className="navbar row fixed-top  border-1 z-1 manuBack bgformd"
        style={{ color: color.fg, backgroundColor: color.bg }}
      >
        <div className=" goodone ">
          <div className="logo onlyforlg">
            <Link to="/" className="navbar-brand  a">
              <img
                src="https://riyalitysoftwares.com/assets/img/logo.png"
                alt=""
              />
            </Link>
          </div>

          <div className="">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid ">
                <button
                  className="navbar-toggler manubutton"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                  <div
                    className="container1"
                    ref={toggleRef}
                    onClick={() => myFunction()}
                  >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                  </div>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0   ">
                    <li className="nav-item">
                      <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                          `nav-link active ${
                            isActive ? "text-warning " : "text-black"
                          }`
                        }
                        aria-current="page"
                        href="#"
                      >
                        HOME
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to={"/about"}
                        className={({ isActive }) =>
                          `nav-link active ${
                            isActive ? "text-warning " : "text-black"
                          }`
                        }
                        href="#"
                      >
                        ABOUT
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavDropdown
                        title="COURSES"
                        className="p-0"
                        id="navbarDropdown"
                      >
                        <NavDropdown
                          title="Front End "
                          id="frontEndLanguagesDropdown"
                          className="dropend fw-normal  position-relative   "
                        >
                          <div className="">
                            <Link
                              className="dropdown-item hoverorange "
                              to={"/course/html"}
                            >
                              HTML
                            </Link>

                            <Link
                              className="dropdown-item hoverorange"
                              to={"/course/css"}
                            >
                              CSS
                            </Link>

                            <Link
                              className="dropdown-item hoverorange"
                              to={"/course/bootstrap"}
                            >
                              BootStrap
                            </Link>

                            <Link
                              className="dropdown-item hoverorange"
                              to={"/course/template-modification"}
                            >
                              Template Modification
                            </Link>

                            <Link
                              className="dropdown-item hoverorange"
                              to={"/course/javascript"}
                            >
                              JavaScript
                            </Link>

                            <Link
                              className="dropdown-item hoverorange"
                              to={"/course/jQuery"}
                            >
                              JQuery
                            </Link>

                            <Link
                              className="dropdown-item hoverorange"
                              to={"/course/React"}
                            >
                              React js
                            </Link>
                          </div>
                          {/* Add more language items as needed */}
                        </NavDropdown>
                        <div
                          className="bg-secondary w-100  "
                          style={{ height: "1px" }}
                        ></div>
                        <NavDropdown
                          title="Back End "
                          id="frontEndLanguagesDropdown"
                          className="dropend fw-normal"
                        >
                          <Link
                            className="dropdown-item hoverorange "
                            to={"/course/java"}
                          >
                            Core Java
                          </Link>
                          <Link
                            className="dropdown-item hoverorange"
                            to={"/course/AdvJava"}
                          >
                            Advance Java
                          </Link>
                          <Link
                            className="dropdown-item hoverorange"
                            to={"/course/Frameworks"}
                          >
                            Frameworks
                          </Link>
                          <Link
                            className="dropdown-item hoverorange"
                            to={"/course/Database"}
                          >
                            Database
                          </Link>
                        </NavDropdown>
                      </NavDropdown>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        CORPORATE TRAINING
                      </NavLink>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li className="nav-item dropdown">
                          <Link
                            className="dropdown-item hoverorange"
                            to={"/course/sangolaofflineCourses"}
                          >
                            Sangola Offline Training
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item hoverorange" href="#">
                            Corporate Training
                          </Link>
                        </li>

                        <li>
                          <Link className="dropdown-item hoverorange" href="#">
                            Guest Lecture
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item hoverorange" href="#">
                            Collage Workshop
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to={"gallary"}
                        className={({ isActive }) =>
                          `nav-link active ${
                            isActive ? "text-warning " : "text-black"
                          }`
                        }
                        aria-current="page"
                      >
                        GALLARY
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to={"blog"}
                        className={({ isActive }) =>
                          `nav-link active ${
                            isActive ? "text-warning " : "text-black"
                          }`
                        }
                        aria-current="page"
                      >
                        BLOGS
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to={"contact"}
                        className={({ isActive }) =>
                          `nav-link active ${
                            isActive ? "text-warning " : "text-black"
                          }`
                        }
                        aria-current="page"
                        href="#"
                      >
                        CONTACT
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <NavLink to={"/"} className="navbar-brand forsmonly">
            <img
              src="https://riyalitysoftwares.com/assets/img/logo.png"
              alt=""
            />
          </NavLink>
        </div>
      </nav>
      <div className="liveChat position-fixed  ">
        <div className="img1 d-flex flex-column ">
          <img
            src="https://riyalitysoftwares.com/assets/img/logos/chatgpt.png"
            alt=""
            width={50}
          />
          <img
            src="https://riyalitysoftwares.com/assets/img/logos/whatsapp.png"
            alt=""
            width={50}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
