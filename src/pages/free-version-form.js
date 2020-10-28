import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/formLayout"
import SEO from "../components/seo"

const FormPage = () => (
  <Layout>
    <SEO title="NFL Week 8 Form" />
    <Container>
      <Row>
        <Col>
          <h1>Weekly Pool Free Version</h1>
          <p>
            Beginning week 8 players will compete week by week pool through week
            16 to find out who really knows football. This is a cumulative 8
            week competition where the winner will be decided by the lowest
            total number of losses. Week 16 a winner will be declared and win
            $100. In this case of a draw, those players will compete in week 17
            winner take all. This competition is free to join but in order to
            win you MUST follow all the rules and conditions.{" "}
          </p>
          <h3>Rules:</h3>
          <ul>
            <li>
              In order to qualify you MUST play on all 8 weeks. If you miss the
              deadline to submit your picks for one single week you will be
              disqualified.
            </li>
            <li>
              You must use the same player name and email address in all 8
              weeks.
            </li>
            <li>
              You must submit one piece of feedback regarding your experience
              using this website sby the end of eight weeks.
            </li>
          </ul>
          <p>
            If you have any questions please reach out to me via instagram
            @herrerakee or{" "}
            <a href="mailto:herrerake90@gmail.com"> herrerake90@gmail.com</a>
          </p>
          <h3>GOOD LUCK!</h3>
        </Col>
      </Row>
    </Container>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSeWHCPSHvBbY72deWSiGdIAajnPKV9XRzDeJ8aRnrgMoH9U3g/viewform?embedded=true"
      width="375"
      height="4170"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading…
    </iframe>
  </Layout>
)

export default FormPage
