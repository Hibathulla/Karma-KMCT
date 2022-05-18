import { Fragment } from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Ambassadar from "./components/Ambassadar/Ambassadar";
import Alumni from "./components/Alumni/Alumni";
import ContactUs from "./components/ContactUs/ContactUs";
import PreLoader from "./pages/PreLoader/PreLoader";
import Tickets from "./pages/Tickets/Tickets";

function App() {
  return (
    <Fragment>
      <PreLoader />
      <Hero />
      <About />
      <Events />
      <Ambassadar />
      <Alumni />
      <ContactUs />
      <Tickets />
    </Fragment>
  );
}

export default App;
