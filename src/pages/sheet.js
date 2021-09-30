import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="2021 NFL Week 4 Sheet" />
    <h1>2021 NFL Week 4 Sheet</h1>
    <h3>Pot this week is $400 (+1500)</h3>
    {/* <p>Check back 30min before the Thursday kickoff game to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTcIO9VLhcd-wlnYH1hX_4QkofTDZCTVPznygO8o2l-RsBwanv-aWCqnFH-goBwIfxYcHclLukXsb1x/pubhtml?gid=1269930808&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
      title="2021 NFL Week 4 Sheet"
    ></iframe>
  </Layout>
)

export default SheetPage