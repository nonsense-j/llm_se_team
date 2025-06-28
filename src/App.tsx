import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SeminarPage } from './pages/SeminarPage';
import { SeminarDetailPage } from './pages/SeminarDetailPage';
import { PaperCollectionPage } from './pages/PaperCollectionPage';
import { Layout } from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/seminars" element={<SeminarPage />} />
          <Route path="/seminars/:id" element={<SeminarDetailPage />} />
          <Route path="/papers" element={<PaperCollectionPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;