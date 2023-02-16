import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizPage from "./components/QuizPage";
import ScorePage from "./components/ScorePage";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/score" element={<ScorePage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
