import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="NFL Week 17 Sheet" />
    <h1>NFL Week 17 Sheet</h1>
    <h3>Pot this week is $100</h3>
    {/* <p>Check back 30min before Sunday kickoff to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQKRCQwRVWu02-GmWgYScE3oSsdtxBnP_OqV-Fhp6CDSewdMMxc-tzkhd5eQeK1m8FGL0y_e8bvpMXW/pubhtml?gid=720873442&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
    ></iframe>
  </Layout>
)

export default SheetPage