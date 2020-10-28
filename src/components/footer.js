import { Link } from "gatsby"
import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import { BsFillHouseFill, BsPencilSquare } from "react-icons/bs"
import { GrDocumentText } from "react-icons/gr"
import { FaFootballBall } from "react-icons/fa"

const Footer = () => (
  <footer className="fixed-bottom bg-white border-top border-dark py-2">
    <Container>
      <Row className="text-center">
        <Col>
          <Link to="/">
            <BsFillHouseFill size={25}/>
          </Link>
        </Col>
        <Col>
          <Link to="/paid-version-form">
            <BsPencilSquare size={25}/>
          </Link>
        </Col>
        <Col>
          <Link to="/sheet">
            <FaFootballBall size={25}/>
          </Link>
        </Col>
        <Col>
          <Link to="/free-version-form">
            <BsPencilSquare size={25}/>
          </Link>
        </Col>
        <Col>
          <Link to="/rules">
            <GrDocumentText size={25}/>
          </Link>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
