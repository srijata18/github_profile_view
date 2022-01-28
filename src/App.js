import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Footer from './components/layout/Footer';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alerts/AlertContext';
import Alert from './components/layout/Alert';
import User from './pages/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router>
    <div  className=" bg-gray-600 flex flex-col justify-between h-screen">
      <Navbar/>

      <main className='container mx-auto px-3 pb-12'>

        <Alert/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/notfound' element={<NotFound/>} />
          <Route path='/user/:login' element={<User/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </main>

      <Footer/>
  </div>
  </Router>
  </AlertProvider>
  </GithubProvider>
  );
}

export default App;
