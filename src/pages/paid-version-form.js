import { Link } from "gatsby"
import React from "react"

import Layout from "../components/formLayout"
import SEO from "../components/seo"

import { Container, Row, Col } from "react-bootstrap"

const FormPage = () => (
  <Layout>
    <SEO title="NFL Divisional Round Form" />
    <Container>
      <Row>
        <Col>
          <h1>Weekly Pool Paid Version</h1>
          <p>Buy in: $25</p>
          <p>Winner take all</p>
          <p>
            By submitting picks to this pool you agree to follow the rules laid
            out on <Link to="/rules">this page</Link>
          </p>
          <p>
            IMPORTANT: When submitting your payment, please let the money holder
            know your nickname.
          </p>
        </Col>
      </Row>
    </Container>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSc_i65P_0w5NnZ_oc9zDh88jVL1_dvDGcyaG6GMN2vzLQbCBQ/viewform?embedded=true"
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