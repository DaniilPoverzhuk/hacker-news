import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Container from './components/Container';
import Home from './pages/Home';
import NewsPage from './pages/NewsPage';

import PAGES from './routes';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route
            path={PAGES.HOME}
            element={<Home />}
          />
          <Route
            path={PAGES.NEWS_PAGE}
            element={<NewsPage />}
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;
