import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="2021 NFL Week 9 Sheet" />
    <h1>2021 NFL Week 9 Sheet</h1>
    <h3>Pot this week is $200 (+700)</h3>
    {/* <p>Check back 30min before the Thursday kickoff game to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRrhUPeplVBj82qAY5s5RNxB65mjuN5YRt16dGqTmXOQZyjnrXpJaudGVsmrjVRXdWpReFczzuBtlRX/pubhtml?gid=982142340&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
      title="2021 NFL Week 9 Sheet"
    ></iframe>
  </Layout>
)

export default SheetPage