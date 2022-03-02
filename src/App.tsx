import React from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { PokeList } from './components/PokeList';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <Header />
    <PokeList />
    <Footer />
    <GlobalStyle />
    </>
  );
}

export default App;
