import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CourseListings from "./pages/CourseListings.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/courses" element={<CourseListings />} />
      </Routes>
    </Router>
  );
}

export default App;
