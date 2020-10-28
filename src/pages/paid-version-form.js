import { Link } from "gatsby"
import React from "react"

import Layout from "../components/formLayout"
import SEO from "../components/seo"

import { Container, Row, Col } from "react-bootstrap"

const FormPage = () => (
  <Layout>
    <SEO title="NFL Week 8 Form" />
    <Container>
      <Row>
        <Col>
          <h1>Weekly Pool Paid Version</h1>
          <p>Buy in: $25</p>
          <p>Winner take all</p>
          <p>By submitting picks to this pool you agree to follow the rules laid out on <Link to="/rules">this page</Link></p>
          <p>Visit <Link to="/free-version-form">this page</Link> in order to join the free pool for a chance to win $100 in week 16!</p>
        </Col>
      </Row>
    </Container>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLScy-Y4ylsZOqFDKlc3p9sbxQIEyq4DneWF8J7y99Z4vWGLzJA/viewform?embedded=true"
      width="375"
      height="4203"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading…
    </iframe>
  </Layout>
)

export default FormPage
