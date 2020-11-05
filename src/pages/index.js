import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Row, Col, Card, Button } from "react-bootstrap"

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
          <h2>History Feed</h2>
          <Card>
            <Card.Header>NFL Week 8 Pool (Paid)</Card.Header>
            <Card.Body>
              <Card.Title>Winner: Salv</Card.Title>
              <Card.Text>Pot: $300</Card.Text>
              <Button variant="primary">
                <Link
                  className="text-white"
                  to="https://docs.google.com/spreadsheets/d/1kNwJ6b-WfKPS1wnP1o97llgA60UfPs9DjdZe5v-CPos/edit?usp=sharingx"
                  target="_blank"
                >
                  View Sheet
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Header>NFL Week 7 Pool (Paid)</Card.Header>
            <Card.Body>
              <Card.Title>Winner: Chingateputo</Card.Title>
              <Card.Text>Pot: $375</Card.Text>
              <Button variant="primary">
                <Link
                  className="text-white"
                  to="https://docs.google.com/spreadsheets/d/1OtdWCQ0TpN4WSoBtlXTvm0WM0gRvqNfcFpi3z85JxTE/edit?usp=sharing"
                  target="_blank"
                >
                  View Sheet
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Header>NFL Week 6 Pool (Paid)</Card.Header>
            <Card.Body>
              <Card.Title>Winner: Lou</Card.Title>
              <Card.Text>Pot: $500</Card.Text>
              <Button variant="primary">
                <Link
                  className="text-white"
                  to="https://docs.google.com/spreadsheets/d/1KEWIyiP00jqze7rFaeD70nohUB7o9eWEQ4k1HaHrNrU/edit?usp=sharing"
                  target="_blank"
                >
                  View Sheet
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
