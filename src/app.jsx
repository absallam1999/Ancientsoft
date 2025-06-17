import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Game from "./Pages/Games/Game";
import Prog from "./Pages/Apps/App";
import Games from "./Pages/Games";
import Apps from "./Pages/Apps";
import Request from "./Pages/Request";
import Privacy from "./Pages/Privacy";
import Usage from "./Pages/Usage";
import Terms from "./Pages/Terms";
import ErrorPage from "./Pages/404";
import Help from "./Pages/Help";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/games" element={<Games />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/app/:id" element={<Prog />} />
          <Route path="/request" element={<Request />} />
          <Route path="/help" element={<Help />} />
          <Route path="/usage" element={<Usage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
