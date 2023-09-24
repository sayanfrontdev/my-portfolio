import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Portfolio Design",
      description: "In designing my own portfolio, I approached the project with the same level of creativity and attention to detail that I bring to my frontend development work.",
      imgUrl: projImg1,
    },
    {
      title: "E-commerce Website",
      description: "One of the most rewarding challenges I've tackled as a frontend developer was the design and development of an innovative ecommerce platform. In this project, I had the opportunity to merge my technical prowess with my passion for creating captivating online shopping experiences.",
      imgUrl: projImg2,
    },
    {
      title: "E-learning Website",
      description: "One of the standout projects in my portfolio is my work on an eLearning platform, where I had the privilege of merging my passion for frontend development with the realm of education. ",
      imgUrl: projImg3,
    },
    {
      title: "Real Estate Website",
      description: "One of my noteworthy projects in my portfolio is the development of a comprehensive real estate website, where I had the opportunity to combine my frontend development expertise with a deep understanding of the real estate industry.",
      imgUrl: projImg4,
    },
    {
      title: "Real time chat website",
      description: "One of the standout projects in my portfolio is the creation of a real-time chat website, a dynamic platform built on the synergy of Firebase and React. This project exemplifies my proficiency in developing interactive and engaging web applications that leverage cutting-edge technologies.",
      imgUrl: projImg5,
    },
    {
      title: "Contact Form",
      description: "One of the noteworthy projects in my portfolio is the development of a feature-rich contact form integrated with EmailJS, showcasing my ability to create efficient and user-friendly communication tools. For this project.",
      imgUrl: projImg6,
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
                <p>Throughout my career as a frontend developer, I've had the privilege of working on a diverse range of projects that showcase my passion for creating exceptional web experiences. Each project I undertake is a journey in problem-solving and creativity, where I blend my technical expertise with a keen understanding of user needs.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Upcoming....</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Upcoming....</p>
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
