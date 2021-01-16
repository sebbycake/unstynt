import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import search from "../../static/images/search.png"
import mail from "../../static/images/mail.png"
import search_talent from "../../static/images/search_talent.png"
import upload from "../../static/images/upload.png"
import choose from "../../static/images/choose.png"

const IndexPage = () => (
  <Layout>

    <section>
      <div className="outer-container">
        <div className="inner-container">
          <h1>
            Grow your business with the top student talents today.
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
        <h2 className="heading">Acquire the best talent.</h2>
        <div className="divider"></div>
        <p>
          We personally sieve out the best student talents from NUS for you. Remain calm as they passionately work on the project(s) you assign to them.
        </p>
      </div>
      <div className="content">
        <h2 className="heading">Diversify your talent pool.</h2>
        <div className="divider"></div>
        <p>
          By connecting you with the brightest talents across 16 faculties of NUS, you have the flexibility to choose how you wish to scale your business.
          From Tech, Business, to the Arts - you will be engaging with various talents across a myriad of domains!
        </p>
      </div>
      <div className="content">
        <h2 className="heading">Scale your business like never before.</h2>
        <div className="divider"></div>
        <p>
          Discover new opportunities that you never thought of. Conduct market research and extract new insights about your customers.
        </p>
      </div>
    </section>


    <section>
      <h1 className="content-hiw-header">How It Works</h1>

      <div className="content-hiw">
        <img className="responsive-img-hiw" src={upload} />
        <p>1. Submit the job description and all relevant details <Link to="/post-a-job">here</Link>.</p>
      </div>

      <div className="content-hiw">
        <img className="responsive-img-hiw" src={search_talent} />
        <p>2. We will source for student talents based on your requirements.</p>
      </div>

      <div className="content-hiw">
        <img className="responsive-img-hiw" src={mail} />
        <p>3. We will send you our shortlisted students' resumes and contact details.</p>
      </div>

      <div className="content-hiw">
        <img className="responsive-img-hiw" src={choose} />
        <p>4. Choose who you like and get started!</p>
      </div>
    </section>

    

  </Layout>
)


export default IndexPage