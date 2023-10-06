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
      link: "https://sayanmanda.github.io/Imsayan.github.io/"
    },
    {
      title: "E-commerce Website",
      description: "One of the most rewarding challenges I've tackled as a frontend developer was the design and development of an innovative ecommerce platform. In this project, I had the opportunity to merge my technical prowess with my passion for creating captivating online shopping experiences.",
      imgUrl: projImg2,
      link:"https://storehook-online-store.netlify.app/"
    },
    {
      title: "E-learning Website",
      description: "One of the standout projects in my portfolio is my work on an eLearning platform, where I had the privilege of merging my passion for frontend development with the realm of education. ",
      imgUrl: projImg3,
      link: "https://sayanmanda.github.io/e-learning/"
    },
    {
      title: "Real Estate Website",
      description: "One of my noteworthy projects in my portfolio is the development of a comprehensive real estate website, where I had the opportunity to combine my frontend development expertise with a deep understanding of the real estate industry.",
      imgUrl: projImg4,
      link: "https://nesting-nucleus-seven.vercel.app/"
    },
    {
      title: "Real time chat website",
      description: "One of the standout projects in my portfolio is the creation of a real-time chat website, a dynamic platform built on the synergy of Firebase and React. This project exemplifies my proficiency in developing interactive and engaging web applications that leverage cutting-edge technologies.",
      imgUrl: projImg5,
      link: "https://chat-72.firebaseapp.com/login"
    },
    {
      title: "Contact Form",
      description: "One of the noteworthy projects in my portfolio is the development of a feature-rich contact form integrated with EmailJS, showcasing my ability to create efficient and user-friendly communication tools. For this project.",
      imgUrl: projImg6,
      link: "https://connect-sayan.netlify.app/"
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
                <h2>Journey So Far..
</h2>
                <p>Embrace the journey, for it is in the steps taken that stories are written, lessons are learned, and the beauty of the unknown unfolds.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Education</Nav.Link>
                      
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Experience</Nav.Link>
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
                    <div className="edu" style={{display:'flex',justifyContent:'center',alignItems:'center',color:'#B8B8B8'}}>
                    <ul>
                   <li><p>Has Done 10th from Midnapore Collegiate School (H.S) in 2017 with 65% marks
</p></li>
                    
                   
                    <li><p>Has Done 12th from Midnapore Town School (H.S) in 2019 with 60% marks
</p></li>
                    
                    <li><p>Recently Completed B.Tech from Netaji Subhash Engineering College in Mechanical Engineering 

</p></li>
                    </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <div className="ex" style={{display:'flex',justifyContent:'center',alignItems:'center',color:'#B8B8B8'}}>
                    <ul>
        
        <p>Titagarh Wagons Ltd.</p>
    
    
        <p>Design and marketing analysis of railway wagons and its related components</p>
  
    <li>
        <p>Worked on drawing, design, and technical presentation of various Railway wagon and components.</p>
    </li>
    <li>
        <p>Assisted the mechanical engineering team in designing various railway wagons and components.</p>
    </li>
    <li>
        <p>Worked on creating technical drawings and specifications for the railway wagons and components using CAD software.</p>
    </li>
    <li>
        <p>Conducted research on industry standards, safety regulations, and performance requirements related to railway engineering.</p>
    </li>
</ul>
                    </div>
    
    
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
