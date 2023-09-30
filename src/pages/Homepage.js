import '../assets/scss/all.scss';
import Booking from "../components/home/Booking";
import Specials from "../components/home/Specials";
import Testimonials from "../components/home/Testimonials";
import About from "../components/home/About";


export default function Homepage() {
  return (
    <>
      <main>
        <Booking />
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
}
