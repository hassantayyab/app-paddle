import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Layout from './layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
