import React from "react"
import JSONLeaderboard from "../../content/Leaderboard-Data.json"
import { Row, Col, Table } from "react-bootstrap"

const TopEarners = () => {
  return (
    <>
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
                <th className="text-align-center">Player</th>
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
                    <td>${player.earnings}</td>
                    <td className="text-align-center">{player.wins}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  )
}

export default TopEarners
