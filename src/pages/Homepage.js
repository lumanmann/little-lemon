import "../assets/scss/all.scss";
import Landing from "../components/home/Landing";
import Specials from "../components/home/Specials";
import Testimonials from "../components/home/Testimonials";
import About from "../components/home/About";

export default function Homepage() {
  return (
    <main>
      <Landing />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
}
