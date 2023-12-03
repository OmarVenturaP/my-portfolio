import Header from "./components/header";
import About from "./components/about";

export default function Home() {
  return (
    <div className="bg-dark text-light">
      <div className="container">
        <Header />
        <About />
      </div>
    </div>
  )
}
