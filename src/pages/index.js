import React from "react"
import { Link } from "gatsby"
import JSONHistory from "../../content/Pool-Winners-Data.json"
import JSONLeaderboard from "../../content/Leaderboard-Data.json"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap"

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
      <Row>
        <Col>
          <h2>Top Earners</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Player</th>
                <th>Earnings</th>
                <th className="text-align-center">Wins</th>
              </tr>
            </thead>
            <tbody>
              {JSONLeaderboard.map((player, index) => {
                return (
                  <tr key={player.uuid}>
                    <td className="text-align-center">{index + 1}</td>
                    <td>{player.username}</td>
                    <td className="text-align-center">${player.earnings}</td>
                    <td className="text-align-center">{player.wins}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>History</h2>
        </Col>
      </Row>
      {JSONHistory.map((card, index) => {
        console.log(index)
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
                            <span key={name + index}>
                              {index === 0 ? `${name}` : ` & ${name}`}
                            </span>
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
