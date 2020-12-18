import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="NFL Week 15 Sheet" />
    <h1>NFL Week 15 Sheet</h1>
    <h3>Pot this week is $275</h3>
    {/* <p>Check back 30min before TNF kickoff to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRaJy0ekH-m4Sud6JCyA6IaeBMyO3ZsS_CLxB9aaRltjkefN619zN691gKOWBAn_1ygvRbwudgc73TS/pubhtml?gid=592686307&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
    ></iframe>
  </Layout>
)

export default SheetPage
