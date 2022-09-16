import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="2022 Season NFL Week 2 Sheet" />
    <h1>2022 Season NFL Week 2 Sheet</h1>
    <h3>Pot this week is $300 (+1100)</h3>
    {/* <p>Check back 30min before the Thursday kickoff game to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS8sdlYu2jif6aYftp09SrynaYIY3zjINOESiGVQQGcPRLia5VuXp3LXhmvnDlJHYcv1BwxsUwAD9X4/pubhtml?gid=665732670&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
      title="2022 NFL Season Week 2"
    ></iframe>
  </Layout>
)

export default SheetPage