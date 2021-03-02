import FilterImage from '../../img/filter.png';
import Project0 from '../../img/product-logo.jpg';
import Project1 from '../../img/product-1.jpg';
import Project2 from '../../img/product-2.jpg';
import Project3 from '../../img/product-3.jpg';
import Project4 from '../../img/product-4.jpg';
import Project5 from '../../img/product-5.jpg';
import Project6 from '../../img/product-6.jpg';
import Project7 from '../../img/product-7.jpg';

const ProjectList = () => {
  return (
    <section id="page-content" className="portfolio-design">
      <div className="container-fluid">
        <div className="portfolio_contents">
          <nav className="grid-filter gf-outline" data-layout="#portfolio">
            <ul>
              <li className="active">
                <a href="/" data-category="*">
                  All
                </a>
              </li>
              <li>
                <a href="/" data-category=".ct-branding">
                  Andriod
                </a>
              </li>
              <li>
                <a href="/" data-category=".ct-photography">
                  iOS
                </a>
              </li>
              <li>
                <a href="/" data-category=".ct-marketing">
                  Web Dashboard
                </a>
              </li>
              <li>
                <a href="/" data-category=".ct-media">
                  Google font website
                </a>
              </li>
              <li>
                <a href="/" data-category=".ct-webdesign">
                  Game Ui
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="grid-active-title1 filter-conditions">
          <div className="filter-home">
            <img src={FilterImage} alt="" />
            <span>Filter</span>
          </div>
          <div id="mainMenu" className="tag-content">
            <div className="container">
              <nav>
                <ul>
                  <li className="dropdown mega-menu-item tag-design">
                    <a href="/">
                      Tags <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu tag-menu">
                      <li className="mega-menu-content tag-magamenu">
                        <div className="row">
                          <div className="col-lg-4">
                            <ul>
                              <li>
                                <a href="/">Advertising</a>
                              </li>
                              <li>
                                <a href="/">Agency</a>
                              </li>
                              <li>
                                <a href="/">Animals</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4">
                            <ul>
                              <li>
                                <a href="/">Advertising</a>
                              </li>
                              <li>
                                <a href="/">Agency</a>
                              </li>
                              <li>
                                <a href="/">Animals</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4">
                            <ul>
                              <li>
                                <a href="/">Advertising</a>
                              </li>
                              <li>
                                <a href="/">Agency</a>
                              </li>
                              <li>
                                <a href="/">Animals</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <form
            className="widget-subscribe-form"
            noValidate=""
            action=""
            // role="form"
            method="post"
          >
            <div className="input-group">
              <input
                type="text"
                required=""
                name="widget-subscribe-form-email"
                className="form-control required search"
                placeholder="search"
              />
            </div>
          </form>
        </div>

        <div
          id="portfolio"
          className="grid-layout portfolio-4-columns"
          data-margin="20"
        >
          <div className="portfolio-item img-zoom  ct-photography ct-media ct-branding ct-Media ct-webdesign">
            <a href="project-detail1.php">
              <div className="portfolio-item-wrap">
                <div className="portfolio-image">
                  <img src={Project0} alt="" />
                </div>

                <div className="portfolio-contents">
                  <div className="fst-content">
                    <h2>Website</h2>

                    <div className="portfolio-heart">
                      <i className="fas fa-heart"></i>466
                    </div>
                  </div>

                  <div className="portfolio-detail sec-content">
                    <p>Travel and share the Best moments</p>
                    <div className="portfolio-clock">
                      <i className="far fa-clock"></i>APR 26
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="portfolio-item img-zoom ct-photography ct-marketing ct-media">
            <a href="project-detail.php">
              <div className="portfolio-item-wrap">
                <div className="portfolio-image">
                  <img src={Project2} alt="" />
                </div>

                <div className="portfolio-contents">
                  <div className="fst-content">
                    <h2>OLA</h2>

                    <div className="portfolio-heart">
                      <i className="fas fa-heart"></i>466
                    </div>
                  </div>

                  <div className="portfolio-detail sec-content">
                    <p>Travel and share the Best moments</p>
                    <div className="portfolio-clock">
                      <i className="far fa-clock"></i>APR 26
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="portfolio-item img-zoom ct-photography ct-media ct-branding ct-Media">
            <a href="project-detail.php">
              <div className="portfolio-item-wrap">
                <div className="portfolio-image">
                  <img src={Project1} alt="" />
                </div>

                <div className="portfolio-contents">
                  <div className="fst-content">
                    <h2>OLA</h2>

                    <div className="portfolio-heart">
                      <i className="fas fa-heart"></i>466
                    </div>
                  </div>

                  <div className="portfolio-detail sec-content">
                    <p>Travel and share the Best moments</p>
                    <div className="portfolio-clock">
                      <i className="far fa-clock"></i>APR 26
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign">
            <a href="project-detail.php">
              <div className="portfolio-item-wrap">
                <div className="portfolio-image">
                  <img src={Project4} alt="" />
                </div>

                <div className="portfolio-contents">
                  <div className="fst-content">
                    <h2>OLA</h2>

                    <div className="portfolio-heart">
                      <i className="fas fa-heart"></i>466
                    </div>
                  </div>

                  <div className="portfolio-detail sec-content">
                    <p>Travel and share the Best moments</p>
                    <div className="portfolio-clock">
                      <i className="far fa-clock"></i>APR 26
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="portfolio-item img-zoom ct-photography ct-media ct-branding ct-marketing ct-webdesign">
            <a href="project-detail.php">
              <div className="portfolio-item-wrap">
                <div className="portfolio-image">
                  <img src={Project5} alt="" />
                </div>

                <div className="portfolio-contents">
                  <div className="fst-content">
                    <h2>OLA</h2>

                    <div className="portfolio-heart">
                      <i className="fas fa-heart"></i>466
                    </div>
                  </div>

                  <div className="portfolio-detail sec-content">
                    <p>Travel and share the Best moments</p>
                    <div className="portfolio-clock">
                      <i className="far fa-clock"></i>APR 26
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="portfolio-item img-zoom ct-photography ct-media ct-branding ct-Media ct-marketing ct-webdesign">
            <a href="project-detail.php">
              <div className="portfolio-item-wrap">
                <div className="portfolio-image">
                  <img src={Project6} alt="" />
                </div>

                <div className="portfolio-contents">
                  <div className="fst-content">
                    <h2>OLA</h2>

                    <div className="portfolio-heart">
                      <i className="fas fa-heart"></i>466
                    </div>
                  </div>

                  <div className="portfolio-detail sec-content">
                    <p>Travel and share the Best moments</p>
                    <div className="portfolio-clock">
                      <i className="far fa-clock"></i>APR 26
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="portfolio-item img-zoom ct-photography ct-marketing ct-media">
            <a href="project-detail.php">
              <div className="portfolio-item-wrap">
                <div className="portfolio-image">
                  <img src={Project7} alt="" />
                </div>

                <div className="portfolio-contents">
                  <div className="fst-content">
                    <h2>OLA</h2>

                    <div className="portfolio-heart">
                      <i className="fas fa-heart"></i>466
                    </div>
                  </div>

                  <div className="portfolio-detail sec-content">
                    <p>Travel and share the Best moments</p>
                    <div className="portfolio-clock">
                      <i className="far fa-clock"></i>APR 26
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="portfolio-item img-zoom ct-marketing ct-media ct-branding ct-marketing ct-webdesign">
            <a href="project-detail.php">
              <div className="portfolio-item-wrap">
                <div className="portfolio-image">
                  <img src={Project1} alt="" />
                </div>
                <div className="portfolio-contents">
                  <div className="fst-content">
                    <h2>OLA</h2>
                    <div className="portfolio-heart">
                      <i className="fas fa-heart"></i>466
                    </div>
                  </div>

                  <div className="portfolio-detail sec-content">
                    <p>Travel and share the Best moments</p>
                    <div className="portfolio-clock">
                      <i className="far fa-clock"></i>APR 26
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div id="showMore">
          <a href="/" className="btn btn-rounded btn-light">
            Load more
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
