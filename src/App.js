import Intro from './sections/Intro'
import AboutMe from './sections/AboutMe'
import TrainStation from './components/TrainStation'
import ResumeBox from './components/ResumeBox'
import './App.css';
function App() {
  return (
    <div className="App">
      <Intro/>
      
      <h3>About Me</h3>
      <TrainStation
        exp="UC Irvine"
        textsize="53px"
        misc={[2,0,2,2,'C','S']}
      />
      <AboutMe/>

      <TrainStation
        exp="HackNY"
        textsize = "53px"
        misc={['','M','A','Y', 2,0,2,1]}
      /> 

      <ResumeBox
        subdescript="Software Engineering Intern, Fellow"
        items = {[
          "Coming soon!",
        ]}
      />
      <br></br>
      <TrainStation
        exp="Hack at UCI"
        textsize="45px"
        misc={[2,0,2,0,'N','O','W']}
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
        exp="UCI Earth Systems"
        textsize="30px"
        misc={[2,0,1,9,'','',2,0]}
      />
      <ResumeBox
        subdescript="Undergraduate Research Assistant"
        items = {[
          "Analyzed data on Madden Julian Oscillations within the Western Pacific using Python statistical libraries in the Pritchard Lab",
          "Visualized, compared, and constrasted data from simulated MIT data and public data from the National Oceanic and Atmospheric Administration"
        ]}
      />

    </div>
  );
}

export default App;
