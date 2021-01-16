import React from "react"
import Layout from "../components/layout"

const ContactPage = () => (
    <Layout>
        <div className="contact-content">
            <h1 className="contact-heading text-center">Contact Us</h1>
            <p className="text-center">Don't hesitate to connect with us if you have any questions about unStynt.</p>
            <h5>Email Us</h5>
            <a href="mailto:support.unstynt@gmail.com">support.unstynt@gmail.com</a>
        </div>
    </Layout>
)

export default ContactPage