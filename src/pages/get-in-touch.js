import React from "react"
import Layout from "../components/layout";
import { Helmet } from "react-helmet"

const GetInTouchForm = () => (
    <Layout>

        <Helmet>
            <meta charSet="utf-8" />
            <title>Get In Touch | unStynt</title>
        </Helmet>

        <div className="form-container">
            <form name="get-in-touch" method="post" data-netlify="true" data-netlify-recaptcha="true" onSubmit="submit">

                <input type="hidden" name="form-name" value="get-in-touch"></input>

                <div>
                    <label htmlFor="name">Name <br />
                        <input id="name" type="text" name="name" required />
                    </label>
                </div>

                <div>
                    <label htmlFor="email">Email <br />
                        <input id="email" type="email" name="email" required />
                    </label>
                </div>

                <div>
                    <label htmlFor="message">Message <br />
                        <textarea name="message" rows="10" cols="70" required></textarea>
                    </label>
                </div>

                <div data-netlify-recaptcha="true"></div>

                <button className="submit-btn" type="submit">Send Message</button>
            </form>
        </div>


    </Layout >
)

export default GetInTouchForm