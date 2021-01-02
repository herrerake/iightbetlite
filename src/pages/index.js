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
            <Card.Header>NFL Week 16 Pool (Paid)</Card.Header>
            <Card.Body>
              <Card.Title>Winner: Will</Card.Title>
              <Card.Text>Pot: $100</Card.Text>
              <Button variant="primary">
                <Link
                  className="text-white"
                  to="https://docs.google.com/spreadsheets/d/1SL8baVDYJs8syFGi9YfVBN290a5jlbiLsa2_Fj-lrbQ/edit?usp=sharing"
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
            <Card.Header>NFL Week 15 Pool (Paid)</Card.Header>
            <Card.Body>
              <Card.Title>Winner: Sel</Card.Title>
              <Card.Text>Pot: $100</Card.Text>
              <Button variant="primary">
                <Link
                  className="text-white"
                  to="https://docs.google.com/spreadsheets/d/1XXTsrdgnQ2O3dWhcv1wEx3aLUbdbt3enWuJOPyh98dA/edit?usp=sharing"
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
            <Card.Header>NFL Week 14 Pool (Paid)</Card.Header>
            <Card.Body>
              <Card.Title>Winner: Primo</Card.Title>
              <Card.Text>Pot: $150</Card.Text>
              <Button variant="primary">
                <Link
                  className="text-white"
                  to="https://docs.google.com/spreadsheets/d/1VCFIP-_X_0JxUhZt6X7KLkpZesreYGhQzQHKuVQKiwk/edit?usp=sharing"
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
            <Card.Header>NFL Week 13 Pool (Paid)</Card.Header>
            <Card.Body>
              <Card.Title>Winner: Lachino</Card.Title>
              <Card.Text>Pot: $250</Card.Text>
              <Button variant="primary">
                <Link
                  className="text-white"
                  to="https://docs.google.com/spreadsheets/d/1UYttKDXN7Dk13yii5lvGEi3Kbq9hXPObAOOpeKBzyhc/edit?usp=sharing"
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
            <Card.Header>NFL Week 11 Pool (Paid)</Card.Header>
            <Card.Body>
              <Card.Title>Winner: Split Salv & Primo</Card.Title>
              <Card.Text>Pot: $200</Card.Text>
              <Button variant="primary">
                <Link
                  className="text-white"
                  to="https://docs.google.com/spreadsheets/d/1OQnwPNnJPJhSrw-oV8mkgUVY3vgv7lvzPVFUwYR5xmw/edit?usp=sharing"
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
            <Card.Header>NFL Week 10 Pool (Paid)</Card.Header>
            <Card.Body>
              <Card.Title>Winner: Primo</Card.Title>
              <Card.Text>Pot: $325</Card.Text>
              <Button variant="primary">
                <Link
                  className="text-white"
                  to="https://docs.google.com/spreadsheets/d/1A7_D5jbFqF76MMeyPXX4lJF7K7petWDvsaH378ycMAI/edit?usp=sharing"
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
            <Card.Header>NFL Week 9 Pool (Paid)</Card.Header>
            <Card.Body>
              <Card.Title>Winner: Primo</Card.Title>
              <Card.Text>Pot: $350</Card.Text>
              <Button variant="primary">
                <Link
                  className="text-white"
                  to="https://docs.google.com/spreadsheets/d/1n0dmtNZCP9J9FVaFonTE0GRwQ5Cm73bLMPqLgAYB5Gk/edit?usp=sharing"
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
