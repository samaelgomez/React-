import { Suspense } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import AppRouter from './router/router';

export default function App() {
  return (
    <div className="pageContainer">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Layout>
            <AppRouter/>
          </Layout>
        </Router>
      </Suspense>
    </div>
  );
}