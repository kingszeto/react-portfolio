import Intro from './sections/Intro'
import AboutMe from './sections/AboutMe'
import TrainStation from './components/TrainStation'
import ResumeBox from './components/ResumeBox'
import UCICS from './items/schoolmajor.svg'
import HackNY from './items/hackny.svg'
import HackAtUCI from './items/hackatuci.svg'
import UCIESS from './items/uciess.svg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Route1 from './routes/Route1'
import {Helmet} from "react-helmet"
import './App.css';

function App() {
  return (
    <Container>
    <Row>
      <Col xs={2}></Col>
      <Col xs={8}>
        <div className="App">
          <Route1/>
          <Intro/>
          <h3 style={{marginBottom: '-35px'}}>About Me</h3>
          <TrainStation
            svgpath={UCICS}
            />
          <br></br>
          <AboutMe/>

          <TrainStation
            svgpath={HackNY}
          /> 

          <ResumeBox
            subdescript="Software Engineering Intern, Fellow"
            items = {[
              "Coming soon!",
            ]}
          />
          <br></br>
          <TrainStation
            svgpath={HackAtUCI}
          />
          <ResumeBox
            subdescript="Corporate Outreach Organizer"
            items = {[
              "Outreach to companies and other campus organizations for Hack at UCI's year-round events and flagship hackathon, HackUCI",
              "All hands on deck during hackathons so events go smoothly"
            ]}
          />

          <br></br>
          <TrainStation
            svgpath={UCIESS}
          />
          <ResumeBox
            subdescript="Undergraduate Research Assistant"
            items = {[
              "Analyzed data on Madden Julian Oscillations within the Western Pacific using Python statistical libraries in the Pritchard Lab",
              "Visualized, compared, and constrasted data from simulated MIT data and public data from the National Oceanic and Atmospheric Administration"
            ]}
          />
        </div>
      </Col>
      <Col xs={2}></Col>
    </Row>
  </Container>
  );
}

export default App;
