import { Link } from "gatsby"
import React from "react"
import Layout from "../components/formLayout"
import SEO from "../components/seo"

import { Container, Row, Col } from "react-bootstrap"

const FormPage = () => (
  <Layout>
    <SEO title="2022 NFL Season Week 16 Form" />
    <Container>
      <Row>
        <Col>
          <h1>Weekly Pool</h1>
          <p>Winner take all</p>
          <p>Picks are due by Thursday @ 7PM EST</p>
          {/* <p>***Thanksgiving Week*** Picks are due by Thursday @ 11am EST</p> */}
          <p>
            By submitting picks to this pool you agree to follow the rules laid
            out on <Link to="/rules">this page</Link>
          </p>
          <p>
            IMPORTANT: When submitting your entry, please let the money holder
            know your nickname.
          </p>
        </Col>
      </Row>
    </Container>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLScSKYP0ZBiU1rKcr2bzdvWy6SzEmDhTnDGo04W8oXwn0Hhj1w/viewform?embedded=true"
      title="Pick 'Ems Form"
      width="375"
      height="4190"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
    >
      Loading…
    </iframe>
  </Layout>
)

export default FormPage
