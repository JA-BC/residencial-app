import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <ul className="nav flex-column bg-dark h-100 align-items-center">
            <li className="nav-item my-3">
                <span className="nav-link">
                    <img src="https://play-lh.googleusercontent.com/gd7vl3Bb-PPYSzae1LJSO3gsuhY5u6vlpbB2CPa-sC5MzWVZo9zo4Q1ImKbrbbDGtA" alt="Logo"
                        className="w-45px" />
                </span>
            </li>

            <li className="nav-item my-3">
                <NavLink to="/app/home" className="nav-link py-3 rounded-2 bg-active-primary bg-active-opacity-10 text-active-primary">
                    <i className="bi bi-house-door fs-1"></i>
                </NavLink>
            </li>

            <li className="nav-item my-3">
                <NavLink to="/app/residente" className="nav-link py-3 rounded-2 bg-active-primary bg-active-opacity-10 text-active-primary">
                    <i className="bi bi-activity fs-1"></i>
                </NavLink>
            </li>

            <li className="nav-item my-3">
                <NavLink to="/not-found" className="nav-link py-3 rounded-2 bg-active-primary bg-active-opacity-10 text-active-primary">
                    <i className="bi bi-pie-chart fs-1"></i>
                </NavLink>
            </li>

            <li className="nav-item my-3 mt-auto">
                <NavLink to="/not-found" className="nav-link">
                    <i className="bi bi-gear fs-1"></i>
                </NavLink>
            </li>
        </ul>
    )
}
