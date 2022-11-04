import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="2022 Season NFL Week 9 Sheet" />
    <h1>2022 Season NFL Week 9 Sheet</h1>
    <h3>Pot this week is $125 (+400)</h3>
    {/* <p>Check back 30min before the Thursday kickoff game to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQuyNrdWYSvven919YUbMy9ERUriPPi9gpJLfUysjQDSiz5Vbk8qnYlT55mwNSWidcRy6Ceq96rdd4v/pubhtml?gid=747782028&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
      title="2022 NFL Season Week 8"
    ></iframe>
  </Layout>
)

export default SheetPage