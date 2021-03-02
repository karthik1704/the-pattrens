import ProjectList from './ProjectList';
import Banner from '../../img/banner1.jpg';

const Home = () => (
  <div className="body-inner">
    <section className="p-0">
      <img src={Banner} style={{ width: '100%' }} alt="banner" />
    </section>

    <section className="background-8be4af p-t-15  p-b-15">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <p>
              We spend more time to give a quality content & our pocket money
              for project expenses such as website & server hosting.
              <span>
                <a className="bg-green" href="/">
                  <i className="fas fa-coffee"></i> Buy me a coffee
                </a>
              </span>{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
    <ProjectList />
  </div>
);

export default Home;
