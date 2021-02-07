import Head from 'next/head'
import Link from 'next/link'

import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import MediaQuery from 'react-responsive'

export const siteTitle = 'Theater am Campus'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Theater am Campus der Universität Bayreuth"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>

      {/* desktop */}
      <MediaQuery minWidth={992}>
        <Container as="nav" className="desktop-container">
          <Row className="mt-3">
            <Col lg={9}>
              <Link href="/kontakt"><a className="text-body">Kontakt</a></Link>
            </Col>
            <Col lg={3} className="text-right">
              (social icons)
            </Col>
          </Row>

          <Row>
            <Col className="desktop-brand">
              <Link href="/"><a className="text-body">Theater am Campus</a></Link>
              <hr className="mt-0 pt-0" />
            </Col>
          </Row>
          
          <Row>
            <Col lg="auto">
              <Link href="/spielplan"><a className="text-body">Spielplan</a></Link>
            </Col>
            <Col></Col>
            <Col lg="auto">
              <Link href="/mitmachen"><a className="text-body">Mitmachen!</a></Link>
            </Col>
            <Col></Col>
            <Col lg="auto">
              <Link href="/ueber-das-tac"><a className="text-body">Über das TaC</a></Link>
            </Col>
            <Col></Col>
            <Col lg="auto">
              <Link href="/karten"><a className="text-body">Karten</a></Link>
            </Col>
            <Col></Col>
            <Col lg="auto">
              <Link href="/archiv"><a className="text-body">Archiv</a></Link>
            </Col>     
            <Col></Col>       
            <Col lg="auto">
              <Link href="/impressum"><a className="text-body">Impressum</a></Link>
            </Col>
            <Col></Col>
            <Col lg="auto">
              <Link href="/datenschutz"><a className="text-body">Datenschutz</a></Link>
            </Col>
          </Row>
        </Container>
        <Container as="main" className="mt-3 desktop-container">
          {children}
        </Container>
      </MediaQuery>

      {/* mobile */}
      <MediaQuery maxWidth={991}>
        <Navbar bg="light" expand={false} sticky="top">
          <Link href="/" passHref><Navbar.Brand>Theater am Campus</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link href="/spielplan" passHref><Nav.Link>Spielplan</Nav.Link></Link>
              <Link href="/mitmachen" passHref><Nav.Link>Mitmachen!</Nav.Link></Link>
              <Link href="/ueber-das-tac" passHref><Nav.Link>Über das TaC</Nav.Link></Link>
              <Link href="/karten" passHref><Nav.Link>Karten</Nav.Link></Link>
              <Link href="/archiv" passHref><Nav.Link>Archiv</Nav.Link></Link>
              <Link href="/kontakt" passHref><Nav.Link>Kontakt</Nav.Link></Link>
              <Link href="/impressum" passHref><Nav.Link>Impressum</Nav.Link></Link>
              <Link href="/datenschutz" passHref><Nav.Link>Datenschutz</Nav.Link></Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container as="main" fluid={true}>
          {children}
        </Container>
      </MediaQuery>
    </>
  )
}
