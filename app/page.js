import Header from "./components/header";
import Nav from "./components/nav";
import HardSkills from "./components/hardSkills";
import Projects from "./components/projects";
import Jobs from "./components/jobs";
import About from "./components/about";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-dark text-light">
      <Header />
      <div className="container">
        <Nav />
        <Jobs />
        <Projects />
        <HardSkills />
        <About />
      </div>
      <Footer className="footer" />
    </div>
  );
}
