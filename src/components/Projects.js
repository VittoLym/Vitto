import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import vittBlogImage from "../assets/img/vittblog.png"
import expenseTrackerImage from "../assets/img/CLI_expense_tracker.png"
import wspDaily from "../assets/img/whatsapp_daily.png"
import shortUrl from "../assets/img/short_url.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import trainifyAPI from "../assets/img/trainify_api2.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = []
  const projectsPersonal = [
    {
      title:"Vitt.Blog",
      description:"Personal blog where I regularly share content about technology, personal projects, and other related topics.",
      imgUrl: vittBlogImage,
      url:'https://vittblog.netlify.app',
      type:"FRONTEND",
      tec:[]
    },
    {
      title:"Expense Tracker",
      description:"Node.js CLI tool focused on expense management, budget tracking, and data persistence, showcasing clean architecture and backend fundamentals.",
      imgUrl: expenseTrackerImage,
      url: "https://github.com/VittoLym/CLI_Expense_Tracker_node",
      type:"BACKEND",
      tec:[]
    },
    {
      title:"Daily WSP",
      description:"WhatsApp bot built with Node.js that sends automated daily reminders to groups, with real user mentions and persistent session handling.",
      imgUrl: wspDaily,
      url: "https://github.com/VittoLym/daily_wsp",
      type:"BACKEND",
      tec:[]
    },
    {
      title:"Short URL",
      description:"A simple RESTful URL shortener API built with Node.js and Express, featuring redirects, CRUD operations, and access statistics for each short link.",
      imgUrl:shortUrl,
      url:"https://github.com/VittoLym/short-url",
      type:"BACKEND",
      tec:[]
    },
    {
      title:"Trainify API",
      description:"A fitness tracking backend with JWT authentication, workout management, exercise database, progress reports, and PostgreSQL integration.",
      imgUrl:trainifyAPI,
      url:"https://github.com/VittoLym/Trainify_api",
      type:"BACKEND",
      tec:[]
    }
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
                <p>Here are some of the projects I’ve built with passion and curiosity. Each one represents a challenge overcome and a step forward in my journey as a developer.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Empresarial</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Freelance</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Personal</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first" className="justify-content-center align-items-center">
                      <Row>
                        {projects.length > 0 ? (
                          projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))
                        ) : (
                          <Col>
                            <p className="text-center text-gray-500 italic mt-4">Not yet 🔧</p>
                          </Col>
                        )}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {projects.length > 0 ? (
                          projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))
                        ) : (
                          <Col>
                            <p className="text-center text-gray-500 italic mt-4">Not yet 🔧</p>
                          </Col>
                        )}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row className="container-pro">
                        {projectsPersonal.length > 0 ? (
                          projectsPersonal.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))
                        ) : (
                          <Col>
                            <p className="text-center text-gray-500 italic mt-4">Not yet 🔧</p>
                          </Col>
                        )}
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
