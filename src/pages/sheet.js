import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="2021 NFL Week 5 Sheet" />
    <h1>2021 NFL Week 5 Sheet</h1>
    {/* <h3>Pot this week is $400 (+1500)</h3> */}
    <p>Check back 30min before the Thursday kickoff game to see the sheet.</p>
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSb6GDEtgQ4ldfB_H3s5E9fY2aJkI_iaqwoGSnBE4sWNHkc4Rk2XluOrN7dhELKZ35CgSR3sBnoEifJ/pubhtml?gid=1698301608&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
      title="2021 NFL Week 5 Sheet"
    ></iframe>
  </Layout>
)

export default SheetPage