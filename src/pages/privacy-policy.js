import React from "react";
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

const PrivacyPolicy = () => (
    <Layout>

        <Helmet>
            <meta charSet="utf-8" />
            <title>Privacy Policy | unStynt</title>
        </Helmet>

        <div className="content">
        <h1>Privacy Policy</h1>
        <p>unStynt  takes your privacy
        seriously and we care about how your personal
        data is collected, used and shared.
        Please read this Privacy Policy to understand how we may collect, use and disclose your personal
        data in the course of our normal business operations.
        </p>
        <p>
            <h2>Consent</h2>
            By providing personal data to us, you hereby acknowledge that
            you have read this Privacy Policy and that you consent to the collection,
            use and disclosure of your personal data by us in accordance with this Privacy Policy.
            If you do not consent to the terms of this Privacy Policy, please do not
            provide your personal data to us.
        </p>
        <p>
            <h2>What personal data we collect</h2>
            ‍
            The types of personal data we may collect include:

            - your name;
            - the name of your company;
            - your email address;
            - your phone number;
            - any personal message you may include in your message to us.
            ‍
            As you interact with our website, we may automatically collect technical data about your equipment, browsing actions.
            We collect this personal data by using cookies, server logs, and other similar technologies.
            We may also receive Technical Data about you if you visit other websites employing our cookies.
        </p>
        <p>
            <h2>How we use this personal data</h2>
            Personal data collected by us may be used for the following purposes:
            ‍
            - to contact you at a later date to recommend eligible students for your job;
            - to inform you of updates and developments to our products or services, which may be of interest to you;
            - to conduct marketing research and statistical analysis;
            - to update and back-up our records;
            - to conduct general management and reporting;
            - to conduct internal administrative activities, research, analytics, planning and project development;
            - to comply with law, the requests of law enforcement and regulatory officials, or orders of court;
            - to enforce our legal rights and remedies; or
            - for such other purposes notified to you on or before collection or use of the data.
        </p>
        <p>
            <h2>How we store and retain your personal data</h2>
            We are committed to ensuring your personal data is kept secure and 
            confidential and personal data provided by you will be retained for as long as the 
            purpose for which the data was collected continues. When retention of your personal data 
            is no longer necessary, it will be destroyed, deleted or the means by which the data can be 
            associated with you will be removed unless its retention is required to satisfy legal, regulatory, 
            accounting or other business requirements or to protect our interests.
        </p>
    </div>
    </Layout>
)

export default PrivacyPolicy