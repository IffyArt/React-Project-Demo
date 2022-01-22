import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/auth.context';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsPage/NewsDetailPage';
import MemberCenterPage from './pages/MemberCenterPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Header />
        <main className='container'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='about-us' element={<AboutUsPage />} />
            <Route path='news' element={<NewsPage />} />
            <Route path='news/:id' element={<NewsDetailPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='member-center' element={<MemberCenterPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
