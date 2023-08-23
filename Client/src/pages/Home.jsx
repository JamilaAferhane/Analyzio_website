import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero';
import AnalyzingTypes from '../components/AnalyzingTypes/AnalyzingTypes';
import Value from '../components/Value/Value'
import Mecanism from '../components/Mecanism/Mecanism'
import Footer from '../components/Footer/Footer';
function Home() {
  return (
    <div className="App">
      <div>
        <div />
        <Header/>
        <Hero/>
      </div>
      <AnalyzingTypes/>
      <Value/>
      <Mecanism/>
      <Footer/>

    </div>
  );
}

export default Home;
