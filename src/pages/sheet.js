import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="NFL Wild Card Sheet" />
    <h1>NFL Wild Card Sheet</h1>
    <h3>Pot this week is $225</h3>
    {/* <p>Check back 30min before the first Saturday kickoff to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSSIMMd5ZCeSqt3NMiq0f_sggHwvw8LG8rS2g4DiTcfm9TV834_mAVTggFgTWnOUnRETFdE2WsgCXfH/pubhtml?gid=2125143015&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
    ></iframe>
  </Layout>
)

export default SheetPage