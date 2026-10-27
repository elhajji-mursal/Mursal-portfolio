import React from 'react';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default App;
