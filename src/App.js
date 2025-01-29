//import logo from './logo.svg';
//import './App.css';

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './template.css';
import Header from './template/Header';

import Content from './template/Content';
import Footer from './template/Footer';
import { AuthProvider } from './context/AuthContext';
//import 'materialize-css/dist/css/materialize.min.css';



function App() {
  return (
    <AuthProvider>
            <Router>
                <Header />

                <Footer />
            </Router>
        </AuthProvider>
  );
}

export default App;
