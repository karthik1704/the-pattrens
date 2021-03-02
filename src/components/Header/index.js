import { useState } from 'react';

import ProfileImage from '../../img/profile.png';

const Header = () => {
  const [user, setUser] = useState(false);
  return (
    <header id="header">
      <div className="header-inner">
        <div className="container">
          <div id="logo">
            <a href="/">
              <span className="logo-default">Screenshot Logo</span>
              <span className="logo-dark">Screenshot Logo</span>
            </a>
          </div>
          <div id="mainMenu-trigger">
            <a href="/" className="lines-button x">
              <span className="lines"></span>
            </a>
          </div>
          <div id="mainMenu">
            <div className="container">
              <nav>
                <ul>
                  {user ? (
                    <>
                      <li>
                        <a
                          type="button"
                          class="btn btn-rounded register-now"
                          href="request-form.php"
                        >
                          Request
                        </a>
                      </li>
                      <li>
                        <div class="p-dropdown m-l-15">
                          <a href="/">
                            <img src={ProfileImage} alt="profile" />
                          </a>
                          <ul class="p-dropdown-content profile-down">
                            <li>
                              <a href="my-board.php">My Boards</a>
                            </li>
                            <li>
                              <a href="setting.php">Setting</a>
                            </li>
                            <li>
                              <a href="/" class="logout-design">
                                Logout
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <a href="login.php">Sign In</a>
                      </li>
                      <li>
                        <a
                          type="button"
                          className="btn btn-rounded register-now"
                          href="register.php"
                        >
                          Register Now
                        </a>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
