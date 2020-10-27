import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="NFL Week 8 Sheet" />
    <h1>NFL Week 8 Sheet</h1>
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRzQnIAsNGQ9mVfdg3uS0zvSc2EumO40mlL1Yy8baDhekb79F1kfySkkxP_S5kfsmvYM-6fzkwPDPPk/pubhtml?gid=1782443214&amp;single=true&amp;widget=true&amp;headers=false"
      style={{ height: "480px" }}
    ></iframe>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SheetPage
