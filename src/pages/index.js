import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import search from "../../static/images/search.png"
import mail from "../../static/images/mail.png"
import search_talent from "../../static/images/search_talent.png"
import upload from "../../static/images/upload.png"
import choose from "../../static/images/choose.png"


const IndexPage = () => (
  <Layout>

    <Helmet>
      <meta charSet="utf-8" />
      <title>unStynt - Connecting SMEs and students seamlessly</title>
    </Helmet>

    <section>
      <div className="outer-container">
        <div className="inner-container">
          <h1>
            Grow your business with the top student talents today.
          </h1>
          <br />
          <h3>Connecting SMEs and students seamlessly</h3>
          <div className="btn-container">
            <Link className="btn" to="/get-in-touch">Get Started</Link>
          </div>
        </div>

        <div>
          <img className="responsive-img" src={search} alt="Landing Image" />
        </div>
      </div>
    </section>

    <section>
      <div className="content">
        <h2 className="heading">Acquire the best talents for you.</h2>
        <div className="divider"></div>
        <p>
          We personally connect you to the best student talents across 16 different faculties of NUS. 
          Remain calm as they passionately work on the project(s) you assign to them!
        </p>
      </div>
      <div className="content">
        <h2 className="heading">Get the job done within hours.</h2>
        <div className="divider"></div>
        <p>
          48 hours - that's all we need to match you with right candidates based on your needs.
          Our extensive and diversified network in NUS will guarantee fast turnaround time.
        </p>
      </div>
      <div className="content">
        <h2 className="heading">Scale your business like never before.</h2>
        <div className="divider"></div>
        <p>
          Discover new opportunities as we connect you to
          creative individuals with fresh and novel perspectives to your business problems.
          
        </p>
      </div>
    </section>


    <section>
      <h1 className="content-hiw-header">How It Works</h1>

      <div className="content-hiw">
        <img className="responsive-img-hiw" src={upload} />
        <p>1. Submit the job description and all relevant details.</p>
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