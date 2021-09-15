import { Link } from "gatsby"
import React from "react"

import Layout from "../components/formLayout"
import SEO from "../components/seo"

import { Container, Row, Col } from "react-bootstrap"

const FormPage = () => (
  <Layout>
    <SEO title="NFL Week 2 Form" />
    <Container>
      <Row>
        <Col>
          <h1>Weekly Pool</h1>
          <p>Winner take all</p>
          <p>Picks are due by Thursday @ 7pm EST</p>
          <p>
            By submitting picks to this pool you agree to follow the rules laid
            out on <Link to="/rules">this page</Link>
          </p>
          <p>
            IMPORTANT: When submitting your payment, please let the money holder
            know your nickname.
          </p>
          <p>
            NOTE: 5% Admin fee will be subtracted from winners earnings
          </p>
        </Col>
      </Row>
    </Container>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLScm9u9kRxrLOjHS4PnnratMKJPfVHNqqlLBuHA9SK7FVmPemg/viewform?embedded=true"
      title="Pick 'Ems Form"
      width="375"
      height="4190"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading…
    </iframe>
  </Layout>
)

export default FormPage