import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="2021 NFL Week 3 Sheet" />
    <h1>2021 NFL Week 3 Sheet</h1>
    <h3>Pot this week is $350 (+1300)</h3>
    {/* <p>Check back 30min before the Thursday kickoff game to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi2r8ZmTsbE0piH4qBaPiXS80zfzXqNZJ13Fy-zCCu4fWEeudFp75sg--Dk90ypUrqZA1zIwAzza8t/pubhtml?gid=1593073966&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
      title="2021 NFL Week 3 Sheet"
    ></iframe>
  </Layout>
)

export default SheetPage