import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="2022 Season NFL Week 11 Sheet" />
    <h1>2022 Season NFL Week 11 Sheet</h1>
    <h3>Pot this week is $125 (+400)</h3>
    {/* <p>Check back 30min before the Thursday kickoff game to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTs9UqF-HUW1LloWD7sVO3tA6jw8KKn0mAWr3p1GLYNAZEu4RN8Zs9srekl4sT19meuZexckeoWul4M/pubhtml?widget=true&amp;headers=false"
      height="525"
      width="340"
      title="2022 NFL Season Week 11"
    ></iframe>
  </Layout>
)

export default SheetPage
