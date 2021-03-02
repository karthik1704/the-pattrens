const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="widget">
                <div className="widget-title">Screenshot Logo</div>
                <p className="mb-5">
                  Check out the hand-picked collection of latest mobile design
                  patternsfrom apps that reflect the best in design
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget">
                <div className="widget-title">Quick Link</div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="widget">
                      <ul className="list">
                        <li>
                          <a href="/">About us</a>
                        </li>
                        <li>
                          <a href="/">Our Guidelines</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="widget">
                      <ul className="list">
                        <li>
                          <a href="/">Contact us</a>
                        </li>
                        <li>
                          <a href="/">Request</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget">
                <div className="widget-title">Donate</div>
                <p>Please support our page to give more valuable content.</p>
                <a type="button" className="btn btn-rounded" href="/">
                  Donate now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-content">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <div className="conditions">
                <ul>
                  <li>
                    <a href="/">Terms of Service</a>{' '}
                  </li>
                  <li>
                    <a href="/">Cookie Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="copyright-text text-right">
                &copy; 2020 Crafted by Screenshot Team.
                <a href="/" target="_blank" rel="">
                  {' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
