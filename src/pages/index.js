import React from "react"
import { Link } from "gatsby"
import JSONHistory from "../../content/Pool-Winners-Data.json"
import Layout from "../components/layout"
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
          <h1>History</h1>
        </Col>
      </Row>
      {JSONHistory.map((card, index) => {
        return (
          <Row className={index !== 0 ? "mt-5" : ""} key={card.uuid}>
            <Col>
              <Card>
                <Card.Header>
                  {card.season} NFL Week {card.week} Pool (Paid)
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    {card.isTie
                      ? card.winner.map((name, index) => {
                          return (
                            <span>{index === 0 ? `${name}` : ` & ${name}`}</span>
                          )
                        })
                      : card.winner}
                  </Card.Title>
                  <Card.Text>Pot: ${card.amount}</Card.Text>
                  <Button variant="primary">
                    <a
                      className="text-white"
                      href={card.link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      View Sheet
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )
      })}
    </Container>
  </Layout>
)

export default IndexPage
