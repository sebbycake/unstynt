import React from "react"
import Layout from "../components/layout";

const GetInTouchForm = () => (
    <Layout>
        <div className="form-container">
            <form name="job-listing" method="POST" data-netlify-recaptcha="true" data-netlify="true">

                <h2>Company's Profile</h2>
                <label for="company_name">Name of Company</label>
                <input type="text" id="company_name" name="company_name" placeholder="e.g. Mr. Coconut" required />

                <h2>Contact Details</h2>
                <label for="contact_person">Contact Person</label>
                <input type="text" id="contact_person" name="contact_person" placeholder="e.g. Simon" required />

                <label for="contact_number">Contact Number</label>
                <input type="text" id="job_title" name="job_title" placeholder="e.g. 98765432" required/>


                <input type="checkbox" id="terms" name="terms" value="terms" required />
                <label for="terms"> I have read and agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy
                    Policy</a>.</label><br /><br />
                <div data-netlify-recaptcha="true"></div>
                <input type="submit" name="submit" value="Submit" />

            </form>
        </div>
    </Layout>
)

export default GetInTouchForm