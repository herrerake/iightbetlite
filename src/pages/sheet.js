import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="2021 NFL Week 18 Sheet" />
    <h1>2021 NFL Week 18 Sheet</h1>
    <h3>Pot this week is $175 (+800)</h3>
    {/* <p>Check back 30min before the Thursday kickoff game to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRd2tVhOdTq92g-RZGIKVgcdcx8ASXye0QSTfY-bi0mcGeKTxJr-gBA3s7iZzl6vZkxBzyCsccjAQss/pubhtml?gid=1060589350&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
      title="2021 NFL Week 18 Sheet"
    ></iframe>
  </Layout>
)

export default SheetPage