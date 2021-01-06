import './App.scss';
import Intro from './components/Intro'
import DisplayIntro from './components/DisplayIntro'

function App() {
  return (
<div>
  <Intro/>
  <div className="intro" id="intro"> 
  <DisplayIntro/>
  </div>
</div>
  );
}

export default App;
