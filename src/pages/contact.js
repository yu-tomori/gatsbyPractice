import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Contact() {
    return (
        <Layout>
            <div style={{ color: `teal` }}>
                <Link to="/">Home</Link>
                <Header headerText="Contact" />
                <p>Send us a message!</p>
            </div>
        </Layout>
    )
}

// The Gatsby <Link /> component is for linking between pages within your site.
// For external links to pages not handled by your Gatsby site, use the regular HTML <a> tag.
