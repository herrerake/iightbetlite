import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="NFL Week 12 Sheet" />
    <h1>NFL Week 12 Sheet</h1>
    <h3>Pot this week is $250</h3>
    {/* <p>Check back 30min before TNF kickoff to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQAyIXsNx4jmUOmYRpdxXZxSomf1aYobTpaPAVker_UAnl7N7NmEi-I2wbuEdQhZNKiMwRs8RbT4lbt/pubhtml?gid=147846881&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
    ></iframe>
  </Layout>
)

export default SheetPage
