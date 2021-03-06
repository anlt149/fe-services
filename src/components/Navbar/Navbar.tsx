import React from 'react';
import 'styles/header.css';
const Navbar = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a href="#" className="navbar-brand logo-website">
              <img src="images/logo.jpg" alt="" className="img-fluid" />
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav">
                <a href="#" className="nav-item nav-link active">
                  Trang chủ
                </a>
                <a href="#" className="nav-item nav-link">
                  Về chúng tôi
                </a>
                <a href="#" className="nav-item nav-link">
                  Tin tức
                </a>
                <a href="#" className="nav-item nav-link">
                  Liên hệ
                </a>
              </div>
              <div className="navbar-nav">
                <button
                  type="button"
                  className="btn btn-primary btn-pink"
                  data-bs-toggle="modal"
                  data-bs-target="#form_login"
                  data-bs-whatever=""
                >
                  Đăng nhập
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section className="container-fluid">
        <div className="row">
          <div className="banner-home">
            <img src="images/banner.jpg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
