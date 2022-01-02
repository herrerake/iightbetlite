import { Link } from "gatsby"
import React from "react"

import Layout from "../components/formLayout"
import SEO from "../components/seo"

import { Container, Row, Col } from "react-bootstrap"

const FormPage = () => (
  <Layout>
    <SEO title="NFL Week 16 Form" />
    <Container>
      <Row>
        <Col>
          <h1>Weekly Pool</h1>
          <p>Winner take all</p>
          <p>Picks are due by Sunday @ Noon EST</p>
          <p>
            Starting the New Year off right with a $100 Bonus to the winner this
            week!
          </p>
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
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT2WwKiUSTGV5vteikxuVvS7GGQ9rEa9hCSMHWdyJps8n0xGYEqzbu_1hl_B6Vu4lxJaJ33yJzWSbje/pubhtml?gid=1518078720&amp;single=true&amp;widget=true&amp;headers=false"
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
