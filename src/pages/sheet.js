import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="2021 NFL Week 17 Sheet" />
    <h1>2021 NFL Week 17 Sheet</h1>
    <h3>Pot this week is $300 (+1100)</h3>
    <p>
      Starting the New Year off right with a $100 Bonus to the winner this week!
    </p>
    {/* <p>Check back 30min before the Thursday kickoff game to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT2WwKiUSTGV5vteikxuVvS7GGQ9rEa9hCSMHWdyJps8n0xGYEqzbu_1hl_B6Vu4lxJaJ33yJzWSbje/pubhtml?gid=1518078720&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
      title="2021 NFL Week 17 Sheet"
    ></iframe>
  </Layout>
)

export default SheetPage