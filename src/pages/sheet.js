import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="NFL Week 16 Sheet" />
    <h1>NFL Week 16 Sheet</h1>
    <h3>Pot this week is $100</h3>
    {/* <p>Check back 30min before Christmas Day kickoff to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS7iHpUgee0QviCs5uHmutpRIveQ2BHlQvMPWxh81WWhfmhkqHSS1VsSG9tnIBqveMnYVEc-fdzIaZg/pubhtml?gid=1553934676&single=true"
      height="525"
      width="340"
    ></iframe>
  </Layout>
)

export default SheetPage

