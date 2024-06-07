import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import userService from '../service/userInstance';
import { useNotification } from './NotificationContext';

export async function loader() {
  const user = await userService.getUser();
  return { user };
}

function Header() {
  const { user } = useLoaderData();
  console.log(user);

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const navigate = useNavigate()
  const notify = useNotification();
    const handleLogout = () => {
        userService.logout()
            .then(responce => {
                notify(responce.data.message)
                setTimeout(() => {
                    navigate("/")
                }, 500);
            })
            .catch(error => {
              notify(error.response.data.message, 'error');
            })
    }

  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <div className="d-flex align-items-center text-white">
            <FaUserCircle size={30} />
            <span className="ms-2">{user.data.user.firstname}</span>
          </div>

          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to={"/home"} className={splitLocation[1] === "home" ? "nav-link active" : "nav-link link-body-emphasis text-white"}>
                Home
              </Link>
            </li>
            <li>
            <Link to={"/features"} className={splitLocation[1] === "features" ? "nav-link active" : "nav-link link-body-emphasis text-white"}>
                Features
              </Link>
            </li>
            <li>
              <Link to={"/plans"} className={splitLocation[1] === "plans" ? "nav-link active" : "nav-link link-body-emphasis text-white"}>
                Subscriptions
              </Link>
            </li>
          </ul>

          <div className="text-end">
            <button type="button" className="btn btn-warning" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
