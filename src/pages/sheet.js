import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="NFL Week 11 Sheet" />
    <h1>NFL Week 11 Sheet</h1>
    <h3>Pot this week is $200</h3>
    {/* <p>Check back 30min before TNF kickoff to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQCgZwJcq6EQ6fWtYkYfHkL2Sj8Yr1qJe9bF-XEd1rcIMlqvaMglGlAv8MaxIC-JkN6qg-BSaHHXjco/pubhtml?gid=509084813&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
    ></iframe>
  </Layout>
)

export default SheetPage
