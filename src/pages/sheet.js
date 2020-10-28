import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="NFL Week 8 Sheet" />
    <h1>NFL Week 8 Sheet</h1>
    <p>Check back later for the sheet.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SheetPage
