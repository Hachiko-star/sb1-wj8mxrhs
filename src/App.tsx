import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import FlashcardApp from './components/FlashcardApp';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <FlashcardApp />
      </Layout>
    </ThemeProvider>
  );
}

export default App;