import Header from "./components/header";
import About from "./components/about";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-dark text-light">
      <div className="container">
        <Header />
        <About />
        <Footer className="footer" />
      </div>
    </div>
  )
}
