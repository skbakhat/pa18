import React from "react";
import "./style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  FormControl,
  Form,
} from "react-bootstrap";

function Navbaar() {
  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <div className="widthh">
          <Navbar.Brand href="#home">Jenkins</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="cd " id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  What is CDF?
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Jenkins X
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Tikton</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Spinnaker
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Blog</Nav.Link>
              <NavDropdown title="Documentation " id="collasible-nav-dropdown">
                <NavDropdown.Item className="bollder" href="#action/3.1">
                  User Guide
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  - Installing Jenkins
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  - Jenkins Pipeline
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  - Managing Jenkins
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  - Security Jenkins
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  - System Adminstration
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  - Terms and Definations
                </NavDropdown.Item>
                <NavDropdown.Item className="bollder" href="#action/3.1">
                  Solution pages
                </NavDropdown.Item>
                <NavDropdown.Item className="bollder" href="#action/3.1">
                  Tutorials
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  - Guided Toure
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  - More Tutorials
                </NavDropdown.Item>
                <NavDropdown.Item className="bollder" href="#action/3.1">
                  Developer Guide
                </NavDropdown.Item>
                <NavDropdown.Item className="bollder" href="#action/3.1">
                  Contibuter Guide
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#deets">Plugins</Nav.Link>
              <NavDropdown title="Community " id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Overview</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Chat</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Meet</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Events</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Issue Tracker
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Mailing Lists
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Roadmap</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Account Management
                </NavDropdown.Item>
                <NavDropdown.Item className="bollder" href="#action/3.1">
                  Special Interist Group
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  - dvocacy and Outeach
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  - Chinese Localization
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  - Cloud Native
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  - Documentation
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  - Google Summer of Code
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  - Hardware and EDA{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  - Pipeline Authoring
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  - Plateform
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  - User Exparience
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Subprojects " id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Overview</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Evergreen
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Google Summer of Code in Jenkins
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Infracture
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  CI/CD and Jenkins Area Meetups
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Jenkins Configration as Code
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Jenkins Operator
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Jenkins Remoting
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Document Jenkins on Kibernetes
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About " id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Roadmap</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Security</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Press</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Awards</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Cnduct</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Artwork</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="English " id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Chinese</NavDropdown.Item>
              </NavDropdown>
              <Button variant="outline-secondary">Download</Button>{" "}
              <Form className="d-flex mag">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Navbaar;
