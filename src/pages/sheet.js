import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="2021 NFL Week 11 Sheet" />
    <h1>2021 NFL Week 11 Sheet</h1>
    <h3>Pot this week is $250 (+900)</h3>
    {/* <p>Check back 30min before the Thursday kickoff game to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSeOVVzqWTRvVB38yonCBxSlvzDbtg6-xVpZQ6fNTz3wgL2osRXLrJjcqlVOIr648gE6dBLviO894E8/pubhtml?gid=243043027&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
      title="2021 NFL Week 11 Sheet"
    ></iframe>
  </Layout>
)

export default SheetPage