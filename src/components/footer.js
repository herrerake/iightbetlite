import { Link } from "gatsby"
import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import { BsFillHouseFill, BsPencilSquare, BsFileText } from "react-icons/bs"
import { FaFootballBall } from "react-icons/fa"


const Footer = () => (
  <footer className="fixed-bottom bg-white border-dark py-3">
    <Container>
      <Row className="text-center">
        <Col>
          <Link
            to="/"
            className={
              document.location.pathname === "/" ? "has-text-iightbet-blue" : "has-text-iightbet-gray"
            }
          >
            <BsFillHouseFill size={25} />
          </Link>
        </Col>
        <Col>
          <Link
            to="/paid-version-form"
            className={
              document.location.pathname === "/paid-version-form"
                ? "has-text-iightbet-blue"
                : "has-text-iightbet-gray"
            }
          >
            <BsPencilSquare size={25} />
          </Link>
        </Col>
        <Col>
          <Link
            to="/sheet"
            className={
              document.location.pathname === "/sheet"
                ? "has-text-iightbet-blue"
                : "has-text-iightbet-gray"
            }
          >
            <FaFootballBall size={25} />
          </Link>
        </Col>
        <Col>
          <Link
            to="/rules"
            className={
              document.location.pathname === "/rules"
                ? "has-text-iightbet-blue"
                : "has-text-iightbet-gray"
            }
          >
            <BsFileText size={25} />
          </Link>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
