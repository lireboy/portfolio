import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
import projImg1 from "../assets/img/qlee-img.jpg";
import projImg2 from "../assets/img/dakks-img.png";
import projImg3 from "../assets/img/gerb-img.webp";
import projImg4 from "../assets/img/logo_repami.webp";
import projImgGaming from "../assets/img/gaming-img.png";
import projImgForum from "../assets/img/forum-img.jpg";
import projImgGPS from "../assets/img/gps-img.jpg";
import projImgDIHK from "../assets/img/dihk-img.webp";
import projImgFAMU from "../assets/img/famu-img.png";
import placeholderStrapi from "../assets/img/generatedImages/angular_and_strapi.webp";
import placeholderWebDevelopment from "../assets/img/generatedImages/web_development.jpg";
import placeholderReact from "../assets/img/generatedImages/react_and_nodejs.jpeg";

import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsProfessional = [
    {
      title: "Online Repair Services Portal",
      description: "Web Development & integrated Headless-CMS (Strapi) for managing repair services",
      imgUrl: placeholderStrapi,
      imgAlt: "Logo",
      // global: "https://repami.de/",
      global: null,
      github: null
    },
    {
      title: "Visualization Tool for Algorithmic Processes",
      description: "Web Development with react.js to visualize complex algorithmic processes",
      imgUrl: placeholderReact,
      imgAlt: "Logo",
      // global: "https://orel.hsu-hh.de/Allgemeines/Startseite",
      global: null,
      github: null
    },
    {
      title: "Platform for Renewable Energy Qualification",
      description: "Web Hosting/Development + CMS Integration for educational portal in the energy sector",
      // imgUrl: projImg1,
      imgUrl: placeholderWebDevelopment,
      imgAlt: "Logo",
      // global: "https://qlee.eu/",
      global: null,
      github: null
    },
    {
      title: "Digital Portal for Compliance & Certification",
      description: "PHP Implementation of a digital platform for managing certifications and audits",
      // imgUrl: projImg2,
      imgUrl: placeholderWebDevelopment,
      imgAlt: "Logo",
      // global: "https://www.dakks.de/de/home.html",
      global: null,
      github: null
    },
    {
      title: "Company website",
      description: "Web Development (CMS) for a large-sized industrial company",
      // imgUrl: projImg3,
      imgUrl: placeholderWebDevelopment,
      imgAlt: "Logo",
      // global: "https://de.gerb.com/",
      global: null,
      github: null
    },

  ];

  const projectsPrivate = [
    {
      title: "Gaming Client",
      description: "React-Eletron-Application",
      imgUrl: projImgGaming,
      imgAlt: "Gaming Logo",
      global: null,
      github: "https://github.com/lireboy/universe"
    },
    {
      title: "Forum Website",
      description: "React, REST-service and MongoDB",
      imgUrl: projImgForum,
      imgAlt: "Forum Logo",
      global: null,
      github: "https://github.com/lireboy/forumPage"
    },
    {
      title: "GPS-Timer App",
      description: "Android application",
      imgUrl: projImgGPS,
      imgAlt: "Timer Logo",
      global: null,
      github: "https://github.com/lireboy/GPS-Timer"
    },
  ];

  const projectsUpcoming = [
    {
      title: "member portal",
      description: "Web Development of a member portal with Angular, .NET Core and Strapi CMS",
      imgUrl: placeholderStrapi,
      imgAlt: "Logo",
      global: null,
      github: null
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
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
      <img className="background-image-right" src={colorSharp2} alt="gradient color for the background"></img>
    </section>
  )
}
