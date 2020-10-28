import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1></h1>
    <p>Welcome to iight bet</p>
    <p>This is the weekly NFL Pool. If you are joining the pool for the first time please visit <a href="/rules">the rules page</a>.</p>
    <p>The weekly pick 'ems pool form will be live the day before the first game of the week.</p>
    <p>Checkout the <a href="/history">history page</a> to see all past winners!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
    <Link to="/rules/">See the Rules</Link> <br />
    <Link to="/form/">Pool Form</Link> <br />
    <Link to="/sheet/">Weekly Sheet</Link> <br />
  </Layout>
)

export default IndexPage
