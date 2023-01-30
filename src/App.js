import "./App.scss";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Intro from "./components/intro";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
function App() {
  return (
    <div className="App">
      <Intro />
      <Skills/>
      <Portfolio/>
      <Blogs/>
      <Contact/>
    </div>
  );
}

export default App;
