import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="2021 Season NFL Wild Card Sheet" />
    <h1>2021 Season NFL Wild Card Sheet</h1>
    <h3>Pot this week is $250 (+900)</h3>
    {/* <p>Check back 30min before the Saturday kickoff game to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRAZPtoFtKO6mcdb7DJB8U6FBZX6JubF42zqP_zlW22Jux4fsNEmGMsraP_SDtUxQk94-TDgqGdJ8ED/pubhtml?gid=2039376387&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
      title="2021 NFL Wild Card Sheet"
    ></iframe>
  </Layout>
)

export default SheetPage