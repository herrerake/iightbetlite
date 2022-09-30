import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SheetPage = () => (
  <Layout>
    <SEO title="2022 Season NFL Week 4 Sheet" />
    <h1>2022 Season NFL Week 4 Sheet</h1>
    <h3>Pot this week is $250 (+900)</h3>
    {/* <p>Check back 30min before the Thursday kickoff game to see the sheet.</p> */}
    <iframe
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRHNaj1quBNQzHCiOCo0G4Ag2t6sNnIYZ9o-uh-oJkDWLU593PObQXprYJUVAk8O9s4wvDhgRJLqCVD/pubhtml?gid=1936741679&amp;single=true&amp;widget=true&amp;headers=false"
      height="525"
      width="340"
      title="2022 NFL Season Week 3"
    ></iframe>
  </Layout>
)

export default SheetPage
