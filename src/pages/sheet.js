import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="2021 NFL Week 1 Sheet" />
    <h1>2021 NFL Week 1 Sheet</h1>
    <h3>Pot this week is $250</h3>
    {/* <p>Check back 30min before the Thursday kickoff game to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQFfm-h-AZA7xh2NL-RtepT9oU6dxWnL4OsUD8eh81TKRq0HOtvpsz7yfkBsTFJf_UWAoJBbENTmeca/pubhtml?gid=63944394&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
    ></iframe>
  </Layout>
)

export default SheetPage