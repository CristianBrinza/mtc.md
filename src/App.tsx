import './App.css'
import Navbar from "./components/navbar/Navbar.tsx";
import {LanguageProvider} from "./context/LanguageContext.tsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home.tsx";
import NotFound from "./pages/not_found/NotFound.tsx";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.tsx';
import Triple from './pages/oferte/triple/Triple.tsx';
import Chat from './components/chat/Chat.tsx';
import Feedback from './components/feedback/Feedback.tsx';

function App() {


  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>

      <LanguageProvider>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:lang/" element={<Home/>}/>
          <Route path="/:lang/triple" element={<Triple/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

      </LanguageProvider>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App
