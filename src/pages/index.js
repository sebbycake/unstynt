import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import search from "../../static/images/search.png"
import mail from "../../static/images/mail.png"
import search_talent from "../../static/images/search_talent.png"
import upload from "../../static/images/upload.png"

const IndexPage = () => (
  <Layout>

    <section>
      <div className="outer-container">
        <div className="inner-container">
          <h1>
            Grow your business with the top
            student talents today.
          </h1>
          <br />
          <h3>Trusted by over 100 SMEs nationwide</h3>
          <div className="btn-container">
            <Link className="btn" to="/post-a-job">Get Started</Link>
          </div>
        </div>

        <div>
          <img className="responsive-img" src={search} alt="Landing Image" />
        </div>
      </div>
    </section>

    <section>
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
          From tech, to business, to arts- YOU will be exposed to various talents across a myriad of different domains!
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
    </section>


    <section>
      <h1 className="content-hiw-header">How It Works</h1>
      <div className="content-hiw">
        <img className="responsive-img-hiw" src={upload} />
        <p>1. Submit the job description and other details to us <Link to="/post-a-job">here</Link>.</p>
      </div>

      <div className="content-hiw">
        <img className="responsive-img-hiw" src={search_talent} />
        <p>2. We will start sourcing for student talents based on your submitted requirements.</p>
      </div>

      <div className="content-hiw">
        <img className="responsive-img-hiw" src={mail} />
        <p>3. Emails will be sent to you with interested students' resumes.</p>
      </div>
    </section>

  </Layout>
)


export default IndexPage