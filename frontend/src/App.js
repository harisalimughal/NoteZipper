
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './components/Screens/LandingPage/LandingPage';
import MyNotes from './components/My Notes/MyNotes';
import { BrowserRouter,Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/mynotes" Component={MyNotes} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
