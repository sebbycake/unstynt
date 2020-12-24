import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import search from "../../static/images/search.png"

const IndexPage = () => (
  <Layout>
    <div className="outer-container">
      <div className="inner-container">
        <h1>Scale your business with the best talent today.</h1>
        <br />
        <h3>Trusted by over 100 SMEs nationwide</h3>
        <div className="center">
          <Link className="btn" to="/post-a-job">Get Started</Link>
        </div>
      </div>

      <div>
        <img className="responsive-img" src={search} alt="Landing Image" />
      </div>

    </div>

    <div className="content">
      <h2 className="heading">Find the best talent.</h2>
      <div className="divider"></div>
      <p>
        Junior University students are hungry for opportunities that could extend their skill sets in their preferred domains by finding work employability.
        We, being students from the National University of Singapore, can leverage on our extensive network to find
        YOU the best talents from the leading university in Asia. We assure to find you promising talents
        that would cater to your company's needs and requirements.
        </p>
    </div>
    <div className="content">
      <h2 className="heading">Scale the business the way YOU want it.</h2>
      <div className="divider"></div>
      <p>
        By connecting you to bright talents across 16 faculties of  NUS, YOU have the flexibility to choose how you wish to scale your business.
        From tech, to arts, to medicine - YOU will be exposed to various talents across a myriad of different domains!
        </p>
    </div>
    <div className="content">
      <h2 className="heading">Provide learning opportunities.</h2>
      <div className="divider"></div>
      <p>
        Students are hungry for learning opportunities and real-world working experience.
        They want to make practical impact to your business and you are a great source for that.
        We are here to connect.
        </p>
    </div>
  </Layout>
)


export default IndexPage