import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const menuModal = document.querySelector(".menuUl") as HTMLUListElement;
  const showMenuModal = () => {
    if (!menuOpen) {
      menuModal?.classList.remove("hideMenu");
    } else {
      menuModal?.classList.add("hideMenu");
    }
  };

  return (
    <>
      <header>
        <h1>Suhaya Todo</h1>
        {menuOpen && (
          <span
            onClick={() => {
              setMenuOpen(false);
              showMenuModal();
            }}
            className="openMenu"
          >
            &equiv;
          </span>
        )}
        {!menuOpen && (
          <ul className={"menuUl"}>
            <li className="home">
              <span>
                <Link className="navlink" to={"/"}>
                  {" "}
                  Home
                </Link>
              </span>

              <span
                className="closeMenu"
                onClick={() => {
                  setMenuOpen(true);
                  showMenuModal();
                }}
              >
                &times;
              </span>
            </li>
            <li className="new">
              <Link className="navlink" to={"/new"}>
                {" "}
                New
              </Link>
            </li>
            <li className="completed">
              {" "}
              <Link className="navlink" to={"/completed"}>
                completed
              </Link>
            </li>
            <li className="about">
              {" "}
              <Link className="navlink" to="/about">
                About
              </Link>
            </li>
          </ul>
        )}
      </header>
    </>
  );
};

export default Header;
