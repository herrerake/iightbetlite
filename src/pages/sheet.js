import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="2021 NFL Week 16 Sheet" />
    <h1>2021 NFL Week 16 Sheet</h1>
    <h3>Pot this week is $250 (+900)</h3>
    <p>$50 Christmas Bonus to the winner this week!</p>
    {/* <p>Check back 30min before the Thursday kickoff game to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT350uKjYWqTjuiyqHdYR9LkQmskVAnXki7GdiU2jOx_XXbhAJB3k4hN4r3T2LSK7rC-wzmrXkdoP5o/pubhtml?gid=639696967&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
      title="2021 NFL Week 16 Sheet"
    ></iframe>
  </Layout>
)

export default SheetPage
