import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
import projImg1 from "../assets/img/qlee-img.jpg";
import projImg2 from "../assets/img/dakks-img.png";
import projImg3 from "../assets/img/gerb-img.webp";
import projImgGaming from "../assets/img/gaming-img.png";
import projImgForum from "../assets/img/forum-img.jpg";
import projImgGPS from "../assets/img/gps-img.jpg";
import projImgDIHK from "../assets/img/dihk-img.webp";
import projImgFAMU from "../assets/img/famu-img.png";

import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsProfessional = [
    {
      title: "QLEE",
      description: "Web Development",
      imgUrl: projImg1,
    },
    {
      title: "DAkkS",
      description: "Web Development for new features & Support",
      imgUrl: projImg2,
    },
    {
      title: "Gerb",
      description: "Web Development (CMS)",
      imgUrl: projImg3,
    },
  ];

  const projectsPrivate = [
    {
      title: "Gaming Client",
      description: "React-Eletron-Application",
      imgUrl: projImgGaming,
    },
    {
      title: "Forum Website",
      description: "React, REST-service and MongoDB",
      imgUrl: projImgForum,
    },
    {
      title: "GPS-Timer App",
      description: "Android application",
      imgUrl: projImgGPS,
    },
  ];

  const projectsUpcoming = [
    {
      title: "DIHK",
      description: "Web Development",
      imgUrl: projImgDIHK,
    },
    {
      title: "Familienunternehmer",
      description: "Web Development",
      imgUrl: projImgFAMU,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In the following section you can see a selection of the projects I've been working on professionally but also for myself.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Professional</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Private</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Upcoming...</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsProfessional.map((projectsProfessional, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projectsProfessional}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectsPrivate.map((projectsPrivate, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projectsPrivate}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projectsUpcoming.map((projectsUpcoming, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projectsUpcoming}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
