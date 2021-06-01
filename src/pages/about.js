import React from "react";
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

const AboutPage = () => (
    <Layout>

        <Helmet>
            <meta charSet="utf-8" />
            <title>About Us | unStynt</title>
        </Helmet>

        <h4 className="about-sub-heading text-center"><strong>Founded in 2021</strong></h4>
        <h1 className="about-heading text-center">Accelerating growth in SMEs by tapping on student talents</h1>

        <div class="about-content">
            <h1 className="text-center">Who We Are</h1>
            <p>
                We are a group of students from NUS who stay in the same residential college.
                In this residency, we realized that despite us coming from different disciplines,
                all of us love to solve real-world problems. With this similar mindset,
                we have been constantly working together on various projects, hackathons, and competitions.
                Feel free to reach out to us to have a chat!
            </p>
        </div>

        <div class="about-content">
            <h1 className="text-center">What Drives Us</h1>
            <p>
                As students from NUS ourselves, we are on the constant look-out for opportunities to
                better ourselves and work on real-world projects. While looking, we realized that
                there is no proper medium to look for such work as most of them cater to full-time internships or jobs.
                We also realized that many businesses do not know what skillsets a student can bring to the table,
                which would really push their business to the next level. Therefore, we decided to embark on this
                venture to connect students with established businesses and get them the working experience they need,
                and at the same time, help such businesses scale in ways never imagined.
            </p>
        </div>

    </Layout>
)

export default AboutPage