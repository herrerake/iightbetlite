import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="NFL Divisional Round Sheet" />
    <h1>NFL Divisional Round Sheet</h1>
    <h3>Pot this week is $275</h3>
    {/* <p>Check back 30min before the first Saturday kickoff to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSHSW8-b6Ekuwuv1TYzYvVF58rfMYT8VaPJYswOqIfiYViNKhqjQy_zYAGZaaOFETLvfesM2Y_ZEfAF/pubhtml?gid=77793139&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
    ></iframe>
  </Layout>
)

export default SheetPage