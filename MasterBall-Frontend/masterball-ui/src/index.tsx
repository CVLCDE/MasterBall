// Library Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

// Style Imports
import './index.css';


// Component Imports
import Dashboard from './pages/dashboard/Dashboard';
import SetViewer from './pages/set_viewer/SetViewer';
import Navigation from './components/navigation/Navigation';
import Header from './components/header/Header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <div className="main-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/set-viewer" element={<SetViewer />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);

