import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import TopEarners from "../components/topEarners"
import HistoryFeed from "../components/historyFeed"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Row>
        <Col>
          <p>
            This is the weekly NFL Pool. If you are joining the pool for the
            first time please visit <Link to="/rules">the rules page</Link>.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Leaderboard</h1>
        </Col>
      </Row>
      <TopEarners />
      <HistoryFeed />
    </Container>
  </Layout>
)

export default IndexPage
