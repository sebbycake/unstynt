import React from "react"
import Layout from "../components/layout";

const JobForm = () => (
    <Layout>
        <div className="form-container">
            <form action="">
                <h2>Company's Profile</h2>
                <label for="fname">Name of Company</label>
                <input type="text" id="company_name" name="company_name" placeholder="e.g. Mr. Coconut" required />

                <label for="fname">Profile of Company</label>
                <input type="text" id="company_name" name="company_name" placeholder="e.g. F&B" required />

                <h2>Contact Details</h2>
                <label for="fname">Contact Person</label>
                <input type="text" id="contact_person" name="contact_person" placeholder="e.g. Simon" required />

                <label for="fname">Contact Number (optional) </label>
                <input type="text" id="job_title" name="job_title" placeholder="e.g. 98765432" />

                <label for="lname">Business Email Address</label>
                <input type="email" id="email" name="email" placeholder="e.g. enquiries@mrcoconut.com" required />

                <h2>Job Details</h2>
                <label for="fname">Job Title</label>
                <input type="text" id="job_title" name="job_title" placeholder="e.g. Web Designer" required />

                <label for="fname">Job Description</label>
                <input type="text" id="job_desc" name="job_desc" placeholder="e.g. Improve website's design" required />

                <label for="lname">Number of Student(s)</label>
                <input type="number" id="num_students" name="num_students" min="1" placeholder="e.g. 1" required />

                <label for="period">Period</label>
                <select id="period" name="period" required>
                    <option value="three_months">3 months</option>
                    <option value="six_months">6 months</option>
                    <option value="flexible">Flexible</option>
                </select>

                <input type="checkbox" id="terms" name="terms" value="terms" required />
                <label for="terms">I have read and agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy
                    Policy</a>.</label><br /><br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    </Layout>
)

export default JobForm