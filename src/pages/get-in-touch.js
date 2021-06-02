import React from "react"
import Layout from "../components/layout";
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const GetInTouchForm = () => (
    <Layout>

        <Helmet>
            <meta charSet="utf-8" />
            <title>Get In Touch | unStynt</title>
        </Helmet>

        <div className="form-container">
            <h1 className="text-center">Get In Touch!</h1>
            <form name="get-in-touch" method="post" data-netlify="true" netlify-honeypot="bot-field" onSubmit="submit">

                <input type="hidden" name="form-name" value="get-in-touch"></input>

                <div className="hidden">
                    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                </div>

                <div>
                    <label htmlFor="name">First Name
                        <input id="name" type="text" name="name" required />
                    </label>
                </div>

                <div>
                    <label htmlFor="company_name">Company's Name
                        <input id="company_name" type="text" name="company_name" required />
                    </label>
                </div>

                <div>
                    <label htmlFor="email">Email 
                        <input id="email" type="email" name="email" required />
                    </label>
                </div>

                <div>
                    <label htmlFor="contact_number">Contact Number
                        <input id="contact_number" type="text" name="contact_number" required />
                    </label>
                </div>

                <div>
                    <label htmlFor="message">Message 
                        <textarea name="message" rows="10" cols="70" required></textarea>
                    </label>
                </div>

                <p>By submitting this application, you are agreeing to the site's <Link to="/privacy-policy">Privacy Policy</Link></p>
                <br/>

                <button className="submit-btn" type="submit">Send Message</button>
            </form>
        </div>


    </Layout >
)

export default GetInTouchForm