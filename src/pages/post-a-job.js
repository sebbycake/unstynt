import React from "react"
import Layout from "../components/layout";

const JobForm = () => (
    <Layout>
        <div className="form-container">
            <form name="job-listing" data-netlify="true">
                <h2>Company's Profile</h2>
                <label for="company_name">Name of Company</label>
                <input type="text" id="company_name" name="company_name" placeholder="e.g. Mr. Coconut" required />

                <label for="company_profile">Profile of Company</label>
                <textarea id="company_profile" name="company_profile" placeholder="e.g. F&B" rows="4" cols="70" required></textarea>

                <h2>Contact Details</h2>
                <label for="contact_person">Contact Person</label>
                <input type="text" id="contact_person" name="contact_person" placeholder="e.g. Simon" required />

                <label for="contact_number">Contact Number (optional) </label>
                <input type="text" id="job_title" name="job_title" placeholder="e.g. 98765432" />

                <label for="biz_email_address">Business Email Address</label>
                <input type="email" id="email" name="email" placeholder="e.g. enquiries@mrcoconut.com" required />

                <h2>Job Details</h2>
                <label for="job_title">Job Title</label>
                <input type="text" id="job_title" name="job_title" placeholder="e.g. Web Designer" required />

                <label for="job_desc">Job Description</label>
                <textarea name="job_desc" placeholder="e.g. Improve website's design. Please be as specific as possible." rows="10" cols="70" required></textarea>

                <label for="num_students">Number of Student(s)</label>
                <input type="number" id="num_students" name="num_students" min="1" placeholder="e.g. 1" required />

                <label for="period">Period</label>
                <select id="period" name="period" required>
                    <option value="three_months">3 months</option>
                    <option value="six_months">6 months</option>
                    <option value="flexible">Flexible</option>
                </select>

                <input type="checkbox" id="terms" name="terms" value="terms" required />
                <label for="terms"> I have read and agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy
                    Policy</a>.</label><br /><br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    </Layout>
)

export default JobForm