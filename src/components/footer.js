import { Link } from "gatsby"
import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { BsFillHouseFill } from "react-icons/bs"
import { BsPencilSquare } from "react-icons/bs"
import { GrDocumentText } from "react-icons/gr"
import { FaFootballBall } from "react-icons/fa"

const Footer = () => (
  <footer className="fixed-bottom bg-white border-top border-dark py-2">
    <Container>
      <Row className="text-center">
        <Col>
          <Link to="/">
            <BsFillHouseFill />
          </Link>
        </Col>
        <Col>
          <Link to="/form">
            <BsPencilSquare />
          </Link>
        </Col>
        <Col>
          <Link to="/rules">
            <GrDocumentText />
          </Link>
        </Col>
        <Col>
          <Link to="/sheet">
            <FaFootballBall />
          </Link>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
