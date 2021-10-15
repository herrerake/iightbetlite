import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="2021 NFL Week 6 Sheet" />
    <h1>2021 NFL Week 6 Sheet</h1>
    <h3>Pot this week is $475 (+1800)</h3>
    {/* <p>Check back 30min before the Thursday kickoff game to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTnv7uSLaDs-GciO2gwSkJVG7bqDUiDkA8erKyfaX60niPicb1_174aQwBL-5tGVT5VNoK_Ui3kPZ9e/pubhtml?gid=1336089291&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
      title="2021 NFL Week 6 Sheet"
    ></iframe>
  </Layout>
)

export default SheetPage