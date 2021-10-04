import React from "react"
import JSONHistory from "../../content/Pool-Winners-Data.json"
import { Row, Col, Card, Button } from "react-bootstrap"

const HistoryFeed = () => {
  return (
    <>
      <Row>
        <Col>
          <h2>History</h2>
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
    </>
  )
}

export default HistoryFeed
