import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import Home from "./components/Home";




const App = () => {
  return (
    <GoogleOAuthProvider clientId='683899391622-a6kii8cr2sb4ov9olhqhngjhsl7eka2v.apps.googleusercontent.com'>
      <Router>
        <div>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider> 
  );
};

export default App;