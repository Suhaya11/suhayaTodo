import { useState } from "react";

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
              <span>Home</span>

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
            <li className="new">New</li>
            <li className="completed">completed</li>
            <li className="about">About</li>
          </ul>
        )}
      </header>
    </>
  );
};

export default Header;
