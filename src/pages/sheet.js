import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="2021 NFL Week 2 Sheet" />
    <h1>2021 NFL Week 2 Sheet</h1>
    <h3>Pot this week is $475</h3>
    {/* <p>Check back 30min before the Thursday kickoff game to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSJFUHJ22sth1anEnpRv9b67TMv94J-u4C_M9Mpe8pTetia66BvcRuQNQk2xnoBajOKxxXTqQBlnwqS/pubhtml?gid=1047598295&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
    ></iframe>
  </Layout>
)

export default SheetPage