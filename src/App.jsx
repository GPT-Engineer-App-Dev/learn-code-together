import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CourseListings from "./pages/CourseListings.jsx";
import CodeEditor from "./pages/CodeEditor.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/courses" element={<CourseListings />} />
      <Route path="/code-editor" element={<CodeEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
