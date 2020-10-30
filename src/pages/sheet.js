import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="NFL Week 8 Sheet" />
    <h1>NFL Week 8 Sheet</h1>
    <h3>Pot this week is $325</h3>
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRzQnIAsNGQ9mVfdg3uS0zvSc2EumO40mlL1Yy8baDhekb79F1kfySkkxP_S5kfsmvYM-6fzkwPDPPk/pubhtml?gid=1782443214&amp;single=true&amp;widget=true&amp;headers=false"
      height="500"
      width="340"
    ></iframe>
  </Layout>
)

export default SheetPage
