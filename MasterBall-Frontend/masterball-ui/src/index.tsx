// Library Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// Style Imports
import './index.css';

// Component Imports
import Dashboard from './pages/dashboard/Dashboard';
import SetViewer from './pages/set_viewer/SetViewer';
import Navigation from './components/navigation/Navigation';
import Header from './components/header/Header';
import News from "./components/news/News";

// Theme Imports
import DarkTheme from './assets/DarkTheme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={DarkTheme}>
        <Header />
        <div className="main-container">
          <Navigation />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/set-viewer" element={<SetViewer />} />
          </Routes>
          <News />
          </div>
        </ThemeProvider>
    </Router>
  </React.StrictMode>
);

