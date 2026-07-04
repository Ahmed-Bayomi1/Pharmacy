    import React, { useState } from "react";
    import { Link, useLocation, useNavigate } from "react-router-dom";
    // Make sure these are installed / imported once in your app (e.g. in index.js or App.js):
    // npm install bootstrap bootstrap-icons react-router-dom
    // import "bootstrap/dist/css/bootstrap.min.css";
    // import "bootstrap-icons/font/bootstrap-icons.css";

    import "./Navbar.css"; // custom styling, see file below
    import { PATHS } from "../Routes/pathes"; // adjust the relative path if your Navbar lives elsewhere

    const NAV_LINKS = [
    { label: "Home", icon: "bi-house-fill", path: PATHS.DASHBOARD },
    { label: "Search", icon: "bi-search", path: PATHS.SEARCH },
    { label: "Reservations", icon: "bi-calendar2-check", path: PATHS.RESERVE },
    { label: "Profile", icon: "bi-person", path: PATHS.PROFILE },
    ];

    export default function Navbar({
    brand = "PharmaCare",
    hasNotification = true,
    onSignOut,
    }) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = () => {
        setIsOpen(false);
    };

    const handleBack = () => {
        setIsOpen(false);
        navigate(-1); // go back to the previous page in history
    };

    return (
        <nav className="navbar navbar-expand-lg pc-navbar">
        <div className="container-fluid px-0">

            {/* Left: back arrow + logo + brand */}
            <div className="d-flex align-items-center">
            <a
                href="#"
                className="pc-back-btn"
                aria-label="Go back"
                onClick={(e) => {
                e.preventDefault();
                handleBack();
                }}
            >
                <i className="bi bi-arrow-left"></i>
            </a>
            <div className="pc-logo-icon">
                <i className="bi bi-capsule"></i>
            </div>
            <span className="pc-brand">{brand}</span>
            </div>

            {/* Mobile toggle */}
            <button
            className="navbar-toggler border-0 shadow-none ms-2"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            >
            <i className="bi bi-list fs-3 pc-toggle-icon"></i>
            </button>

            {/* Collapsible content */}
            <div className={`collapse navbar-collapse flex-grow-1 pc-navbar-collapse-wrap ${isOpen ? "show" : ""}`}>

            {/* Center nav links */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-1">
                {NAV_LINKS.map((link) => (
                <li className="nav-item" key={link.label}>
                    <Link
                    to={link.path}
                    className={`nav-link pc-nav-link ${
                        location.pathname === link.path ? "active" : ""
                    }`}
                    onClick={handleNavClick}
                    >
                    <i className={`bi ${link.icon}`}></i> {link.label}
                    </Link>
                </li>
                ))}
            </ul>

            {/* Right actions */}
            <div className="pc-right-actions d-flex align-items-center">
                <a href="#" className="pc-icon-btn" aria-label="Notifications">
                <i className="bi bi-bell"></i>
                {hasNotification && <span className="pc-dot"></span>}
                </a>
                <a
                href="#"
                className="pc-signout"
                onClick={(e) => {
                    e.preventDefault();
                    if (onSignOut) onSignOut();
                }}
                >
                <i className="bi bi-box-arrow-right"></i> Sign Out
                </a>
            </div>

            </div>
        </div>
        </nav>
    );
    }