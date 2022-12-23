import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="2022 Season NFL Week 16 Sheet" />
    <h1>2022 Season NFL Week 16 Sheet</h1>
    <h3>Pot this week is $75 (+200)</h3>
    {/* <p>Check back 30min before the Thursday kickoff game to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS0JJs52WxLIi_rHBcX8J7KAAuEvlwhh11EqXHu9DoL3xD3xit5cu-5wmCdtdEpcyb_OmTgJ8oXNxDr/pubhtml?gid=1154618766&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
      title="2022 NFL Season Week 16"
    ></iframe>
  </Layout>
)

export default SheetPage
