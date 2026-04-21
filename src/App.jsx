import NavBar from "./components/NavBar"
import Home from "./components/Home"
import SocialLinks from "./components/SocialLinks"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import LeadershipPhilosophy from "./components/LeadershipPhilosophy"
import Contact from "./components/Contact"

/**
 * Composes the portfolio sections in strategic order.
 * @returns {JSX.Element} Main app layout.
 */
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <LeadershipPhilosophy />
      <Experience />
      <Portfolio />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
